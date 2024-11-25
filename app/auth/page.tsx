"use client"

import { AccountsT, useDerivAccount } from "@/hooks/useDerivAccount"
import Link from "next/link"
import React, { Suspense, useEffect, useState } from "react"

const Page = () => {
  return (
    <>
      <Suspense>
        <DerivAccounts></DerivAccounts>
      </Suspense>
    </>
  )
}

function getAccountType(code: any) {
  let type

  let str = code
  let trimmedStr = str.substring(0, 2)
  if (trimmedStr === "CR") {
    return (type = "Real")
  }
  if (trimmedStr === "VR") {
    return (type = "Demo")
  }
  return (type = "Unknown")
}

function getAccountTypeClass(code: any) {
  let cssClass

  let str = code
  let trimmedStr = str.substring(0, 2)
  if (trimmedStr === "CR") {
    return (cssClass = "successInfo")
  }
  if (trimmedStr === "VR") {
    return (cssClass = "warningInfo")
  }
}

const DerivAccounts = () => {
  const DerivAccounts = useDerivAccount()
  const [accounts, setAccounts] = useState<AccountsT[]>(DerivAccounts)

  useEffect(() => {
    sessionStorage.setItem("accounts", JSON.stringify(accounts))
  }, [accounts])

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
        {accounts.map((account: any) => {
          const url = `bot?token=${account.token}`
          return (
            <Link key={account.code} href={url}>
              <div className='accountCard'>
                <div
                  className={`accountCardType ${getAccountTypeClass(
                    account.code
                  )}`}
                >
                  {getAccountType(account.code)}
                </div>
                <div className='accountCardInfo'>
                  {account.code} {account.currency}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Page
