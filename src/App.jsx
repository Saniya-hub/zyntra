import React from 'react'
import './App.css'
import './assets/styles/zyntra.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './Components/Landingpage'
import AdminPortal from './Components/Admin/AdminPortal'
import UserPortal from './Components/Users/UserPortal'

const App = () => {
  return (
    <>
      <div className="zyntra">
        <Routes>
          <Route element = {<Landingpage/>} path = '/'/>
          <Route element={<UserPortal/>} path='/userportal/*' /> 
          <Route element = {<AdminPortal/>} path='/adminportal/*'/>  // /* indicates extending admin porttal  
          
          
        </Routes>
      </div>
      
    </>
  )
}

export default App
