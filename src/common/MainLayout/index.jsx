import React from 'react'

import { Outlet  } from "react-router-dom";
import Sider from '../../layout/sider';
import Navbar from '../../layout/navbar';
import SubNavbar from '../../layout/subNavbar';
////styles
import "./styles.scss"
const MainLayout = () => {
  return (
    <div className='main-layout'>
      <div className="layout-nav-col">
        <Navbar/>
        <SubNavbar/>
      </div>
      <div className="main-layout-col">

      <div className="main-layout-sider">
        <Sider/>
      </div>
      <div className="main-layout-content">
      <Outlet/>
      </div>
      </div>
      
      </div>
  )
}

export default MainLayout