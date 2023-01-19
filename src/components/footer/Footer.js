import './Footer.css';
import React from 'react';
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaYoutube,FaInstagram ,FaAngleUp} from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footerContainer'>
       <p className="footerText">Theme by <a href='https://colorlibhub.com/' className='link'>Colorlib</a> Powered by <a href='https://reactjs.org/' className='link'>React.js</a></p>
       <div className="socialMedias">
         <FaFacebookF className='socialMedia'/>
         <FaTwitter className='socialMedia'/>
         <FaLinkedinIn className='socialMedia'/>
         <FaYoutube className='socialMedia'/>
         <FaInstagram className='socialMedia'/>

         <a href='#header'><FaAngleUp className='up'/></a>
       </div>
    </div>
  )
}
