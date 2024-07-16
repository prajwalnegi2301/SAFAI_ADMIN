// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Context } from '../main';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Header = () => {
//   const { isAdminAuthenticated, setIsAdminAuthenticated } = useContext(Context);

//   const navigateTo = useNavigate();

//   const handleLogout = async(e) => {
//     e.preventDefault();
//   try{
//     const {data} = await axios.get("http://localhost:8000/api/v1/user/logoutAdmin",{
//       withCredentials:true,
//     })
//     setIsAdminAuthenticated(false);
//     navigateTo("/login");
//     toast.success('Logout successfully');
//   }
//   catch(error){
//     console.log(error);
//     toast.error("Cannot logout Admin")

//   }
//   };



//   return (
//     <header className="bg-slate-100 shadow sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Link to="/">
//           <div className="text-2xl font-bold text-slate-900">Safai</div>
//         </Link>

//         <nav className="space-x-4">
//           {!isAdminAuthenticated ? (
//             <>
//              <Link to="/profile" className="text-slate-600 hover:text-slate-800">Profile</Link>
//               <Link to="/servicesPage" className="text-slate-600 hover:text-slate-800">Services</Link>
//               <Link to="/about" className="text-slate-600 hover:text-slate-800">About Us</Link>
//               <Link to="/contact" className="text-slate-600 hover:text-slate-800">Contact Us</Link>
//             </>
//           ) : (
//             <>
//             <button onClick={handleLogout} className="text-slate-600 hover:text-slate-800 focus:outline-none">Logout</button>
//             <Link to="/servicesPage" className="text-slate-600 hover:text-slate-800">Services</Link>
//             <Link to="/profile" className="text-slate-600 hover:text-slate-800">Profile</Link>
//             <Link to="/workerRegister" className="text-slate-600 hover:text-slate-800 mx-1">RegisterWorker</Link>
//             <Link to="/register" className="text-slate-600 hover:text-slate-800 mx-1">RegisterAdmin</Link>
//             <Link to="/contact" className="text-slate-600 hover:text-slate-800">Contact Us</Link>
             
              
//             </>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../main';
import { toast } from 'react-toastify';
import axios from 'axios';

const Header = () => {
  const { isAdminAuthenticated, setIsAdminAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/user/logoutAdmin", {
        withCredentials: true,
      });
      setIsAdminAuthenticated(false);
      navigateTo("/login");
      toast.success('Logout successful');
    } catch (error) {
      console.log(error);
      toast.error("Cannot logout Admin");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-100 shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <div className="text-2xl font-bold text-slate-900">Safai</div>
        </Link>

        {/* Responsive Navigation */}
        <nav className="space-x-4 flex items-center">
          {!isAdminAuthenticated ? (
            <>
              <Link to="/profile" className="text-slate-600 hover:text-slate-800 hidden md:inline-block">Profile</Link>
              <Link to="/servicesPage" className="text-slate-600 hover:text-slate-800 hidden md:inline-block">Services</Link>
              <Link to="/about" className="text-slate-600 hover:text-slate-800 hidden md:inline-block">About Us</Link>
              <Link to="/contact" className="text-slate-600 hover:text-slate-800 hidden md:inline-block">Contact Us</Link>
            </>
          ) : (
            <>
              <button onClick={handleLogout} className="text-slate-600 hover:text-slate-800 focus:outline-none">Logout</button>
              <Link to="/servicesPage" className="text-slate-600 hover:text-slate-800 hidden md:inline-block">Services</Link>
              <Link to="/profile" className="text-slate-600 hover:text-slate-800 hidden md:inline-block">Profile</Link>
              <Link to="/workerRegister" className="text-slate-600 hover:text-slate-800 hidden md:inline-block mx-1">Register Worker</Link>
              <Link to="/register" className="text-slate-600 hover:text-slate-800 hidden md:inline-block mx-1">Register Admin</Link>
              <Link to="/contact" className="text-slate-600 hover:text-slate-800 hidden md:inline-block">Contact Us</Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Toggle (Hamburger Menu) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-2 px-4">
            {!isAdminAuthenticated ? (
              <>
                <Link to="/profile" className="block text-slate-600 hover:text-slate-800 py-2">Profile</Link>
                <Link to="/servicesPage" className="block text-slate-600 hover:text-slate-800 py-2">Services</Link>
                <Link to="/about" className="block text-slate-600 hover:text-slate-800 py-2">About Us</Link>
                <Link to="/contact" className="block text-slate-600 hover:text-slate-800 py-2">Contact Us</Link>
              </>
            ) : (
              <>
                <button onClick={handleLogout} className="block text-slate-600 hover:text-slate-800 py-2">Logout</button>
                <Link to="/servicesPage" className="block text-slate-600 hover:text-slate-800 py-2">Services</Link>
                <Link to="/profile" className="block text-slate-600 hover:text-slate-800 py-2">Profile</Link>
                <Link to="/workerRegister" className="block text-slate-600 hover:text-slate-800 py-2">Register Worker</Link>
                <Link to="/register" className="block text-slate-600 hover:text-slate-800 py-2">Register Admin</Link>
                <Link to="/contact" className="block text-slate-600 hover:text-slate-800 py-2">Contact Us</Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
