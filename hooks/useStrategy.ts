"use client"
import { Dispatch, MutableRefObject, SetStateAction } from "react"
const countConsecutiveDigits = (asset: number[]) => {
  let consecutiveCount = 0;
  for (let i = asset.length - 1; i >= 0; i--) {
    if (asset[i] <= 3) {
      consecutiveCount++;
    } else {
      break;
    }
  }
  return consecutiveCount;
};

export function firstStrategy(
  stopped: boolean,
  runningTrades: number,
  asset: number[],
  setLiveAction: Dispatch<SetStateAction<any>>,
  setShowLiveActionLoader: Dispatch<SetStateAction<any>>,
  setLiveActionClassName: Dispatch<SetStateAction<any>>,
  setRunningTrades: Dispatch<SetStateAction<number>>,
  setStakes: Dispatch<SetStateAction<number[]>>,
  stake: number,
  sendMsg: (msg: any) => void,
  setDefaultStake: Dispatch<SetStateAction<number>>,
  symbol: string,
  arrayRef:MutableRefObject<number>
) {
  const consecutiveDigitsCount = countConsecutiveDigits(asset);
  if (consecutiveDigitsCount >= arrayRef.current) {
    setLiveAction("Trading signal acquired, placing trade")
    setShowLiveActionLoader(true)
    setLiveActionClassName("successInfo")
    sendMsg({
      buy: 1,
      subscribe: 1,
      price: stake,
      parameters: {
        amount: stake,
        basis: "stake",
        contract_type: "DIGITOVER",
        barrier: 3,
        currency: "USD",
        duration: 1,
        duration_unit: "t",
        symbol: symbol,
      },
    })
    setRunningTrades(prevData => prevData + 1)
    setStakes(prev => {
      const updatedStake = [...prev]
      updatedStake.unshift(stake)
      const firststake = updatedStake[updatedStake.length - 1]
      setDefaultStake(firststake)
      if (stopped) {
        setStakes([])
      }
      return updatedStake
    })
  }
}

export function secondStrategy(
  stopped: boolean,
  runningTrades: number,
  asset: number[],
  setLiveAction: Dispatch<SetStateAction<any>>,
  setShowLiveActionLoader: Dispatch<SetStateAction<any>>,
  setLiveActionClassName: Dispatch<SetStateAction<any>>,
  setRunningTrades: Dispatch<SetStateAction<number>>,
  setStakes: Dispatch<SetStateAction<number[]>>,
  stake: number,
  sendMsg: (msg: any) => void,
  setDefaultStake: Dispatch<SetStateAction<number>>,
  symbol: string
) {
  const consecutiveDigitsCount = countConsecutiveDigits(asset);
  if (consecutiveDigitsCount >= 2) {
    setLiveAction("Trading signal acquired, placing trade")
    setShowLiveActionLoader(true)
    setLiveActionClassName("successInfo")
    sendMsg({
      buy: 1,
      subscribe: 1,
      price: stake,
      parameters: {
        amount: stake,
        basis: "stake",
        contract_type: "DIGITOVER",
        barrier: 1,
        currency: "USD",
        duration: 1,
        duration_unit: "t",
        symbol: symbol,
      },
    })
    setRunningTrades(prevData => prevData + 1)
    setStakes(prev => {
      const updatedStake = [...prev]
      updatedStake.unshift(stake)
      const firststake = updatedStake[updatedStake.length - 1]
      setDefaultStake(firststake)
      if (stopped) {
        setStakes([])
      }
      return updatedStake
    })
  }
}

export function fourthStrategy(
  stopped: boolean,
  runningTrades: number,
  asset: number[],
  setLiveAction: Dispatch<SetStateAction<any>>,
  setShowLiveActionLoader: Dispatch<SetStateAction<any>>,
  setLiveActionClassName: Dispatch<SetStateAction<any>>,
  setRunningTrades: Dispatch<SetStateAction<number>>,
  setStakes: Dispatch<SetStateAction<number[]>>,
  stake: number,
  sendMsg: (msg: any) => void,
  setDefaultStake: Dispatch<SetStateAction<number>>,
  symbol: string
) {
  const count = asset.filter(digit => digit >= 6).length
  if (count === asset.length) {
    setLiveAction("Trading signal acquired, placing trade")
    setShowLiveActionLoader(true)
    setLiveActionClassName("successInfo")
    sendMsg({
      buy: 1,
      subscribe: 1,
      price: stake,
      parameters: {
        amount: stake,
        basis: "stake",
        contract_type: "DIGITUNDER",
        barrier: 6,
        currency: "USD",
        duration: 1,
        duration_unit: "t",
        symbol: "R_50",
      },
    })
    setRunningTrades(prevData => prevData + 1)
    setStakes(prev => {
      const updatedStake = [...prev]
      updatedStake.unshift(stake)
      const firststake = updatedStake[updatedStake.length - 1]
      setDefaultStake(firststake)
      if (stopped) {
        setStakes([])
      }
      return updatedStake
    })
  }
}

