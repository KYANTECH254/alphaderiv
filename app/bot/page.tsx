"use client"

import NavSubMenu from "@/components/NavSubMenu"
import Settings from "@/components/Settings"
import Sidebar from "@/components/SideBar"
import { useGetQueryParams } from "@/hooks/useGetQueryParams"
import { useLiveActionMessage } from "@/hooks/useLiveActionMessage"
import { useMessages } from "@/hooks/useMessages"
import { useWebsokets } from "@/hooks/useWebsokets"
import { ChangeEvent, Suspense, useEffect } from "react"
import { toast } from "sonner"

export default function Page() {
    return (
        <Suspense>
            <SideBarWithToken />
        </Suspense>
    );
}

function SideBarWithToken() {
    const { token } = useGetQueryParams();

    return (
        <Sidebar token={token}>
            <GetToken token={token} />
        </Sidebar>
    );
}

const GetToken = ({ token }: { token: string }) => {
    const { connected, setConnected, messages, socket } = useWebsokets({
        token
    })
    const {
        liveAction,
        liveActionClassName,
        showLiveActionLoader,
        setLiveAction,
        setLiveActionClassName,
        setShowLiveActionLoader,
    } = useLiveActionMessage()
    const {
        account,
        stopped,
        setStopped,
        stake,
        setStakeValue,
        trades,
        takeProfit,
        stopLoss,
        setStopLoss,
        setTakeProfit,
        invalidInputValue,
        setInvalidINputValue,
        totalProfit,
        profitClass,
        martingale,
        setMartingale,
        setProfitLossMartingale,
        profitlossmartingale,
        stakes,
        setStakes,
        setStrategy,
        setSymbol,
        setResetDemoBal,
    } = useMessages({
        messages,
        socket,
        setConnected,
        setLiveAction,
        setLiveActionClassName,
        setShowLiveActionLoader
    })

    useEffect(() => {
        const storedStake = localStorage.getItem("stake")
        const storedTP = localStorage.getItem("takeProfit")
        const storedSL = localStorage.getItem("stopLoss")

        if (storedStake) {
            setStakeValue(parseFloat(storedStake))
        }
        if (storedTP) {
            setTakeProfit(parseFloat(storedTP))
        }
        if (storedSL) {
            setStopLoss(parseFloat(storedSL))
        }
    }, [])

    const handleStakeInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        let stakeValue = parseFloat(event.target.value.trim())
        if (!stakeValue) {
            setLiveAction("Stake is empty!")
            setLiveActionClassName("dangerInfo")
            setInvalidINputValue(true)
            return setStakeValue(parseFloat("0.5"))
        }

        if (stakeValue < 0.34) {
            setLiveAction("Minimum stake is 0.35 USD")
            setLiveActionClassName("dangerInfo")
            setInvalidINputValue(true)
            return setStakeValue(parseFloat("0.35"))
        }

        if (stakeValue > 1000) {
            setLiveAction("Maximum stake is 1000 USD")
            setLiveActionClassName("dangerInfo")
            setInvalidINputValue(true)
            return setStakeValue(parseFloat("0.5"))
        }
        setInvalidINputValue(false)
        setStakeValue(stakeValue)
        localStorage.setItem("stake", stakeValue.toString())
        setStakes([])
    }

    const handleTakeProfitInputChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        let value = event.target.value.trim()
        if (!/^\d+(\.\d+)?$/.test(value)) {
            setLiveAction("Invalid number")
            setLiveActionClassName("dangerInfo")
            setInvalidINputValue(true)
            return setStopLoss(parseFloat("0"))
        }
        setTakeProfit(parseFloat(value))
        localStorage.setItem("takeProfit", value)
        setInvalidINputValue(false)
    }

    const handleStopLossInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.trim()
        if (!/^\d+(\.\d+)?$/.test(value)) {
            setLiveAction("Invalid number")
            setLiveActionClassName("dangerInfo")
            setInvalidINputValue(true)
            return setStopLoss(parseFloat("0"))
        }
        setStopLoss(parseFloat(value))
        localStorage.setItem("stopLoss", value)
        setInvalidINputValue(false)
    }

    const handleBot = () => {
        if (account?.balance < stake) {
            toast.error("Insufficient balance", {
                duration: 5000,
                classNames: {
                    toast: 'toast-error',
                }
            });
            setStopped(true)
            return
        }
        if (!stopped) {
            toast.info("Bot stopped", {
                duration: 5000,
                classNames: {
                    toast: 'toast-info',
                }
            });
            setStakes([])
        } else {
            toast.success("Bot started", {
                duration: 5000,
                classNames: {
                    toast: 'toast-success',
                }
            });
            setStakes([])
        }
        setStopped(prevData => !prevData)
    }

    if (!connected) {
        return (
            <>
                <div className='mainContainer font-sans'>
                    <div className='loaderText'>Loading...</div>
                </div>
            </>
        )
    }

    return (
        <div className='mainContainer font-sans'>
            <div className='topNavCard'>
                <li className='balInfo'>
                    {account?.balance} {account?.currency}
                </li>
                <NavSubMenu data={account}></NavSubMenu>
            </div>

            <div className='flexWrap mt-5'>
                <div className='tradeActivityContainer'>
                    <div className='liveActivity'>
                        <div className={`liveOutcome ${liveActionClassName}`}>
                            {liveAction}
                            {showLiveActionLoader ? (
                                <div className='dot-windmill'></div>
                            ) : null}
                        </div>
                    </div>
                    <div className='tradeHistory'>
                        <div className='tradeHistoryTitle'>All Trades</div>
                        <div className='tradeHistoryHeading'>
                            <div className='tradeHistoryHeading1'>Bet USD</div>
                            <div className='tradeHistoryHeading2'>Payout</div>
                        </div>
                        {trades.length === 0 ? (
                            <div className='tradeHistoryInfo3 pendingTradeInfo'>
                                No trades
                            </div>
                        ) : (
                            trades.map((trade: any) => (
                                <div
                                    key={trade.contract_id}
                                    className={`tradeHistoryInfo ${trade.status === "won" && "wonTradeInfo"} ${trade.status === "lost" && "lostTradeInfo"} ${trade.status === "open" && "runningTradeInfo"
                                        }
                                        }`}
                                >
                                    <div className='tradeHistoryInfo1'>
                                        {trade.buy_price.toFixed(2)}
                                    </div>
                                    <div className='tradeHistoryInfo2'>
                                        {trade.profit.toFixed(2)}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className='displayColumn'>
                    <div className='totalProfitContainer displayColumn'>
                        <div className='totalProfitLabel'>Total Profit</div>
                        <div className={`totalProfitText ${profitClass}`}>
                            {totalProfit}
                        </div>
                    </div>

                    <div className='stakeForm'>
                        <label className='stakeLabel' htmlFor='stake'>
                            Stake
                        </label>
                        <input
                            readOnly={!stopped}
                            value={stake}
                            onChange={handleStakeInputChange}
                            className='stakeInput'
                            type='text'
                            name='stake'
                            id='stake'
                        />
                        <div className='displayRow'>
                            <div className='displayColumn'>
                                <label className='takeProfitLabel' htmlFor='takeProfit'>
                                    Take Profit
                                </label>
                                <input
                                    readOnly={!stopped}
                                    value={takeProfit}
                                    onChange={handleTakeProfitInputChange}
                                    className='takeProfitInput'
                                    type='text'
                                    name='takeProfit'
                                    id='takeProfit'
                                />
                            </div>
                            <div className='displayColumn'>
                                <label className='stopLossLabel' htmlFor='stopLoss'>
                                    Stop Loss
                                </label>
                                <input
                                    readOnly={!stopped}
                                    value={stopLoss}
                                    onChange={handleStopLossInputChange}
                                    className='stopLossInput'
                                    type='text'
                                    name='stopLoss'
                                    id='stopLoss'
                                />
                            </div>
                        </div>
                        <button
                            disabled={invalidInputValue}
                            type='button'
                            className={stopped ? "successButton" : "warningButton"}
                            onClick={handleBot}
                        >
                            {stopped ? "Start" : "Stop"}
                        </button>
                    </div>
                </div>

                <Settings
                    data={account}
                    setProfitLossMartingaleState={setProfitLossMartingale}
                    profitlossmartingale={profitlossmartingale}
                    setMartingaleState={setMartingale}
                    martingale={martingale}
                    setStrategy={setStrategy}
                    setSymbol={setSymbol}
                    setResetDemoBal={setResetDemoBal}
                ></Settings>
            </div>
        </div >
    )
}