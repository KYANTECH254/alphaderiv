"use client"

import CommingSoon from "@/components/CommingSoon";
import Sidebar from "@/components/SideBar";
import { useGetQueryParams } from "@/hooks/useGetQueryParams";
import { Suspense } from "react";

export default function Page() {
    return (
        <>
            <SidebarWithToken />
        </>
    );
}

function SidebarWithToken() {
    const { token } = useGetQueryParams()
    return (
        <Suspense>
            <Sidebar token={token}>

                <CommingSoon />
            </Sidebar>
        </Suspense>
    );
}
