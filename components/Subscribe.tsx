"use client"

import { useState } from "react";
import Toast from "./Toast";
import { useToast } from "@/hooks/useToasts";
import { subscribeUser } from "@/actions/operations";
import { useRouter } from "next/router";

type Package = {
    id: number;
    title: string;
    currency: string;
    price: number;
};

const Packages: Package[] = [
    {
        id: 1,
        title: "Daily",
        currency: "KSH",
        price: 100
    },
    {
        id: 2,
        title: "Weekly",
        currency: "KSH",
        price: 500
    },
    {
        id: 3,
        title: "Monthly",
        currency: "KSH",
        price: 1000
    }
];

export default function Subscribe() {
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
    const { toastMessage, toastType, setToastMessage, setToastType } = useToast()
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isloading, setIsLoading] = useState(false)
    const router = useRouter();

    const handleSubscribe = (pkg: Package) => {
        setSelectedPackage(pkg);
        setIsModalOpen(true);
    };

    const handleConfirmSubscription = async () => {
        setIsLoading(true)
        const cleanedPhone = phoneNumber.trim();
        const phoneRegex = /^(07|01)\d{8}$/;
        if (!cleanedPhone || !phoneRegex.test(cleanedPhone)) {
            setToastMessage("Please enter a valid 10-digit phone number starting with 07 or 01.");
            setToastType("error");
            setIsLoading(false)
            return;
        }

        const Mypackage = selectedPackage;
        const data = {
            phone: cleanedPhone,
            Mypackage
        }

        const resp = await subscribeUser(data);
        if (resp) {
            if (resp.type === "success") {
                setToastMessage(resp.message);
                setToastType(resp.type);
                setIsModalOpen(false);
                setIsLoading(false)

                setTimeout(() => {
                    router.push("/login")
                }, 3000)
            } else {
                setToastMessage(resp.message);
                setToastType(resp.type);
                setIsModalOpen(true);
                setIsLoading(false)
            }
        }
    };


    return (
        <>
            <Toast
                message={String(toastMessage)}
                type={toastType as "success" | "error" | "info"}
            />


            <div className="flex flex-col gap-2 mb-5">
                <h1 className="bg-gray-500/10 text-2xl font-semibold mb-4 border-l-4 p-2 border-green-500 pl-2 flex items-center rounded-md text-center">
                    Subscribe to a package & start trading!
                </h1>

                <div className="flex flex-wrap gap-4 items-center justify-center">
                    {Packages.map((pkg) => (
                        <div key={pkg.id} className="border p-4 rounded-3xl shadow-md bg-[#222] hover:animate-pulse">
                            <div className={`text-2xl font-bold ${pkg.id === 1 ? "text-green-500" : pkg.id === 2 ? "text-yellow-500" : "text-red-500"}`}>
                                {pkg.title}
                            </div>
                            <div className="text-lg mt-1 font-bold">
                                {pkg.price} {pkg.currency}
                            </div>
                            <button
                                className="font-bold mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition cursor-pointer"
                                onClick={() => handleSubscribe(pkg)}
                            >
                                Subscribe
                            </button>
                        </div>
                    ))}
                </div>
            </div>


            {/* MODAL */}
            {isModalOpen && selectedPackage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-[#222] p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-semibold text-green-500">Confirm Subscription</h2>
                        <p className="text-white mt-2">Package: <span className="font-bold">{selectedPackage.title}</span></p>
                        <p className="text-white">Price: <span className="font-bold">{selectedPackage.price} {selectedPackage.currency}</span></p>
                        <label className="text-white text-lg font-semibold mt-6" htmlFor="Phone Number">Must be 10 digits.</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-green-500"
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
                                {isloading ?
                                    "Iniating payment..."
                                    : "Confirm"}
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
