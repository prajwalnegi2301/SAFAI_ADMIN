import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { FaUser, FaBirthdayCake, FaVenusMars, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHome } from "react-icons/fa";

const Profile = () => {
  const { isAdminAuthenticated, setIsAdminAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const [admin,setAdmin] = useState("");

  
    const fetchAdmin = async()=>{
      try{
    const { data } = await axios.get('http://localhost:8000/api/v1/user/adminProfile',{
      withCredentials:true,
    });
    
      setAdmin(data.admin);
    
  } catch(error){
    setAdmin({});
  }
  };
  

  useEffect(() => {
      if (!isAdminAuthenticated) {
    navigateTo("/login");
  }
   fetchAdmin();
    
  }, [isAdminAuthenticated])

  return (
    <div className="min-h-screen py-12 flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className="flex justify-center py-6 hover:bg-blue-50">
          <img
            src={
              admin.avatar && admin.avatar.url
                ? admin.avatar.url
                : "default-image-url"
            }
            alt="Profile Image"
            className="h-48 w-48 object-cover shadow-xl rounded-full"
          />
        </div>
        <div className="py-6 px-10">
          <div className="text-center text-3xl font-bold text-slate-800 mb-4">
            {admin.name}
          </div>
          <div className="flex flex-col  text-slate-700">
            <div className="mb-2">
              <strong>Email:</strong> {admin.email}
            </div>
            <div className="mb-2">
              <strong>Gender:</strong> {admin.gender}
            </div>
            <div className="mb-2">
              <strong>Document Verified:</strong> {admin.document}
            </div>

          </div>
        </div>

        
       

        {/* <div className="flex justify-center">
          <Link
            to="/feedbackform"
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
          >
            Provide Feedback
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
