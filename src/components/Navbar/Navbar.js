import React from "react";


const Navbar = () => {
   return (
      <div className="navbar bg-[#1e2230] h-20 py-5">
         <div className="container text-xl flex justify-between align-middle items-center text-center py-2 max-w-7xl mx-auto">
            <div className="logo">Logo</div>
            <ul className="nav-menu flex gap-5 text-white font-bold">
               <li>Home</li>
               <li>Order</li>
               <li>Menu</li>
               <li>Delivery</li>
               <li>Contact</li>
            </ul>
            <button className="btn">Sign Up</button>
            {/* <div className="hamburger"></div> */}
         </div>

         
      </div>
   );
};

export default Navbar;
