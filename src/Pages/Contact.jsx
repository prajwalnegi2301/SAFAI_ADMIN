import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiMail,
  TiPhone,
} from "react-icons/ti";
import { useContext } from "react";
import { Context } from '../main'
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const { isAdminAuthenticated, setIsAdminAuthenticated } = useContext(Context);

  const navigateTo = useNavigate()
  const [messages, setMessages] = useState([]);


  const fetchmessages = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/contact/getMessagesContactUs",
        {
          withCredentials: true,
        }
      );
      setMessages(data.messages);
      console.log(messages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isAdminAuthenticated) {
      navigateTo("/login");
    }
    fetchmessages();

  }, [isAdminAuthenticated]);



  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-200 pt-12 min-h-screen">
      <div className="container mx-auto pt-16 pb-10">
        <div className="flex flex-col lg:flex-row justify-around mx-10">
          <div className="text-center lg:text-left">
            <motion.div className="" whileHover={{ scale: 1.1 }}>
              {" "}
              <h1 className="text-slate-800 text-4xl mt-6 mb-4 font-semibold">
                WHAT THEY
              </h1>
            </motion.div>

            <motion.div className="" whileHover={{ scale: 1.2 }}>
              {" "}
              <h1 className="text-slate-800 text-6xl mb-10 font-bold">
                SAY FOR US
              </h1>
            </motion.div>
            <h4 className="text-slate-600 font-semibold text-lg mx-10 lg:mx-0 mt-4">
              <p>Safai is amazing</p>
            </h4>
            <h4 className="text-slate-600 font-semibold text-lg mx-10 lg:mx-0 mt-1">
              Amazing facilities, friendly workers and respectful faculty.
            </h4>
            <h4 className="text-slate-600 font-semibold text-lg mx-10 lg:mx-0 mt-1">
              Good service with friendly staff and super fast services.
            </h4>

            <div className="flex justify-center lg:justify-start">
              <h6 className="text-slate-600 font-semibold mt-4 text-lg">
                ~ our Users
              </h6>
              <h6 className="text-slate-800 font-bold mt-4 ml-2 text-lg">
                {" "}
                of Safai
              </h6>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="w-96 h-64 border border-blue-600 mr-0 lg:mr-40"></div>
            <div className="absolute bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 w-96 h-64 mt-6 mr-0 lg:mr-28">
              <div className="mx-1 my-0.5 "></div>
            </div>
          </div>
        </div>

        <div className="w-72 h-1 bg-blue-600 mx-auto mt-16 rounded-2xl"></div>
        <div className="flex justify-center mt-4 text-slate-800 text-4xl font-semibold">
          <motion.div className="" whileHover={{ scale: 1.2 }}>
            {" "}
            <h1>READY TO RELAX YOUR WORK</h1>
          </motion.div>
        </div>
        <div className="h-1 w-full bg-slate-500 mt-16"></div>

        <motion.div className="" whileHover={{ scale: 1.4 }}>
          {" "}
          <h1 className="text-4xl text-slate-800 text-center font-bold mb-8 mt-16">
            Contact Us
          </h1>
        </motion.div>

        <ToastContainer position="top-center" />

        {messages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {messages.map((message) => (
              <div
                key={message._id}
                className="bg-white shadow-md rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-slate-800">
                  {message.name}
                </h3>
                <p className="mt-2 text-slate-600">{message.message}</p>


              </div>
            ))}
          </div>
        ) : (
          <p className="text-xl text-slate-600">No message available.</p>
        )}

        <div>
          <div className="flex justify-around  mt-16">
            <TiSocialFacebook className="w-10 h-10 text-slate-600 hover:text-slate-800" />
            <TiSocialLinkedin className="w-10 h-10 text-slate-600 hover:text-slate-800" />
            <TiSocialTwitter className="w-10 h-10 text-slate-600 hover:text-slate-800" />
            <TiMail className="w-10 h-10 text-slate-600 hover:text-slate-800" />
            <TiPhone className="w-10 h-10 text-slate-600 hover:text-slate-800" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
