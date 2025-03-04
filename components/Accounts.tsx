"use client";

import { getCode } from "@/lib/Functions";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

export default function Accounts({ onClose, activeAccount }: any) {
    const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
    const [storedAccounts, setStoredAccounts] = useState<any[]>([]);
    const popupRef = useRef<HTMLDivElement>(null);
    const activeAccountRef = useRef(activeAccount);
    const router = useRouter();

    useEffect(() => {
        const storedAccounts = sessionStorage.getItem("accounts");

        if (activeAccount) {
            setSelectedAccount(activeAccount);
        }

        if (storedAccounts) {
            const parsedAccounts = JSON.parse(storedAccounts);
            setStoredAccounts(parsedAccounts);
            setSelectedAccount(activeAccountRef.current?.code || (parsedAccounts.length > 0 ? parsedAccounts[0].code : null));
        } else {
            setSelectedAccount(null);
        }
    }, []);

    const handleAccountClick = (account: any) => {
        toast.success(`Account ${account.code} selected`, {
            duration: 5000,
            classNames: {
                toast: 'toast-success',
            }
        });
        setSelectedAccount(account.code);
        router.push(`/bot?token=${account.token}`);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div ref={popupRef} className="flex flex-col bg-[#222] rounded-lg shadow-lg w-96">
                <div className="flex flex-row justify-between items-center bg-gray-300/50 p-2 rounded-t-lg">
                    <div className="text-gray-200 text-sm font-semibold">MY DERIV ACCOUNTS</div>
                    <div className="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full bg-gray-200/20 hover:bg-gray-500/20">
                        <X onClick={onClose} size={20} />
                    </div>

                </div>
                <div className="flex flex-wrap justify-center gap-2 p-4 overflow-y-auto no-scrollbar">
                    {storedAccounts.length === 0 ? (
                        <div className="text-gray-400">No accounts available</div>
                    ) : (
                        storedAccounts.map((account) => (
                            <div
                                key={getCode(account.code)}
                                className={`accounts-box flex items-center justify-center text-sm ${selectedAccount === getCode(account.code) ? "selected" : ""}`}
                                onClick={() => handleAccountClick(account)}
                            >
                                {getCode(account.code)} {account.currency}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
