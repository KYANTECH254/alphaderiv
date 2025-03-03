"use client"
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { myPref } from "@/lib/Preferences";
import Link from "next/link";

export default function Home() {
  const [existingAccounts, setExistingAccounts] = useState<string | null>(null);

  useEffect(() => {
    const storedAccounts = localStorage.getItem("accountUrl");
    if (storedAccounts) {
      setExistingAccounts(storedAccounts);
    }
  }, []);

  return (
    <div className='h-screen flex flex-col gap-2 justify-center items-center font-sans'>
      <Header />
      <form action='/bot' className="p-5 mt-5">
        <h1 className="text-xl font-bold">Login using your Deriv Account</h1>

        <div className='flex flex-col'>
          <label className='formLabel' htmlFor='token'>
            Token
          </label>
          <input
            className='formInput'
            type='text'
            name='token'
            placeholder='Enter token'
            required
          />
        </div>

        <button className='primaryButton' type='submit'>
          Login
        </button>

        <h3 className='text-center py-4'>OR</h3>

        <Link className='primaryButton' href={`${myPref.httpUrl}${myPref.appId}`}>
          <button className='primaryButton flex flex-row items-center justify-center w-full gap-2' type='button'>
            <img src="/icon.png" alt="Continue to login with your deriv account!" title="Continue to login with your deriv account!" className="w-8 h-8 rounded-md" />
            Continue with Deriv
          </button>
        </Link>

        {existingAccounts && (
        <Link href={existingAccounts}>
          <button className='primaryButton flex flex-row items-center justify-center w-full gap-2' type='button'>
            Continue with Existing Accounts
          </button>
        </Link>
      )}
      </form>

    </div>
  );
}
