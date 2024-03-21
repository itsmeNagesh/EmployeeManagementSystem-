import React from 'react';

import './App.css';
import NavbarCompo from './components/header/NavbarCompo';
import { Routes,Route } from 'react-router-dom';
import Home from './components/navbarmenu/HOME/Home';
import EmpTable from './components/navbarmenu/empdata/EmpTable';
import Contact from './components/navbarmenu/Contact';
import Footer from './components/footer/Footer';
import UserDetails from './userdetails/UserDetails'
import Logindata from './components/Logindata';
function App() {
  return (
   <>
    <NavbarCompo/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/EmpTable' element={<EmpTable/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/UserDetails/:id/:name' element={<UserDetails/>}/>
        {/* <Route path='/logindata' element={<Logindata/>}/> */}
      </Routes>
      <Footer/>

   </>
  );
}

export default App;
