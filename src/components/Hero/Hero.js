import React, { useContext } from "react";
import "./hero.css";
import img from "../../img/2.png";
import { TransactionContext } from "../../context/TransactionContext";


const Hero = () => {
   const { connectWallet, currentAccount, createCampaign, handleChange, formData } = useContext(TransactionContext);

   const handleSubmit = (e) => {
      const { minimumAmount, fundGoal} = formData;

      e.preventDefault()

      if (!minimumAmount || !fundGoal) return;
      createCampaign();
   }

   return (
      <>
               <div className="navbar bg-[#1e2230] h-20 py-5">
         <div className="container text-xl flex justify-between align-middle items-center text-center py-2 max-w-7xl mx-auto">
            <div className="logo">Logo</div>
            <ul className="nav-menu flex gap-5 text-white font-bold">
               {/* <li>Home</li>
               <li>Order</li>
               <li>Menu</li> */}
               <li>Products</li>
               <li>Contact</li>
            </ul>
{!currentAccount && (
            <button onClick={connectWallet} className="btn">
               Connect Wallet
            </button>
            )}
            {/* <div className="hamburger"></div> */}
            {/* {isConnected && <Welcome/>} */}
         </div>
      </div>
     
      <div className=" hero-section gap-10 bg-[#1e2230] mb-10">
         <div className=" h-screen max-w-7xl  mx-auto flex justify-center align-middle items-center text-center">
            <div className="max-w-3xl">
               <p className="py-10 text-left text-lg font-semibold text-[#fcb005]">
                  Crowdfounding Agency
               </p>
               <h1 className="flex font-bold text-7xl text-white text-left">
                  Raising Hands to Promote Best Project for Funding
               </h1>
               <p className="text-2xl py-10 text-white text-left">
                  Showcase your product and get funding
               </p>
               <div className="py-10 justify-start flex">
                  <button className="btn px-10 py-4 text-lg bg-[#333CC1]">
                     Showcase your Startup
                  </button>
               </div>
            </div>
            {/* <div className="max-w-4xl">
               <img src={img} alt="" className="w-fit" />
            </div> */}
            <div className="border w-full d-flex rounded-lg text-center h-1/2 ">
               <div className="d.flex text-black align-middle items-center justify-center">
               <div className="py-5">
                  {/* <label>Minimium Amount</label> */}
                  <input
                     name="minimumAmount"
                     type="text"
                     className="py-5 px-5 rounded-md w-3/4"
                     placeholder="Minimium Amount"
                     onChange={handleChange}
                    
                     // aria-label="Minimium Amount"
                  />
               </div>
               <div className="py-5">
                  {/* <label>Fund Goals</label> */}
                  <input
                     name="fundGoals"
                     type="text"
                     className="py-5 px-5 rounded-md w-3/4"
                     placeholder="Fund Goals"
                     onChange={handleChange}
                     // aria-label="Fund Goals"
                  />
               </div>
               <button onClick={handleSubmit} className="py-5 px-5 bg-green-600"> Submit</button>
               </div>
            </div>
         </div>
      </div>
      </>
   );
};

export default Hero;
