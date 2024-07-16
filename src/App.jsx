import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Context } from './main';
import axios from 'axios'
import Login from './Pages/Login';
import Register from './Pages/Register';
import WhoIAm from './Pages/WhoIAm';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Header from './Components/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import FeedbackForm from './Pages/FeedbackForm';
import Footer from './Components/Footer';
import WorkerRegister from './Pages/WorkerRegister';
import ServicesPage from './Pages/ServicesPageComponent';
import WorkerDetail from './Pages/WorkerDetail';





const App = ()=> {

  const {isAdminAuthenticated,setIsAdminAuthenticated, setAdmin} = useContext(Context);
 
 
  useEffect(() => {
    const fetchAdmin = async()=>{
      try{
    const { data } = await axios.get('http://localhost:8000/api/v1/user/adminProfile',{
      withCredentials:true,
    });
    
      setIsAdminAuthenticated(true);
      setAdmin(data.admin);
    
  } catch(error){
    setIsAdminAuthenticated(false);
    setAdmin({});
  }
  };

  fetchAdmin();

  }, [isAdminAuthenticated]); 


  return (
    <BrowserRouter>
    <Header/>
  
    <Routes>
    <Route path='/' element={<Home/>} />
     
    
      <Route path='/whoIAm' element={<WhoIAm/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/workerRegister' element={<WorkerRegister/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      {/* <Route path='/feedback/:id' element={<FeedbackForm/>} /> */}
      <Route path='/servicesPage' element={<ServicesPage/>} />
      <Route path="/worker/:id" element={<WorkerDetail />} />
      

  
    </Routes>
    <Footer/>
    


    </BrowserRouter>
  )
}

export default App
