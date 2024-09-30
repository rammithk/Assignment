import React from 'react'
import { Routes,Route,Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
    <div className="flex justify-between bg-black text-white h-[5vh] items-center">
    <div className="">
        LOGO
    </div>
    <div className=" flex gap-4 mr-10">
        <Link to='/'>Home</Link>
        <Link to='/contactus'>contact us</Link>
        <Link to='/aboutus'>About</Link>
        <Link>Services</Link>
    </div>
    </div>
    </>
  )
}

export default NavBar
