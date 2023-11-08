import React from 'react'

const maturityView = () => {
  return (
    <div className=' flex-col py-4 bg-[#900000]  h-[250px] mt-10'>
        <div className=' flex flex-col mt-4'>
            <h3 className=' flex justify-start px-4 text-white'>Maturity Value</h3>
            <p className='flex justify-start px-4 text-3xl text-white'>#120,000,000</p>
        </div>
      <div  className='flex flex-col mt-4'>
        <h5 className='flex justify-start px-4 text-white'>Growth</h5>
        <p className=' flex justify-start px-4 text-3xl text-white'>16.5%</p>
      </div>
      <div className=' flex px-4 gap-4 mt-4'>
        <button className='w-[150px] bg-white px-2 py-2 text-[#900000]'>Download Quote</button>
        <button className='w-[150px] bg-[#900000] text-white border border-solid border-[white] px-2 py-2'>Send Quote</button>
      </div>
    </div>
  )
}

export default maturityView
