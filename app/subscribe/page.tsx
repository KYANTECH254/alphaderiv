import Header from "@/components/Header"
import Subscribe from "@/components/Subscribe"

export default function Page() {
    return (
        <div className='h-screen flex flex-col gap-2 justify-center items-center font-sans p-6'>
            <div className='topNavCard'>
                <li>Choose Subscription</li>
            </div>
            <Subscribe />
        </div>
    )
}
