"use client"

import CommingSoon from "@/components/CommingSoon";
import Sidebar from "@/components/SideBar";
import { useGetQueryParams } from "@/hooks/useGetQueryParams";

export default function page() {
    const { token } = useGetQueryParams();

    return (
        <Sidebar token={token}>
            <CommingSoon />
        </Sidebar>
    );
}
