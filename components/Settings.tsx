"use client"
import React, { useEffect, useState } from "react"
interface SettingsProps {
  data: any
  setMartingaleState: (newValue: boolean) => void
  setProfitLossMartingaleState: (newValue: boolean) => void
  setToastMessage: (newValue: any) => void
  setToastType: (newValue: any) => void
  martingale: boolean
  profitlossmartingale:boolean
  setStrategy: any
  setSymbol: any
  setResetDemoBal: (newValue: boolean) => void
}
const Settings: React.FC<SettingsProps> = ({
  data,
  setMartingaleState,
  setProfitLossMartingaleState,
  setToastMessage,
  setToastType,
  martingale,
  profitlossmartingale,
  setStrategy,
  setSymbol,
  setResetDemoBal,
}) => {
  const [selectedBtn, setSelectedBtn] = useState<string>("first")
  useEffect(() => {
    handleStrategy("first")
  }, [])
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
  const handleOncheckedMartingale = () => {
    if (martingale) {
      setToastMessage("Bothways Martingale is enabled, disable it first!")
      setToastType("error")
      return;
    }
    if (!martingale) {
      setMartingaleState(true)
      setToastMessage("Martingale enabled")
      setToastType("success")
    } else {
      setMartingaleState(false)
      setToastMessage("Martingale disabled")
      setToastType("info")
    }
  }
  const handleOncheckedProfitLossMartingale = () => {
    if (martingale) {
      setToastMessage("Martingale is enabled, disable it first!")
      setToastType("error")
      return;
    }
    if (!profitlossmartingale) {
      setProfitLossMartingaleState(true)
      setToastMessage("Bothways Martingale enabled")
      setToastType("success")
    } else {
      setProfitLossMartingaleState(false)
      setToastMessage("Bothways Martingale disabled")
      setToastType("info")
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
    setToastMessage(toastMessage)
    setToastType("success")
  }
  const handleBalanceResetBtn = () => {
    setToastMessage("Demo balance reset")
    setToastType("success")
    setResetDemoBal(true)
  }
  return (
    <div className='settingsContainer'>
      <div className='settingHeader'>Settings</div>
      <div className='accountInfo'>
        <div className={`accountTypeInfo ${getAccountTypeClass(data.loginid)}`}>
          {getAccountType(data.loginid)}
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

        <div className='accountIdInfo dangerInfo'>
          {data.loginid} ({data.currency})
        </div>
      </div>
      <div className='settingsContainerTitle'>Positions Recovery</div>
      <div className='settingsList1 displayRow'>
        <h3 className='settingsListSubTitle'>Martingale</h3>
        <section className='slider-checkbox'>
          <input type='checkbox' id='c2' onChange={handleOncheckedMartingale} />
          <label htmlFor='Martingale'></label>
        </section>
      </div>
      <div className='settingsList1 displayRow'>
        <h3 className='settingsListSubTitle'>Bothways Martingale</h3>
        <section className='slider-checkbox'>
          <input type='checkbox' id='c3' onChange={handleOncheckedProfitLossMartingale} />
          <label htmlFor='ProfitLossMartingale'></label>
        </section>
      </div>
      <div className='settingsContainerTitle2 mt-2'>Strategies</div>
      <div className='settingsList2'>
        <div
          className={`strategyCard ${
            selectedBtn === "first" ? "successBackground" : "normalBackground"
          }`}
          onClick={() => handleStrategy("first")}
        >
          U3O3
        </div>
        <div
          className={`strategyCard ${
            selectedBtn === "second" ? "successBackground" : "normalBackground"
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
    </div>
  )
}
export default Settings
