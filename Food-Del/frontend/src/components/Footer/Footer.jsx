import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p> A user-friendly food delivery website that lets customers browse menus, add items to their cart, and order from local restaurants with ease. Features include real-time order tracking, secure payments, and personalized recommendations for a seamless dining experience at home</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon}alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+383-44-222-111</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>
            

        </div>
        <hr />
        <p className="footer-copyright">2025 Tomato. All rights reserved. Made with love for delicious food lovers.</p>
    </div>
)
}

export default Footer
