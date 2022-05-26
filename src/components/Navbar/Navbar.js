import { useEffect, useState, useContext } from "react";
import Login from "../Login";
// import Welcome from "../Welcome";

import { TransactionContext } from "../../context/TransactionContext";

const Navbar = () => {
   const { connectWallet } = useContext(TransactionContext);

   return (
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

            <button onClick={connectWallet} className="btn">
               Connect Wallet
            </button>

            {/* <div className="hamburger"></div> */}
            {/* {isConnected && <Welcome/>} */}
         </div>
      </div>
   );
};

export default Navbar;
