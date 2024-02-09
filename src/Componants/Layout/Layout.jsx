import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'


export default function Layout() {
  return <>
    <Navbar/>
        <div className='w-100 text-white d-flex justify-content-center align-items-center test bg-main-color'>
        <Outlet></Outlet>
        </div>
    <Footer/>
  </>
}
