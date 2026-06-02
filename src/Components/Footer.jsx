import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (

    <footer className='footer'>

      <div className="footer-container">

        {/* Left Section */}

        <div className="footer-left">

          <div className="logo">

            <ShoppingBagIcon className='logo-icon' />

            <h2>ZYNTRA</h2>

          </div>

          <p>
            Shop more, live better with Zyntra.
            Discover the latest trends in fashion,
            accessories and lifestyle products.
          </p>

          <div className="social-icons">

            <FacebookIcon className='icon' />

            <InstagramIcon className='icon' />

            <TwitterIcon className='icon' />

            <YouTubeIcon className='icon' />

          </div>

          <h4>
            © 2026 Zyntra. All Rights Reserved
          </h4>

        </div>

        {/* Center Section */}

        <div className="footer-center">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>

        </div>

        {/* Right Section */}

        <div className="footer-right">

          <h3>Subscribe</h3>

          <p>
            Get updates about new arrivals
            and exclusive offers.
          </p>

          <div className="subscribe">

            <input
              type="email"
              placeholder='Enter Your Email'
            />

            <button>
              Subscribe
            </button>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer