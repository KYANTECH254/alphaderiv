"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { loginUser } from "@/actions/operations";

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleConfirmLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const cleanedPhone = phoneNumber.trim();
        const phoneRegex = /^(07|01)\d{8}$/;

        if (!cleanedPhone || !phoneRegex.test(cleanedPhone)) {
            toast.error("Please enter a valid 10-digit phone number starting with 07 or 01.", {
                duration: 5000,
                classNames: {
                    toast: 'toast-error',
                }
            });
            setIsLoading(false);
            return;
        }

        try {
            const response = await loginUser(cleanedPhone);
            setIsLoading(false);

            if (response.type === "success") {
                toast.success("Login successful! Redirecting...", {
                    duration: 5000,
                    classNames: {
                        toast: 'toast-success',
                    },
                });
                router.push("/");
            } else {
                toast.error(response.message, {
                    duration: 5000,
                    classNames: {
                        toast: 'toast-error',
                    }
                });
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.", {
                duration: 5000,
                classNames: {
                    toast: 'toast-error',
                }
            });
            setIsLoading(false);
        }
    };

    return (
        <form className="p-5" onSubmit={handleConfirmLogin}>
            <h1 className="text-xl font-bold">Login using your phone number</h1>
            <div className="flex flex-col">
                <label className="formLabel" htmlFor="phone">Enter phone number</label>
                <input
                    className="formInput"
                    type="tel"
                    name="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    required
                />
            </div>

            <button
                className="h-12 w-full text-white rounded-md font-bold text-lg bg-green-500 hover:bg-green-600"
                type="submit"
            >
                {isLoading ? "Logging in..." : "Login to your account"}
            </button>

            <h2>Don't have a package?</h2>
            <Link href="/subscribe">
                <button className="h-12 w-full text-white rounded-md font-bold text-lg bg-red-500 hover:bg-red-600">
                    Subscribe to a package
                </button>
            </Link>
        </form>
    );
}
