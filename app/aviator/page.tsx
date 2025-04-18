"use client"

import CommingSoon from "@/components/CommingSoon";
import Sidebar from "@/components/SideBar";
import { useGetQueryParams } from "@/hooks/useGetQueryParams";
import { Suspense } from "react";

export default function Page () {
  return (
    <>
      <Suspense>
        <Aviator></Aviator>
      </Suspense>
    </>
  )
}

function Aviator() {
    const { token } = useGetQueryParams();
    return (
        <Sidebar token={token}>
            <CommingSoon />
        </Sidebar>
    );
}
