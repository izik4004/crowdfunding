import {useState} from "react";
import Welcome from "../Welcome";


const Navbar = () => {
   const [isConnected, setIsConnected] = useState(false)

   const onLogin = () => {
      setIsConnected(true);
   }

   // const onLogout = () => {
   //    setIsConnected(false);
   // }

   const onLoginHandler =() => {
      onLogin(false)
   }
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
            {!isConnected &&
            <button  onClick={onLoginHandler} className="btn">Connect Wallet</button>
          
            }
            {/* <div className="hamburger"></div> */}
            {isConnected && <Welcome/>}
         </div>

         
      </div>
   );
};

export default Navbar;
