"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import { toast } from "sonner";

interface NetworkContextType {
  isSlow: boolean;
}

const NetworkContext = createContext<NetworkContextType>({ isSlow: false });

export const NetworkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSlow, setIsSlow] = useState(false);
  const lastToastTimeRef = useRef<number>(0);
  const TOAST_COOLDOWN = 2 * 60 * 1000; 

  const checkNetworkSpeed = async () => {
    const startTime = performance.now();
    try {
      await fetch("https://www.google.com", { method: "HEAD", mode: "no-cors" });
    } catch (error) {
      console.warn("Network speed check failed:", error);
    }
    const duration = performance.now() - startTime;

    if (duration > 1000) {
      handleSlowNetwork();
    } else {
      setIsSlow(false);
    }
  };

  // Function to handle slow network toast with cooldown
  const handleSlowNetwork = () => {
    setIsSlow(true);
    const now = Date.now();

    // Only show toast if cooldown period has passed
    if (now - lastToastTimeRef.current > TOAST_COOLDOWN) {
      lastToastTimeRef.current = now;
      toast.warning("Slow network detected. Bot Performance will be affected.", {
        duration: 5000,
        className: "toast-info",
      });
    }
  };

  useEffect(() => {
    checkNetworkSpeed();

    const updateNetworkStatus = () => {
      if ("connection" in navigator) {
        const connection = (navigator as any).connection;
        if (["slow-2g", "2g"].includes(connection.effectiveType)) {
          handleSlowNetwork();
        } else {
          setIsSlow(false);
        }
      }
    };

    updateNetworkStatus();

    if ("connection" in navigator) {
      (navigator as any).connection.addEventListener("change", updateNetworkStatus);
    }

    return () => {
      if ("connection" in navigator) {
        (navigator as any).connection.removeEventListener("change", updateNetworkStatus);
      }
    };
  }, []);

  return <NetworkContext.Provider value={{ isSlow }}>{children}</NetworkContext.Provider>;
};

export const useNetwork = () => useContext(NetworkContext);
