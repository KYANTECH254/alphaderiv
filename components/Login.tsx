"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/useToasts";
import Toast from "./Toast";
import Link from "next/link";
import { loginUser } from "@/actions/operations";

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const { toastMessage, toastType, setToastMessage, setToastType } = useToast();
    const router = useRouter();
    const [isloading, setIsLoading] = useState(false);

    const handleConfirmLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)
        const cleanedPhone = phoneNumber.trim();
        const phoneRegex = /^(07|01)\d{8}$/;
        if (!cleanedPhone || !phoneRegex.test(cleanedPhone)) {
            setToastMessage("Please enter a valid 10-digit phone number starting with 07 or 01.");
            setIsLoading(false)
            setToastType("error");
            return;
        }

        try {
            // Call the loginUser server action
            const response = await loginUser(cleanedPhone);
            setIsLoading(false)

            if (response.type === "success") {
                setToastMessage("Login successful! Redirecting...");
                setToastType("success");

                // Redirect after a short delay
                setTimeout(() => {
                    router.push("/");
                }, 1500);
            } else {
                setToastMessage(response.message);
                setToastType("error");
            }
        } catch (error) {
            setToastMessage("Something went wrong. Please try again.");
            setToastType("error");
            setIsLoading(false)
        }
    };

    return (
        <>
            <Toast message={String(toastMessage)} type={toastType as "success" | "error" | "info"} />
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
                    {isloading ? "Logging in..." : "Login to your account"}
                </button>

                <h2>Don't have a package?</h2>
                <Link href="/subscribe">
                    <button className="h-12 w-full text-white rounded-md font-bold text-lg bg-red-500 hover:bg-red-600">
                        Subscribe to a package
                    </button>
                </Link>
            </form>
        </>
    );
}
