import Header from "@/components/Header"
import Login from "@/components/Login"
import Link from "next/link"

export default function Home() {
    return (
        <div className='h-screen flex flex-col gap-2 justify-center items-center font-sans'>
            <Header />
            <Login />
        </div>
    )
}
