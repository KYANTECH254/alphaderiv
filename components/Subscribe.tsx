"use client"

import { useState } from "react";
import Toast from "./Toast";
import { useToast } from "@/hooks/useToasts";
import { subscribeUser } from "@/actions/operations";
import { useSubscription } from "@/contexts/SubscriptionProvider";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

type Package = {
    id: number;
    title: string;
    currency: string;
    price: number;
    period: string;
};

const Packages: Package[] = [
    { id: 1, title: "Hourly", currency: "KSH", price: 20, period: "1 hour" },
    { id: 2, title: "Daily", currency: "KSH", price: 100, period: "24 hours" },
    { id: 3, title: "Weekly", currency: "KSH", price: 500, period: "7 days" },
    { id: 4, title: "Monthly", currency: "KSH", price: 1000, period: "30 days" },
];

export default function Subscribe() {
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
    const { toastMessage, toastType, setToastMessage, setToastType } = useToast();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const { isLoggedIn, subscriptionPackage } = useSubscription();
    const router = useRouter();

    const handleSubscribe = (pkg: Package) => {
        setSelectedPackage(pkg);
        setIsModalOpen(true);
    };

    const handleConfirmSubscription = async () => {
        setIsLoading(true);
        const cleanedPhone = phoneNumber.trim();
        const phoneRegex = /^(07|01)\d{8}$/;
        if (!cleanedPhone || !phoneRegex.test(cleanedPhone)) {
            toast.error("Please enter a valid 10-digit phone number starting with 07 or 01.", {
                duration: 5000,
                classNames: {
                    toast: 'toast-error',
                }
            })
            setIsLoading(false);
            return;
        }

        const Mypackage = selectedPackage;
        const data = { phone: cleanedPhone, Mypackage };
        const resp = await subscribeUser(data);

        if (resp) {
            setToastMessage(resp.message);
            setToastType(resp.type);
            setIsModalOpen(resp.type !== "success");
            let tt = resp.type;
            tt === "success" ? (
                toast.success(resp.message, {
                    duration: 5000,
                    classNames: {
                        toast: 'toast-success',
                    }
                })
            ) : (
                toast.error(resp.message, {
                    duration: 5000,
                    classNames: {
                        toast: 'toast-error',
                    }
                })
            )
            setIsLoading(false);
        }
    };

    if (subscriptionPackage) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-semibold text-green-500 text-center">Your Current Subscription Package is <span className="text-red-500">{subscriptionPackage.package}</span></h1>

                <button
                    className="mt-4 bg-green-500 text-white px-6 py-3 rounded-md text-lg hover:bg-green-600 transition font-semibold text-center flex flex-row items-center gap-2"
                    onClick={() => router.push("/")}
                >
                    Start Trading <ArrowRight />
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col gap-5 mb-5">
                <div className="flex flex-col gap-2 items-center justify-center mt-5">
                    <h1 className="text-center text-xl font-semibold">Already have a Subscription Package ?</h1>
                    <span onClick={() => router.push("/login")} className="cursor-pointer text-xl text-green-500 underline hover:text-2xl text-center flex flex-row items-center">Login <ArrowRight /></span>
                </div>

                <div className="flex flex-wrap gap-4 items-center justify-center">
                    {Packages.map((pkg) => (
                        <div className="cursor-pointer" key={pkg.id} onClick={() => handleSubscribe(pkg)}>
                            <div className='accountCard'>
                                <div
                                    className={`accountCardType ${pkg.id === 1 ? "text-green-500" : pkg.id === 2 ? "text-yellow-500" : pkg.id === 3 ? "text-red-500" : "text-indigo-500"}`}
                                >
                                    {pkg.title}
                                    <span className="text-sm ml-2">{pkg.period}</span>
                                </div>
                                <div className='accountCardInfo'>
                                    {pkg.price} {pkg.currency}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {isModalOpen && selectedPackage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-[#222] p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold text-green-500">Confirm {selectedPackage.title} Subscription of {selectedPackage.price} {selectedPackage.currency}</h2>
                        <label className="text-white text-lg font-semibold mt-6">Enter phone number: Must be 10 digits.</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full p-2 rounded-md bg-black mt-1 text-white border border-gray-600 focus:outline-none focus:border-green-500"
                        />

                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-gray-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-700 transition"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </button>

                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                                onClick={handleConfirmSubscription}
                            >
                                {isloading ? "Initiating payment..." : "Pay Now"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
