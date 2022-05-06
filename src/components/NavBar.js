import React from 'react'
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className='p-4 bg-black mb-3 col-13' style={{width:"100vw", textAlign:"center"}}>
      <Link to="/" className="font-medium 
     text-5xl   
     text-white   
     inline-block 
     mr-4 hover:text-green-400
     ">IMDB</Link>
      <Link to="/login" className=" font-medium 
     text-blue-500 
      text-2xl hover:text-pink-500" >Login</Link>
    </nav>
  )
}

export default NavBar