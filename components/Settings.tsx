"use client"
// import { useSubscription } from "@/contexts/SubscriptionProvider"
import { ArrowLeftRightIcon, Currency } from "lucide-react"
import React, { use, useEffect, useState } from "react"
import Accounts from "./Accounts"
import { toast } from "sonner"
import { getAccountTypeClass, getAccountType, getCode } from "@/lib/Functions"
interface SettingsProps {
  data: any
  setMartingaleState: (newValue: boolean) => void
  setProfitLossMartingaleState: (newValue: boolean) => void
  set1326: (newValue: boolean) => void
  strategy1326: boolean
  martingale: boolean
  profitlossmartingale: boolean
  setStrategy: any
  setSymbol: any
  symbol: string
  setResetDemoBal: (newValue: boolean) => void
}
const Settings: React.FC<SettingsProps> = ({
  data,
  setMartingaleState,
  setProfitLossMartingaleState,
  set1326,
  strategy1326,
  martingale,
  profitlossmartingale,
  setStrategy,
  symbol,
  setSymbol,
  setResetDemoBal,
}) => {
  // const { isLoggedIn, subscriptionPackage, logout } = useSubscription();
  const [selectedBtn, setSelectedBtn] = useState<string>("")
  const [accountsModal, setAccountsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const savedStrategy = localStorage.getItem("strategy") || "first";
    const savedSymbol = localStorage.getItem("symbol") || "R_50";
    const savedMartingale = localStorage.getItem("martingale") === "true";
    const savedProfitLossMartingale = localStorage.getItem("profitlossmartingale") === "true";

    setStrategy(savedStrategy);
    setSelectedBtn(savedStrategy);
    setMartingaleState(savedMartingale);
    setProfitLossMartingaleState(savedProfitLossMartingale);
    setSymbol(savedSymbol);
    set1326(localStorage.getItem("strategy1326") === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("strategy", selectedBtn);
  }, [selectedBtn]);

  useEffect(() => {
    localStorage.setItem("martingale", String(martingale));
  }, [martingale]);

  useEffect(() => {
    localStorage.setItem("profitlossmartingale", String(profitlossmartingale));
  }, [profitlossmartingale]);

  useEffect(() => {
    localStorage.setItem("strategy1326", String(strategy1326));
  }, [strategy1326]);

  useEffect(() => {
    localStorage.setItem("symbol", String(symbol));
  }, [symbol]);

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
  const handleOnchecked1326 = () => {
    if (martingale) {
      setMartingaleState(false)
    }
    if (profitlossmartingale) {
      setProfitLossMartingaleState(false)
    }
    if (!strategy1326) {
      set1326(true)
      toast.success("1326 Strategy enabled", {
        duration: 5000,
        classNames: {
          toast: 'toast-success',
        }
      });
    } else {
      set1326(false)
      toast.info("1326 Strategy disabled", {
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
      case "sixth":
        toastMessage = "Under 3 over 5 selected"
        break
      case "third":
        toastMessage = "Under 3 over 5^ selected"
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
  const handleSymbol = (symbol: string) => {
    setSymbol(symbol)
    let toastMessage = ""

    switch (symbol) {
      // Volatility Indices
      case "R_10":
        toastMessage = "Volatility 10 Index selected"
        break
      case "R_25":
        toastMessage = "Volatility 25 Index selected"
        break
      case "R_50":
        toastMessage = "Volatility 50 Index selected"
        break
      case "R_75":
        toastMessage = "Volatility 75 Index selected"
        break
      case "R_100":
        toastMessage = "Volatility 100 Index selected"
        break
      case "R_150":
        toastMessage = "Volatility 150 Index selected"
        break
      case "R_250":
        toastMessage = "Volatility 250 Index selected"
        break

      // 1s versions
      case "1HZ10V":
        toastMessage = "Volatility 10 (1s) Index selected"
        break
      case "1HZ25V":
        toastMessage = "Volatility 25 (1s) Index selected"
        break
      case "1HZ50V":
        toastMessage = "Volatility 50 (1s) Index selected"
        break
      case "1HZ75V":
        toastMessage = "Volatility 75 (1s) Index selected"
        break
      case "1HZ100V":
        toastMessage = "Volatility 100 (1s) Index selected"
        break
      default:
        toastMessage = "Unknown symbol selected"
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
      {/* <div className='settingsContainerTitle2 mt-1'>Subscription</div>
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
      )} */}
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
      <div className='settingsList1 displayRow'>
        <h3 className='settingsListSubTitle'>1326 Strategy</h3>
        <section className='slider-checkbox'>
          <input type='checkbox' id='c4' checked={strategy1326} onChange={handleOnchecked1326} />
          <label htmlFor='1326'></label>
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

        <div
          className={`strategyCard ${selectedBtn === "sixth" ? "successBackground" : "normalBackground"
            }`}
          onClick={() => handleStrategy("sixth")}
        >
          U3O5
        </div>
        <div
          className={`strategyCard ${selectedBtn === "third" ? "successBackground" : "normalBackground"
            }`}
          onClick={() => handleStrategy("third")}
        >
          U3O5^
        </div>
      </div>
      <div className='settingsContainerTitle2 mt-2'>Symbol</div>
      <div className='settingsList2'>
        <div
          className={`strategyCard ${symbol === "R_10" ? "successBackground" : "normalBackground"}`}
          onClick={() => handleSymbol("R_10")}
        >
          R_10
        </div>
        <div
          className={`strategyCard ${symbol === "R_25" ? "successBackground" : "normalBackground"}`}
          onClick={() => handleSymbol("R_25")}
        >
          R_25
        </div>
        <div
          className={`strategyCard ${symbol === "R_50" ? "successBackground" : "normalBackground"}`}
          onClick={() => handleSymbol("R_50")}
        >
          R_50
        </div>
        <div
          className={`strategyCard ${symbol === "R_75" ? "successBackground" : "normalBackground"}`}
          onClick={() => handleSymbol("R_75")}
        >
          R_75
        </div>
        <div
          className={`strategyCard ${symbol === "R_100" ? "successBackground" : "normalBackground"}`}
          onClick={() => handleSymbol("R_100")}
        >
          R_100
        </div>
        <div
          className={`strategyCard ${symbol === "R_150" ? "successBackground" : "normalBackground"}`}
          onClick={() => handleSymbol("R_150")}
        >
          R_150
        </div>
        <div
          className={`strategyCard ${symbol === "R_250" ? "successBackground" : "normalBackground"}`}
          onClick={() => handleSymbol("R_250")}
        >
          R_250
        </div>
        <div
          className={`strategyCard ${symbol === "1HZ10V" ? "successBackground" : "normalBackground"}`}
          onClick={() => handleSymbol("1HZ10V")}
        >
          1HZ10V
        </div>
        <div
          className={`strategyCard ${symbol === "1HZ25V" ? "successBackground" : "normalBackground"}`}
          onClick={() => handleSymbol("1HZ25V")}
        >
          1HZ25V
        </div>
        <div
          className={`strategyCard ${symbol === "1HZ50V" ? "successBackground" : "normalBackground"}`}
          onClick={() => handleSymbol("1HZ50V")}
        >
          1HZ50V
        </div>
        <div
          className={`strategyCard ${symbol === "1HZ75V" ? "successBackground" : "normalBackground"}`}
          onClick={() => handleSymbol("1HZ75V")}
        >
          1HZ75V
        </div>
        <div
          className={`strategyCard ${symbol === "1HZ100V" ? "successBackground" : "normalBackground"}`}
          onClick={() => handleSymbol("1HZ100V")}
        >
          1HZ100V
        </div>
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
