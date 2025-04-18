"use client"

import CommingSoon from "@/components/CommingSoon";
import Sidebar from "@/components/SideBar";
import { useGetQueryParams } from "@/hooks/useGetQueryParams";

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
        <Sidebar token={token}>
            <CommingSoon />
        </Sidebar>
    );
}
