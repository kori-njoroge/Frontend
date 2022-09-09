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
import UserDashboard from './components/userdashboard';
import ErrorPage from './pages/errorPage';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path='/signup' element ={<Signup/>}/>
          <Route path='/' element ={<Home />}/>
          <Route path='/Aboutus' element ={<Aboutus/>}/>
          <Route path='/Contactus' element ={<ContactUs/>}/>
          <Route path='/signin' element ={<Signin/>}/>
          <Route path='/dashboard' element ={<UserDashboard />} />
          <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
