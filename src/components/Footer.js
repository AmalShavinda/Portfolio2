import './FooterStyles.css'

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaVoicemail } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
               <FaHome size={20} style={{color: 'white', marginRight: '1rem'}}/>
                <div>
                    <p>116 D, Kadukanna, Tellijjawila,</p>
                    <p>Sri Lanka</p>
                </div>
            </div>
            <div className='phone'>
                <h4>
                    <FaPhone size={20} style={{color: 'white', marginRight: '1rem'}}/>
                    071 7610 703
                </h4>
            </div>        
            <div className='email'>
               <h4>
                <FaMailBulk size={20} style={{color: 'white', marginRight: '1rem'}}/>
                amalshavinda@gmail.com
                </h4>
            </div>        
        </div>
        <div className='right'>
            <h4>About Me</h4>
            <p>This is me Amal Shavinda. CEO & Founder of the Tech2etc.<br/>
            I enjoy discussing new projects and design challanges.
            </p>
            <div className='social-icons'>
                <FaFacebook size={30} style={{color: 'white', marginRight: '1rem'}}/>
                <FaTwitter size={30} style={{color: 'white', marginRight: '1rem'}}/>
                <FaLinkedin size={30} style={{color: 'white', marginRight: '1rem'}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