export function fifthStrategy(
  stopped: boolean,
  runningTrades: number,
  asset: number[],
  setLiveAction: Dispatch<SetStateAction<any>>,
  setShowLiveActionLoader: Dispatch<SetStateAction<any>>,
  setLiveActionClassName: Dispatch<SetStateAction<any>>,
  setRunningTrades: Dispatch<SetStateAction<number>>,
  setStakes: Dispatch<SetStateAction<number[]>>,
  stake: number,
  sendMsg: (msg: any) => void,
  setDefaultStake: Dispatch<SetStateAction<number>>,
  symbol: string
) {
  const count = asset.filter(digit => digit === 6).length
  if (count === asset.length) {
    setLiveAction("Trading signal acquired, placing trade")
    setShowLiveActionLoader(true)
    setLiveActionClassName("successInfo")
    sendMsg({
      buy: 1,
      subscribe: 1,
      price: stake,
      parameters: {
        amount: stake,
        basis: "stake",
        contract_type: "DIGITUNDER",
        barrier: 6,
        currency: "USD",
        duration: 1,
        duration_unit: "t",
        symbol: symbol,
      },
    })
    setRunningTrades(prevData => prevData + 1)
    setStakes(prev => {
      const updatedStake = [...prev]
      updatedStake.unshift(stake)
      const firststake = updatedStake[updatedStake.length - 1]
      setDefaultStake(firststake)
      if (stopped) {
        setStakes([])
      }
      return updatedStake
    })
  }
}

export function sixthStrategy(
  stopped: boolean,
  runningTrades: number,
  asset: number[],
  setLiveAction: Dispatch<SetStateAction<any>>,
  setShowLiveActionLoader: Dispatch<SetStateAction<any>>,
  setLiveActionClassName: Dispatch<SetStateAction<any>>,
  setRunningTrades: Dispatch<SetStateAction<number>>,
  setStakes: Dispatch<SetStateAction<number[]>>,
  stake: number,
  sendMsg: (msg: any) => void,
  setDefaultStake: Dispatch<SetStateAction<number>>,
  symbol: string
) {
  const consecutiveDigitsCount = countConsecutiveDigits(asset);
  if (consecutiveDigitsCount >= 2) {
    setLiveAction("Trading signal acquired, placing trade")
    setShowLiveActionLoader(true)
    setLiveActionClassName("successInfo")
    sendMsg({
      buy: 1,
      subscribe: 1,
      price: stake,
      parameters: {
        amount: stake,
        basis: "stake",
        contract_type: "DIGITOVER",
        barrier: 5,
        currency: "USD",
        duration: 1,
        duration_unit: "t",
        symbol: symbol,
      },
    })
    setRunningTrades(prevData => prevData + 1)
    setStakes(prev => {
      const updatedStake = [...prev]
      updatedStake.unshift(stake)
      const firststake = updatedStake[updatedStake.length - 1]
      setDefaultStake(firststake)
      if (stopped) {
        setStakes([])
      }
      return updatedStake
    })
  }
}

export function thirdStrategy(
  stopped: boolean,
  runningTrades: number,
  asset: number[],
  setLiveAction: Dispatch<SetStateAction<any>>,
  setShowLiveActionLoader: Dispatch<SetStateAction<any>>,
  setLiveActionClassName: Dispatch<SetStateAction<any>>,
  setRunningTrades: Dispatch<SetStateAction<number>>,
  setStakes: Dispatch<SetStateAction<number[]>>,
  stake: number,
  sendMsg: (msg: any) => void,
  setDefaultStake: Dispatch<SetStateAction<number>>,
  symbol: string
) {
  const recentDigit = asset[0]; // most recent
  if (recentDigit === 4) return; // Ignore 4

  const contractType = recentDigit <= 3 ? "DIGITOVER" : "DIGITUNDER";
  const barrier = recentDigit;

  // const consecutiveDigitsCount = countConsecutiveDigits(asset);
  // if (consecutiveDigitsCount >= 2) {
    setLiveAction("Trading signal acquired, placing trade");
    setShowLiveActionLoader(true);
    setLiveActionClassName("successInfo");

    sendMsg({
      buy: 1,
      subscribe: 1,
      price: stake,
      parameters: {
        amount: stake,
        basis: "stake",
        contract_type: contractType,
        barrier: barrier,
        currency: "USD",
        duration: 1,
        duration_unit: "t",
        symbol: symbol,
      },
    });

    setRunningTrades(prev => prev + 1);

    setStakes(prev => {
      const updatedStake = [stake, ...prev];
      const firststake = updatedStake[updatedStake.length - 1];
      setDefaultStake(firststake);
      if (stopped) {
        return [];
      }
      return updatedStake;
    });
  // }
}
