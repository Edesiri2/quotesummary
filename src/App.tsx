import { useState } from 'react'
import './App.css'
import MaturityView from './MaturityView'
import QuoteSummary from './QuoteSummary'

function App() {

  return (
   <div className='mainbg h-[fit]   py-10  px-24'>
    <h2 className=' text-[#900000] text-3xl mt-6'>Quote Summary</h2> <div className=' w-[fit] flex '>
      <div className=' flex justify-between gap-24'>
      <div className=''><QuoteSummary/></div>
      <div className=''><MaturityView/></div>
      </div>
    </div> </div>
  )
}

export default App
