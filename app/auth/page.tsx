"use client"

import { AccountsT, useDerivAccount } from "@/hooks/useDerivAccount"
import Link from "next/link"
import React, { Suspense, useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { getAccountType, getAccountTypeClass, getCode } from "@/lib/Functions"

const Page = () => {
  return (
    <>
      <Suspense>
        <DerivAccounts></DerivAccounts>
      </Suspense>
    </>
  )
}

const DerivAccounts = () => {
  const DerivAccounts = useDerivAccount()
  const [accounts, setAccounts] = useState<AccountsT[]>(DerivAccounts)
  const pathname = usePathname()
  const searchParams = useSearchParams();

  useEffect(() => {
    sessionStorage.setItem("accounts", JSON.stringify(accounts))
  }, [accounts])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fullUrl = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
      localStorage.setItem("accountUrl", fullUrl);
    }
  }, [pathname, searchParams]);


  if (accounts.length === 0) {
    return (
      <div className='mainContainer font-sans'>
        <div className='loaderText'>Loading...</div>
      </div>
    )
  }

  return (
    <div className='mainContainer font-sans'>
      <div className='topNavCard'>
        <li>Choose Account</li>
      </div>
      <div className='accountCardContainer'>

        {accounts
          .sort((a: any, b: any) => {
            const aIsDemo = getAccountType(a.code) === "Demo";
            const bIsDemo = getAccountType(b.code) === "Demo";
            return aIsDemo === bIsDemo ? 0 : aIsDemo ? 1 : -1;
          })
          .map((account: any) => {
            const url = `bot?token=${account.token}`;
            return (
              <Link key={getCode(account.code)} href={url}>
                <div className="accountCard">
                  <div className={`accountCardType ${getAccountTypeClass(account.code)}`}>
                    {getAccountType(account.code)}
                  </div>
                  <div className="accountCardInfo">
                    {getCode(account.code)} {account.currency}
                  </div>
                </div>
              </Link>
            );
          })}

      </div>
    </div>
  )
}

export default Page
