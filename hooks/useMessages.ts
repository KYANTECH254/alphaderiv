"use client"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import {
  fifthStrategy,
  firstStrategy,
  fourthStrategy,
  secondStrategy,
} from "./useStrategy"
import { toast } from "sonner"

interface Trade {
  buy_price: number
  status: string
  profit: number
  contract_id: string
}

export const useMessages = ({
  messages,
  socket,
  setConnected,
  setLiveAction,
  setLiveActionClassName,
  setShowLiveActionLoader,
}: {
  messages: any
  socket: WebSocket
  setConnected: Dispatch<SetStateAction<boolean>>
  setLiveAction: Dispatch<SetStateAction<any>>
  setLiveActionClassName: Dispatch<SetStateAction<any>>
  setShowLiveActionLoader: Dispatch<SetStateAction<any>>
}) => {
  // Local states for bot, stakes, trades, etc.
  const [account, setAccount] = useState<any>()
  const [asset, setAsset] = useState<number[]>([])
  const [stopped, setStopped] = useState(true)
  const [runningTrades, setRunningTrades] = useState(0)
  const [firstStake, setFirstStake] = useState<number>(0.5)
  const [stake, setStakeValue] = useState(firstStake)
  const [stakes, setStakes] = useState<number[]>([])
  const [defaultStake, setDefaultStake] = useState(firstStake)
  const [trades, setTrades] = useState<Trade[]>([])
  const [faketrades, setFakeTrades] = useState<Trade[]>([])
  const [takeProfit, setTakeProfit] = useState<number>(0)
  const [stopLoss, setStopLoss] = useState<number>(0)
  const [totalProfit, setTotalProfit] = useState<number>(0)
  const [totalstopsProfit, setTotalStopsProfit] = useState<number>(0)
  const [invalidInputValue, setInvalidINputValue] = useState(false)
  const [profitClass, setProfitClass] = useState<any>()
  const [martingale, setMartingale] = useState<boolean>(false)
  const [martingaleOdd, setMartingaleOdd] = useState<number>(2)
  const [profitlossmartingale, setProfitLossMartingale] = useState<boolean>(true)
  const [strategy, setStrategy] = useState<any>("first")
  const [strategyarray, setStrategyArray] = useState<number>(2)
  const [symbol, setSymbol] = useState<any>("1HZ100V")
  const [resetDemoBal, setResetDemoBal] = useState<boolean>()
  const [consecutiveWins, setconsecutiveWins] = useState<number>(0)
  const [maxConsecutiveWins] = useState<number>(3)
  const assetRef = useRef<any>()

  // Wrap the passed-in socket in a ref so we can replace it on reconnect.
  const socketRef = useRef<WebSocket>(socket)
  useEffect(() => {
    socketRef.current = socket
  }, [socket])

  // Modified sendMsg using our socketRef.
  function sendMsg(msg: any) {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(msg))
    }
  }

  useEffect(() => {
    function trimToTwoDecimals(number: any) {
      const roundedNum = parseFloat(number.toFixed(2))
      return roundedNum
    }
    function calculateProfit(stopLoss = 0, takeProfit = 0) {
      if (stopped) return
      if (stopLoss === 0 && takeProfit === 0) {
        return
      }
      setTotalStopsProfit(
        faketrades.reduce((acc, trade) => acc + trade.profit, 0)
      )
      if (stopLoss !== 0 && totalstopsProfit <= -stopLoss) {
        setStopped(true)
        setTotalStopsProfit(0)
        setStakeValue(firstStake)
        setFakeTrades([])
        toast.error(`Stop Loss ${trimToTwoDecimals(totalstopsProfit)} USD`, {
          duration: 5000,
          classNames: {
            toast: 'toast-error',
          }
        });
        return
      }
      if (takeProfit !== 0 && totalstopsProfit >= takeProfit) {
        setStopped(true)
        setTotalStopsProfit(0)
        setStakeValue(firstStake)
        setFakeTrades([])
        toast.success(`Take Profit +${trimToTwoDecimals(totalstopsProfit)} USD`, {
          duration: 5000,
          classNames: {
            toast: 'toast-success',
          }
        });
        return
      }
    }
    function calculateTotalProfit() {
      const calctotalProfit = trades.reduce(
        (acc, trade) => acc + trade.profit,
        0
      )
      const roundedVal = parseFloat(calctotalProfit.toFixed(2))
      if (roundedVal < 0) {
        setProfitClass("dangerInfo")
      } else if (Number.isInteger(roundedVal)) {
        setProfitClass("successInfo")
        setTotalProfit(parseInt(`+${roundedVal}`))
      } else {
        setProfitClass("successInfo")
        setTotalProfit(parseFloat(`+${roundedVal}`))
      }
      setTotalProfit(roundedVal)
    }
    function analysis() {
      if (strategy === "first") {
        setStrategyArray(2)
        setSymbol("1HZ100V")
      } else if (strategy === "second") {
        setStrategyArray(2)
        setSymbol("1HZ100V")
      } else if (strategy === "fourth") {
        setStrategyArray(2)
        setSymbol("1HZ100V")
      } else if (strategy === "fifth") {
        setStrategyArray(1)
        setSymbol("1HZ100V")
      }
      if (stopped) {
        setLiveAction("Start bot")
        setShowLiveActionLoader(false)
        setLiveActionClassName("warningInfo")
        return
      }
      if (runningTrades > 0 && runningTrades == 1) return
      setLiveAction("Waiting for trading signal")
      setShowLiveActionLoader(true)
      setLiveActionClassName("dangerInfo")
      if (strategy === "first") {
        firstStrategy(
          stopped,
          runningTrades,
          asset,
          setLiveAction,
          setShowLiveActionLoader,
          setLiveActionClassName,
          setRunningTrades,
          setStakes,
          stake,
          sendMsg,
          setDefaultStake
        )
      } else if (strategy === "second") {
        secondStrategy(
          stopped,
          runningTrades,
          asset,
          setLiveAction,
          setShowLiveActionLoader,
          setLiveActionClassName,
          setRunningTrades,
          setStakes,
          stake,
          sendMsg,
          setDefaultStake
        )
      } else if (strategy === "fourth") {
        fourthStrategy(
          stopped,
          runningTrades,
          asset,
          setLiveAction,
          setShowLiveActionLoader,
          setLiveActionClassName,
          setRunningTrades,
          setStakes,
          stake,
          sendMsg,
          setDefaultStake
        )
      } else if (strategy === "fifth") {
        fifthStrategy(
          stopped,
          runningTrades,
          asset,
          setLiveAction,
          setShowLiveActionLoader,
          setLiveActionClassName,
          setRunningTrades,
          setStakes,
          stake,
          sendMsg,
          setDefaultStake
        )
      }
    }
    function startMartingale(status: string) {
      if (!martingale) return
      if (strategy === "second") {
        setMartingaleOdd(4)
      }
      switch (status) {
        case "won":
          setStakeValue(defaultStake)
          break
        case "lost":
          const newStake = stake * martingaleOdd
          setStakeValue(newStake)
          break
        default:
          break
      }
    }
    function startProfitLossMartingale(status: string) {
      if (!profitlossmartingale) return
      switch (status) {
        case "won":
          setconsecutiveWins(prevWins => {
            const updatedWins = prevWins + 1
            if (updatedWins <= maxConsecutiveWins) {
              setStakeValue(stake * 2)
            }
            if (updatedWins === maxConsecutiveWins) {
              setStakeValue(defaultStake)
              return 0
            }
            return updatedWins
          })
          break
        case "lost":
          setStakeValue(defaultStake)
          setconsecutiveWins(0)
          break
        default:
          break
      }
    }
    function resetDemoBalance() {
      if (!resetDemoBal) return
      sendMsg({
        topup_virtual: 1,
      })
      setResetDemoBal(false)
    }
    function cancelTrade(contractId: any) {
      sendMsg({
        sell: contractId,
        price: 0,
      })
    }
    switch (messages?.msg_type) {
      case "authorize":
        const authData = messages?.authorize
        setAccount((prevData: any) => {
          const { balance, currency, loginid, is_virtual, account_list } =
            messages?.authorize
          prevData = { balance, currency, loginid, is_virtual, account_list }
          return prevData
        })
        // get ticks
        sendMsg({
          ticks: symbol,
          subscribe: 1,
        })
        sendMsg({
          balance: 1,
          subscribe: 1,
        })
        setConnected(true)
        break
      case "balance":
        setAccount((prevData: any) => {
          prevData.balance = messages?.balance?.balance
          return prevData
        })
        break
      case "history":
        break
        case "tick":
          if (!messages?.tick || typeof messages.tick.quote === 'undefined') {
            return;
          }
          let currentArrayToBeUsed = strategyarray;
          setAsset(prevAsset => {
            const updatedAsset = [...prevAsset];
            const rawTick = messages.tick.quote;
        
            console.log(rawTick);
        
            let formattedTick = Number(rawTick).toFixed(2); 
            let lastDigit = parseInt(formattedTick.slice(-1)); 
        
            if (isNaN(lastDigit)) {
              lastDigit = 0;
            }
            updatedAsset.push(lastDigit);
        
            while (updatedAsset.length > currentArrayToBeUsed) {
              updatedAsset.shift();
            }
            return updatedAsset;
          });
          break;        
      case "buy":
        break
      case "sell":
        const sell = messages
        break
      case "proposal_open_contract":
        const proposal = messages?.proposal_open_contract;
        if (!proposal) break;
        const { contract_id, buy_price, status, profit, is_sold } = proposal;
        setTrades(prevTrades => {
          const existingIndex = prevTrades.findIndex(trade => trade.contract_id === contract_id);
          if (existingIndex !== -1) {
            const updatedTrades = [...prevTrades];
            updatedTrades[existingIndex] = {
              ...updatedTrades[existingIndex],
              status,
              profit,
            };
            return updatedTrades;
          }
          if (!is_sold) {
            return [{ buy_price, status, profit: 0, contract_id }, ...prevTrades];
          }
          return prevTrades;
        });
        setFakeTrades(prevTrades => {
          const existingIndex = prevTrades.findIndex(trade => trade.contract_id === contract_id);
          if (existingIndex !== -1) {
            const updatedTrades = [...prevTrades];
            updatedTrades[existingIndex] = {
              ...updatedTrades[existingIndex],
              status,
              profit,
            };
            return updatedTrades;
          }
          if (!is_sold) {
            return [{ buy_price, status, profit: 0.00, contract_id }, ...prevTrades];
          }
          return prevTrades;
        });

        if (is_sold) {
          setRunningTrades(prev => Math.max(prev - 1, 0));
          setShowLiveActionLoader(false);
          if (status === "won") {
            startMartingale(status);
            startProfitLossMartingale(status);
            setLiveAction(`You have ${status} +${profit} USD`);
            setLiveActionClassName("successInfo");
          }
          if (status === "lost") {
            startMartingale(status);
            startProfitLossMartingale(status);
            setLiveAction(`You have ${status} ${profit} USD`);
            setLiveActionClassName("dangerInfo");
          }
        }
        break;
      case "ping":
        break
      default:
        break
    }
    analysis()
    calculateProfit(stopLoss, takeProfit)
    calculateTotalProfit()
    resetDemoBalance()
  }, [messages, strategy, strategyarray, totalstopsProfit, symbol])

  return {
    account,
    stopped,
    setStopped,
    stake,
    setStakeValue,
    trades,
    takeProfit,
    stopLoss,
    setTakeProfit,
    setStopLoss,
    invalidInputValue,
    setInvalidINputValue,
    totalProfit,
    setTotalProfit,
    profitClass,
    setProfitClass,
    martingale,
    profitlossmartingale,
    setMartingale,
    setProfitLossMartingale,
    defaultStake,
    firstStake,
    setFirstStake,
    setDefaultStake,
    setStakes,
    stakes,
    setStrategy,
    setSymbol,
    setResetDemoBal,
  }
}
