import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const Context = createContext({ isAdminAuthenticated: false,
 });


const AppWrapper = () => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [admin, setAdmin] = useState({});
  const [mode, setMode] = useState("light");
  // const [isWorkerAuthenticated, setIsWorkerAuthenticated] = useState(false);
  // const [worker, setWorker] = useState({});
 

  return (
    <Context.Provider
      value={{ isAdminAuthenticated, setIsAdminAuthenticated, admin, setAdmin, mode,setMode  }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AppWrapper />

)
