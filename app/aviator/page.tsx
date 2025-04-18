"use client"

import CommingSoon from "@/components/CommingSoon";
import Sidebar from "@/components/SideBar";
import { useGetQueryParams } from "@/hooks/useGetQueryParams";
import { useEffect, useState } from "react";

export default function Page() {
    const [isClient, setIsClient] = useState(false);
    const { token } = useGetQueryParams();

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; 
    }

    return (
        <Sidebar token={token}>
            <CommingSoon />
        </Sidebar>
    );
}