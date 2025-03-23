import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Craving something delicious? Explore a world of flavors with ease and get your favorite meals delivered hot and fresh, anytime, anywhere. From local delights to gourmet feasts, we bring the best restaurants to your doorstep. Fast, reliable, and just a tap away—because great food deserves great service!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
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
                <li>+91-952-868-6938</li>
                <li>contactus@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>© 2025 Tomato. All rights reserved. | Delicious Delivered, Anytime, Anywhere!</p>
    </div>
  )
}

export default Footer
