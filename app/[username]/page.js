import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full relative '>
        <img className='object-cover w-full ' src="/patreon_banner.gif" alt="" />
        <div className='absolute right-[47%] -bottom-10 border-white border-2 rounded-full'>
          <img width={80} height={80} src="/UsmanCoder.png" alt="" />
        </div>
      </div>

      <div className='info flex justify-center items-center my-20 flex-col gap-2 '>
        <div className='font-bold text-lg'>

          @{params.username}
        </div>
        <div className='text-slate-400'>
          Creating Animated art for VTT's
        </div>
        <div className='text-slate-400'>
          20,548 members . 103 posts . $18,750/release
        </div>
        <div className="payments flex gap-3 w-[80%] mt-10">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            {/* Show list of all the supporters as a leaderboard  */}
            <h2 className='text-2xl  font-bold my-5'>
              Supporters
            </h2>
            <ul className='mx-5 text-lg'>

              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="/avatart.gif" alt="avatart" />
                <span> Ali Donated <span className='font-bold'>$30</span>  with a message and "I support you bro lots of love ❤"</span>
               </li>
                 <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="/avatart.gif" alt="avatart" />
                <span> Ali Donated <span className='font-bold'>$30</span>  with a message and "I support you bro lots of love ❤"</span>
               </li>
                 <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="/avatart.gif" alt="avatart" />
                <span> Ali Donated <span className='font-bold'>$30</span>  with a message and "I support you bro lots of love ❤"</span>
               </li>
             
            </ul>


          </div>
          <div className="makepayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className='text-2xl font-bold my-5'>Make a  Payment</h2>
            <div className='flex gap-2 flex-col'>
              {/* input name, message, and amount */}
               <input type="text" className=' w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name ' /> <input type="text" className=' w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message ' />
              <input type="text" className=' w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount ' />
          
              <button type="button" class="text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
             

            </div>
            <div className=' flex gap-2 mt-5'>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $15</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username