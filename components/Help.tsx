"use client";

import { useState } from "react";
import { Phone, HelpCircle, X, MessageCircle, MessageSquare } from "lucide-react";

interface HelpButtonProps {
    phoneNumber: string;
}

export default function HelpButton({ phoneNumber }: HelpButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Help Options */}
            <div
                className={`bg-gray-500 text-white shadow-lg p-3 rounded-xl space-y-2 w-52 transition-all duration-200 ease-in-out transform ${
                    isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-2 pointer-events-none"
                }`}
            >
                <h2 className="text-lg text-center underline">Need Help ?</h2>
                {/* WhatsApp */}
                <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-500 transition cursor-pointer"
                >
                    <MessageCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">Chat on WhatsApp</span>
                </a>

                {/* Message (SMS) */}
                <a
                    href={`sms:${phoneNumber}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-500 transition cursor-pointer"
                >
                    <MessageSquare className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium">Send a Message</span>
                </a>

                {/* Call */}
                <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-500 transition cursor-pointer"
                >
                    <Phone className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-medium">Call Now</span>
                </a>
            </div>

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-14 h-14 bg-gray-400 text-white rounded-full shadow-lg transition-all hover:bg-gray-500"
            >
                {isOpen ? <X className="w-6 h-6" /> : <HelpCircle className="w-6 h-6" />}
            </button>
        </div>
    );
}
