import React, { useState } from 'react'
import { Logo_url } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
const Header = () => {
  const[btn,setBtn]=useState("login");
  const onlineStatus=useOnlineStatus();
  return (
    <>
    <div className='Header-section'>
        <img className="img-logo" src={Logo_url} alt=""/>
       
        <ul className='ul-items'>
          <li className='li-items'>onlinestatus:{onlineStatus ? "🤑" : "🔴😡"}</li>
        <li className='li-items'><Link to="/home" className='custom-link'>Home</Link>  
        </li> 
            <li className='li-items'> <Link to="/about" className='custom-link'>About us</Link></li>
            <li className='li-items'><Link to="/contact" className='custom-link'>Contact us</Link></li>
            <li className='li-items'><Link to="/grocery" className='custom-link'>Grocery</Link></li>
            <li className='li-items'><Link to="/services" className='custom-link'>Services</Link></li>
            <li className='li-items'>Cart</li>
            <button className="btn" onClick={()=>btn==="login"?setBtn('logout'):setBtn("login")}>{btn}</button>
        </ul>

        </div>
        </>
  )
}

export default Header