import React from 'react'
import logo from "../../assets/logoG.svg"
const Footer = () => {
  return (
    <div className=' flex flex-col justify-center items-center gap-3 bg-slate-50 '>
       <div className='text-2xl flex items-center gap-2 font-bold'>
            <img src={logo} alt="" />
            <p>Geladinho <span className='text-primary'>Pro</span></p>
          </div>
          <p className=' text-xs text-slate-600'>© 2025 SeguritGeladinLand</p>
    </div>
  )
}

export default Footer
