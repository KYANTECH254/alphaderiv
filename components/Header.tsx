"use client"
import Link from "next/link";

export default function Header() {
    return (

        <Link href="/">
            <div className='topNavCard relative font-bold shadow-lg gap-2 flex flex-row items-center'>
                <img src="/icon.png" alt="Alphabot" title="Alphabot" className="w-10 h-10 animate-spin rounded-full hover:animate-bounce" />
                AlphaBot
            </div>
        </Link>

    )
}