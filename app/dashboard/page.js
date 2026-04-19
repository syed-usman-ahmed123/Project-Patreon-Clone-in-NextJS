"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const { data: session, } = useSession()
  if (!session) {
    const router = useRouter()
    router.push('/login')
  }
  return (
   
    <div className="min-h-screen bg-[#000b1d] flex items-center justify-center p-4 sm:p-8">

     
      <div className="w-full max-w-xl">

       
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-7">
          Welcome to your Dashboard
        </h2>

        <form className="flex flex-col gap-y-5">

       
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm md:text-base font-medium ml-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-[#1c2635] text-white px-4 py-2
               rounded-lg border border-transparent focus:border-blue-500 focus:bg-[#252f3f] outline-none transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm md:text-base font-medium ml-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#1c2635] text-white px-4 py-2
               rounded-lg border border-transparent focus:border-blue-500 focus:bg-[#252f3f] outline-none transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm md:text-base font-medium ml-1">Username</label>
            <input
              type="text"
              placeholder="Choose a username"
              className="w-full bg-[#1c2635] text-white px-4 py-2
               rounded-lg border border-transparent focus:border-blue-500 focus:bg-[#252f3f] outline-none transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm md:text-base font-medium ml-1">Profile Picture</label>
            <input
              type="text"
              placeholder="Paste image URL"
              className="w-full bg-[#1c2635] text-white px-4 py-2
               rounded-lg border border-transparent focus:border-blue-500 focus:bg-[#252f3f] outline-none transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm md:text-base font-medium ml-1">Cover Picture</label>
            <input
              type="text"
              placeholder="Paste cover URL"
              className="w-full bg-[#1c2635] text-white px-4 py-2
               rounded-lg border border-transparent focus:border-blue-500 focus:bg-[#252f3f] outline-none transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm md:text-base font-medium ml-1">Razorpay Credentials</label>
            <input
              type="password"
              placeholder="API Key / Secret"
              className="w-full bg-[#1c2635] text-white px-4 py-2
               rounded-lg border border-transparent focus:border-blue-500 focus:bg-[#252f3f] outline-none transition-all duration-200"
            />
          </div>

        
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-bold py-3.5 rounded-lg mt-3 shadow-lg transition-all duration-200"
          >
            Save
          </button>

        </form>
      </div>
    </div>
  )
}

export default Dashboard