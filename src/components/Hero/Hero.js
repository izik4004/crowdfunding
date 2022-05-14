import React from 'react'
import "./hero.css"
import img from "../../img/2.png"
const Hero = () => {
  return (
    <div className=" hero-section gap-10 bg-[#1e2230] mb-10">
           <div className=' h-screen max-w-7xl  mx-auto flex justify-center align-middle items-center text-center'>
            <div className='max-w-3xl'>
            <p className='py-10 text-left text-lg font-semibold text-[#fcb005]'>Crowdfounding Agency</p>
               <h1 className="flex font-bold text-7xl text-white text-left">
                  Raising Hands to Promote Best Project for Funding
               </h1>
               <p className='text-2xl py-10 text-white text-left'>Showcase your product and get funding</p>
               <div className='py-10 justify-start flex'>
               <button className='btn px-10 py-4 text-lg bg-[#333CC1]'>Showcase your Startup</button>
               </div>
            </div>
            <div className='max-w-4xl'>
                <img src={img} alt="" className="w-fit" />
            </div>
            </div>
         </div>
  )
}

export default Hero