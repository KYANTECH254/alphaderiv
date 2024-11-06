"use client"

import { useSearchParams } from "next/navigation"

export const useGetQueryParams = () => {
  const searchParams = useSearchParams()
  const allParams: any = {}
  searchParams.forEach((value, key) => {
    allParams[key] = value
  })
  return allParams
}
