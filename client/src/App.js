import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar';

//importing pages
import Home from './pages/Home';
import Signin from './pages/signin';
import Aboutus from './pages/Aboutus';
import Signup from './pages/signup';
import ContactUs from './pages/Contactus';
// import UserDashboard from './components/userdashboard';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/Home' element ={<Home />}/>
          <Route path='/Aboutus' element ={<Aboutus/>}/>
          <Route path='/Contactus' element ={<ContactUs/>}/>
          <Route path='/signin' element ={<Signin/>}/>
          <Route path='/signup' element ={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
