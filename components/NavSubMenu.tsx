"use client"

import React, { useState, useEffect } from "react"
import LogoutButton from "./LogoutButton"
import { getCode } from "@/lib/Functions"

interface NavSubMenuProps {
  data: any
}

const NavSubMenu: React.FC<NavSubMenuProps> = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [existing_accounts, setExistingAccounts] = useState<any[]>([])

  useEffect(() => {
    const storedAccounts = sessionStorage.getItem("accounts")
    if (storedAccounts) {
      setExistingAccounts(JSON.parse(storedAccounts))
    } else {
      setExistingAccounts(data.account_list)
    }
  }, [data.account_list])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='navMenu'>
      <label htmlFor='navTitleText' onClick={toggleMenu}>
        <div className='navTitleText'>
          {getCode(data.loginid)} ({data.currency})
        </div>
      </label>

      <ul
        id='navContainer'
        className={`navDropMenu ${isMenuOpen ? "show" : ""}`}
      >
        <div className='navMenuTitle'>My Accounts</div>
        {existing_accounts.map((account: any) => (
          <li key={account.token || getCode(account.loginid)}>
            {account.token ? (
              <a href={`bot?token=${account.token}`}>
                {`${getCode(account.code)} ${account.currency}`}
              </a>
            ) : (
              <span>{`${getCode(account.loginid)} ${account.currency}`}</span>
            )}
          </li>
        ))}
        <LogoutButton></LogoutButton>
      </ul>
    </nav>
  )
}

export default NavSubMenu
