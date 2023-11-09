import React from 'react'

const QuoteSummary = () => {
  return (
    <div>
        
        <div className='flex gap-10 mt-10'>
            <div className=' flex-col'><label className='  '>Title</label><p className=' font-semibold'>Mr</p></div>
            <div> <label className=' flex-col '>Full Name</label><p className=' font-semibold'>Eric John</p></div>
            <div><label className=' flex-col '>Mobile Number</label><p className=' font-semibold'>0705066570</p></div>
        </div>
        <div className='flex gap-10 mt-10'>
            <div><label className='  flex justify-start'>Email</label><p className=' font-semibold' >eric.custodian.com</p></div>
            <div><label className='  flex justify-start'>Amount to Save(premium)</label><p className=' font-semibold'>#200,000</p></div>
        </div>
        <div className='flex gap-10 mt-10'>
            <div><label className='flex justify-start'>Insurance Start Date</label><p className=' font-semibold flex justify-start'>23/05/23</p></div>
            <div><label>Payment Frequency</label><p className=' font-semibold'>Annualy</p></div>
            <div><label>Policy Term(years)</label><p className=' font-semibold'>10</p></div>
        </div>

        <div className='flex justify-start  gap-4 mt-24'><button className='w-[150px] border border-solid border-[#900000]  px-2 py-2 text-[#900000]'>Back</button>
        <button className='w-[150px] bg-[#900000] text-white px-2 py-2'>Buy Product</button></div>
      
    </div>
  )
}

export default QuoteSummary
