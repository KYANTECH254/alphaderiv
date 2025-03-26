"use client"
import { useSubscription } from "@/contexts/SubscriptionProvider"
import { ArrowLeftRightIcon } from "lucide-react"
import React, { use, useEffect, useState } from "react"
import Accounts from "./Accounts"
import { toast } from "sonner"
import { getAccountTypeClass, getAccountType, getCode } from "@/lib/Functions"
interface SettingsProps {
  data: any
  setMartingaleState: (newValue: boolean) => void
  setProfitLossMartingaleState: (newValue: boolean) => void
  martingale: boolean
  profitlossmartingale: boolean
  setStrategy: any
  setSymbol: any
  setResetDemoBal: (newValue: boolean) => void
}
const Settings: React.FC<SettingsProps> = ({
  data,
  setMartingaleState,
  setProfitLossMartingaleState,
  martingale,
  profitlossmartingale,
  setStrategy,
  setSymbol,
  setResetDemoBal,
}) => {
  const { isLoggedIn, subscriptionPackage, logout } = useSubscription();
  const [selectedBtn, setSelectedBtn] = useState<string>("first")
  const [accountsModal, setAccountsModalOpen] = useState<boolean>(false)
  useEffect(() => {
    handleStrategy("first")
  }, [])

  const handleOncheckedMartingale = () => {
    if (profitlossmartingale) {
      setProfitLossMartingaleState(false)
    }
    if (!martingale) {
      setMartingaleState(true)
      toast.success("Martingale enabled", {
        duration: 5000,
        classNames: {
          toast: 'toast-success',
        }
      });
    } else {
      setMartingaleState(false)
      toast.info("Martingale disabled", {
        duration: 5000,
        classNames: {
          toast: 'toast-info',
        }
      });
    }
  }
  const handleOncheckedProfitLossMartingale = () => {
    if (martingale) {
      setMartingaleState(false)
    }
    if (!profitlossmartingale) {
      setProfitLossMartingaleState(true)
      toast.success("Bothways Martingale enabled", {
        duration: 5000,
        classNames: {
          toast: 'toast-success',
        }
      });
    } else {
      setProfitLossMartingaleState(false)
      toast.info("Bothways Martingale disabled", {
        duration: 5000,
        classNames: {
          toast: 'toast-info',
        }
      });
    }
  }
  const handleStrategy = (strategy: string) => {
    setStrategy(strategy)
    setSelectedBtn(strategy)
    let toastMessage = ""
    switch (strategy) {
      case "first":
        toastMessage = "Under 3 over 3 selected"
        break
      case "second":
        toastMessage = "Under 3 over 1 selected"
        break
      case "fourth":
        toastMessage = "Over 6 under 6 selected"
        break
      case "fifth":
        toastMessage = "Equal 6 under 6 selected"
        break
      default:
        toastMessage = ""
    }

    toast.success(toastMessage, {
      duration: 5000,
      classNames: {
        toast: 'toast-success',
      }
    });
  }
  const handleBalanceResetBtn = () => {
    toast.success("Demo balance reset", {
      duration: 5000,
      classNames: {
        toast: 'toast-success',
      }
    });
    setResetDemoBal(true)
  }
  const getTimeLeft = (expiry: Date | string) => {
    const expiryDate = new Date(expiry).getTime();
    const now = Date.now();
    const diff = expiryDate - now;

    if (diff <= 0) return "Expired";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (days > 0) {
      return `${days} day${days !== 1 ? "s" : ""} ${hours} hour${hours !== 1 ? "s" : ""}`;
    } else if (hours > 0) {
      return `${hours} hour${hours !== 1 ? "s" : ""} ${minutes} minute${minutes !== 1 ? "s" : ""}`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ${seconds} second${seconds !== 1 ? "s" : ""}`;
    } else {
      return `${seconds} second${seconds !== 1 ? "s" : ""}`;
    }
  };

  return (
    <div className='settingsContainer'>
      <div className='settingHeader'>Settings</div>
      <div className='accountInfo'>
        <div className={`flex flex-row items-center accountTypeInfo ${getAccountTypeClass(data.loginid)}`}>
          {getAccountType(data.loginid)}
          <div
            onClick={() => {
              setAccountsModalOpen(true)
            }}
            className="sm:hidden hover:animate-spin text-white bg-gray-300/40 w-7 h-7 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-400 border border-white"><ArrowLeftRightIcon size={16} /></div>
          {getAccountType(data.loginid) === "Demo" ? (
            <div
              typeof='button'
              className='resetBalBtn'
              onClick={handleBalanceResetBtn}
            >
              Reset Balance
            </div>
          ) : null}
        </div>

        <div className='accountIdInfo warningInfo'>
          {getCode(data.loginid)} ({data.currency})
        </div>
      </div>
      <div className='settingsContainerTitle2 mt-1'>Subscription</div>
      {isLoggedIn && (
        <div className='accountInfo'>
          <div
            className={`accountTypeInfo successInfo`}
          >
            {subscriptionPackage?.package || "No active subscription"}
            <div
              typeof='button'
              className='logoutBtn'
              onClick={logout}
            >
              Logout
            </div>
          </div>
          <div className="text-sm font-bold warningInfo">
            {subscriptionPackage?.pkgExpiry ? getTimeLeft(subscriptionPackage.pkgExpiry) : "-"} left
          </div>

        </div>
      )}
      <div className='settingsContainerTitle'>Positions Recovery</div>
      <div className='settingsList1 displayRow'>
        <h3 className='settingsListSubTitle'>Martingale</h3>
        <section className='slider-checkbox'>
          <input type='checkbox' id='c2' checked={martingale} onChange={handleOncheckedMartingale} />
          <label htmlFor='Martingale'></label>
        </section>
      </div>
      <div className='settingsList1 displayRow'>
        <h3 className='settingsListSubTitle'>Bothways Martingale</h3>
        <section className='slider-checkbox'>
          <input type='checkbox' id='c3' checked={profitlossmartingale} onChange={handleOncheckedProfitLossMartingale} />
          <label htmlFor='ProfitLossMartingale'></label>
        </section>
      </div>
      <div className='settingsContainerTitle2 mt-2'>Strategies</div>
      <div className='settingsList2'>
        <div
          className={`strategyCard ${selectedBtn === "first" ? "successBackground" : "normalBackground"
            }`}
          onClick={() => handleStrategy("first")}
        >
          U3O3
        </div>
        <div
          className={`strategyCard ${selectedBtn === "second" ? "successBackground" : "normalBackground"
            }`}
          onClick={() => handleStrategy("second")}
        >
          U3O1
        </div>

        {/* <div
          className={`strategyCard ${
            selectedBtn === "fourth" ? "successBackground" : "normalBackground"
          }`}
          onClick={() => handleStrategy("fourth")}
        >
          O6U6
        </div>
        <div
          className={`strategyCard ${
            selectedBtn === "fifth" ? "successBackground" : "normalBackground"
          }`}
          onClick={() => handleStrategy("fifth")}
        >
          E6U6
        </div> */}
      </div>
      <div className='settingsContainerTitle2 mt-1'>Bet Status</div>
      <div className="flex flex-wrap">
        <div className="tradeHistoryInfo wonTradeInfo p-2 items-center">Won</div>
        <div className="tradeHistoryInfo cancelTradeInfo p-2 items-center">Canceled</div>
        <div className="tradeHistoryInfo lostTradeInfo p-2 items-center">Lost</div>
        <div className="tradeHistoryInfo runningTradeInfo p-2 items-center">Open</div>
      </div>

      {accountsModal && (
        <Accounts
          onClose={() => { setAccountsModalOpen(false) }}
          activeAccount={data.loginid}
        />
      )}

    </div>
  )
}
export default Settings
