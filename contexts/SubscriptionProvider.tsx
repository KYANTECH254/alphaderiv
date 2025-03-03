"use client";

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Cookies } from "react-cookie";
import { checkUserSession } from "@/actions/operations";
import { User } from "@/db/types";

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
    const cookies = new Cookies();

    useEffect(() => {
        let interval: NodeJS.Timeout;

        const checkAuth = async () => {
            const userToken = cookies.get("userToken");

            if (!userToken) {
                console.log("No token found. Redirecting to login...");
                setIsLoggedIn(false);
                setSubscriptionPackage(null);
                router.push("/login");
                return;
            }

            try {
                const response = await checkUserSession();

                if (!response.isValid || !response.user) {
                    console.log("Session invalid:", response.message);
                    setIsLoggedIn(false);
                    setSubscriptionPackage(null);
                    router.push("/login");
                    return;
                }

                console.log("✅ User session valid:", response.user);
                setSubscriptionPackage(response.user ?? null);
                setIsLoggedIn(true);
            } catch (error) {
                console.error("Error checking user session:", error);
                setIsLoggedIn(false);
                setSubscriptionPackage(null);
                router.push("/login");
            }
        };

        checkAuth();

        interval = setInterval(() => {
            console.log("🔄 Rechecking session...");
            checkAuth();
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const logout = () => {
        cookies.remove("userToken");
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
