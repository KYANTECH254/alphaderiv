"use client";

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";
import { checkUserSession } from "@/actions/operations";
import { getCookies, deleteCookie } from "@/lib/data";
import { toast } from "sonner";

type SubscriptionContextType = {
    isLoggedIn: boolean;
    subscriptionPackage: any;
    setSubscriptionPackage: Dispatch<SetStateAction<any>>;
    logout: () => void;
};

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [subscriptionPackage, setSubscriptionPackage] = useState<any>();
    const router = useRouter();

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let path = window.location.pathname;

        const checkAuth = async () => {
            const userToken = getCookies();

            if (!userToken) {
                setIsLoggedIn(false);
                setSubscriptionPackage(null);
                if (path.includes("/login") || path.includes("/subscribe")) return;
                router.push("/login");
                return;
            }

            try {
                const response = await checkUserSession();

                if (!response.isValid || !response.user) {
                    setIsLoggedIn(false);
                    setSubscriptionPackage(null);
                    if (path.includes("/login") || path.includes("/subscribe")) return;
                    router.push("/login");
                    return;
                }

                setSubscriptionPackage(response.user ?? null);
                setIsLoggedIn(true);
            } catch (error) {
                setIsLoggedIn(false);
                setSubscriptionPackage(null);
                if (path.includes("/login") || path.includes("/subscribe")) return;
                router.push("/login");
            }
        };

        checkAuth();

        interval = setInterval(() => {
            checkAuth();
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const socket = io({
            path: "/api/socket",
            transports: ["websocket", "polling"],
        });

        socket.on("connect", () => {
            console.log("Connected to WebSocket", socket.id);
        });

        socket.on("payment_update", (data: any) => {
            if (data.paid) {
                toast.success("Payment received. Redirecting...", {
                    duration: 5000,
                    classNames: {
                        toast: 'toast-success',
                    }
                });
                router.push("/");
            } else if (!data.paid) {
                toast.error("Payment failed, try again!", {
                    duration: 5000,
                    classNames: {
                        toast: 'toast-error',
                    }
                });
            }
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const logout = () => {
        deleteCookie();
        setIsLoggedIn(false);
        setSubscriptionPackage(null);
        router.push("/login");
    };

    return (
        <SubscriptionContext.Provider value={{ isLoggedIn, subscriptionPackage, setSubscriptionPackage, logout }}>
            {children}
        </SubscriptionContext.Provider>
    );
}

export function useSubscription() {
    const context = useContext(SubscriptionContext);
    if (!context) {
        throw new Error("useSubscription must be used within a SubscriptionProvider");
    }
    return context;
}
