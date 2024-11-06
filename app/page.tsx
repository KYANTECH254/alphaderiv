import { myPref } from "@/lib/Preferences"
import Link from "next/link"

export default function Home() {
  return (
    <div className='h-screen flex flex-col gap-2 justify-center items-center font-sans'>
      <div className='topNavCard'>Deriv</div>
      <form action='/bot'>
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

        <Link
          className='primaryButton'
          href={`${myPref.httpUrl}${myPref.appId}`}
        >
          <button className='primaryButton' type='button'>
            Continue with deriv
          </button>
        </Link>
      </form>
    </div>
  )
}
