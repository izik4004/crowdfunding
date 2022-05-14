import React from 'react'
import "./hero.css"
import img from "../../img/11124.jpg"
const Hero = () => {
  return (
    <div className=" hero-section h-screen flex justify-center align-middle items-center text-center">
            <div className='max-w-3xl'>
               <h1 className="flex font-bold text-7xl ">
                  Raising Hands to Promote Best Project for Funding
               </h1>
               <p>Showcase your product and get funding</p>
               <button className='btn'>Join</button>
            </div>
            <div className='max-w-3xl'>
                <img src={img} alt="" />
            </div>
         </div>
  )
}

export default Hero