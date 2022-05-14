import React from "react";


const Navbar = () => {
   return (
      <div className="navbar bg-[#333CC1] h-20">
         <div className="container text-xl flex justify-between align-middle items-center text-center py-10 max-w-7xl mx-auto">
            <div className="logo">Logo</div>
            <ul className="nav-menu flex gap-5 text-white">
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
