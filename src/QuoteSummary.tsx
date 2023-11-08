import React from 'react'

const QuoteSummary = () => {
  return (
    <div>
        
        <div className='flex gap-10 mt-10'>
            <div className=' flex-col'><label className=' font-semibold '>Title</label><p>Mr</p></div>
            <div> <label className=' flex-col font-semibold'>Full Name</label><p>Eric John</p></div>
            <div><label className=' flex-col font-semibold'>Mobile Number</label><p>0705066570</p></div>
        </div>
        <div className='flex gap-10 mt-10'>
            <div><label className=' font-semibold flex justify-start'>Email</label><p >eric.custodian.com</p></div>
            <div><label className=' font-semibold flex justify-start'>Amount to Save</label><p>#200,000</p></div>
        </div>
        <div className='flex gap-10 mt-10'>
            <div><label className='flex justify-start'>Insurance Start Date</label><p className=' flex justify-start'>13-6-2023</p></div>
            <div><label>Payment Frequency</label><p>Annualy</p></div>
        </div>

        <div className='flex justify-start  gap-4 mt-24'><button className='w-[150px] border border-solid border-[#900000]  px-2 py-2 text-[#900000]'>Back</button>
        <button className='w-[150px] bg-[#900000] text-white px-2 py-2'>Buy Product</button></div>
      
    </div>
  )
}

export default QuoteSummary
