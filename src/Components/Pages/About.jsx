import React from 'react'
import abouthero1 from '../../assets/images/about-hero1.png'
import story1 from '../../assets/images/story5.png'
import story2 from '../../assets/images/story4.png'
import story3 from '../../assets/images/story5.png'
import { useNavigate, useLocation } from 'react-router-dom'
import pro1 from '../../assets/images/pro1.png'
import pro2 from '../../assets/images/pro2.png'
import pro3 from '../../assets/images/pro3.png'
import pro4 from '../../assets/images/pro4.png'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import cta1 from '../../assets/images/cta1.jpg'
import cta2 from '../../assets/images/cta2.jpg'
import cta3 from '../../assets/images/cta3.jpg'
import cta4 from '../../assets/images/cta4.jpg'

const About = () => {

  let location = useLocation()
  let pathBool = location.pathname.startsWith(`/adminportal`)
  let navigate = useNavigate()
  return (
    <>
      <div className="about">

        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <h1>Style That Feels Like You</h1>
            <p>
              Discover curated fashion, beauty, and lifestyle essentials
              designed to elevate your everyday look.
            </p>
            <button onClick={() => pathBool ?
              navigate(`/adminportal/products`) :
              navigate(`/userportal/products`)}>Explore Collection</button>
          </div>

          <div className="hero-image">
            <img src={abouthero1} alt="Fashion Accessories" />
          </div>
        </section>

        {/* BRAND STORY */}
        <section className="brand-story">
          <div className="story-images">
            <img src={story1} alt="Shopping" />
            {/* <img src={story3} alt="Home Decor"  /> */}

          </div>

          <div className="story-content">
            <h2>About ZYNTRA</h2>
            <p>
              ZYNTRA is a modern shopping destination created for people who
              love style, simplicity, and elegance. We bring together carefully
              selected fashion, beauty, and lifestyle products that help you
              express yourself with confidence.
            </p>

            <p>
              Our goal is to make online shopping effortless and enjoyable.
              From chic handbags and stylish accessories to beauty essentials
              and home picks, every product is chosen to match a fresh,
              polished, and contemporary lifestyle.
            </p>

            <img src={story2} alt="Beauty Products" className='img2' />
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why-us">

          <h2>Why Shop With Us</h2>

          <div className="cards">

            <div className="card">
              <h3>Curated Collections</h3>
              <p>
                Handpicked fashion and lifestyle products inspired by modern trends.
              </p>
            </div>

            <div className="card">
              <h3>Affordable Luxury</h3>
              <p>
                Premium aesthetics and quality products at accessible prices.
              </p>
            </div>

            <div className="card">
              <h3>Easy Shopping</h3>
              <p>
                Smooth browsing, secure checkout, and a stress-free experience.
              </p>
            </div>

            <div className="card">
              <h3>Fresh Trends</h3>
              <p>
                New arrivals and trending collections updated regularly.
              </p>
            </div>

          </div>
        </section>

        {/* CATEGORIES */}
        <section className="categories">

          <h2>Our Categories</h2>

          <div className="category-grid">

            <div className="category-box" onClick={() => pathBool ?
              navigate(`/adminportal/products/jewelery`) :
              navigate(`/userportal/products/jewelery`)}>
              <img src={cta2} alt="Fashion" />
              <div className="cta-links">
                <h3>Fashion Accessories</h3>&nbsp;<button><ArrowCircleRightIcon></ArrowCircleRightIcon></button>

              </div>
            </div>

            <div className="category-box" onClick={() => pathBool ?
              navigate(`/adminportal/products/beautyproducts`) :
              navigate(`/userportal/products/beautyproducts`)}>
              <img src={cta1} alt="Beauty" />
              <div className="cta-links">
                <h3>Beauty Products</h3>&nbsp; <button><ArrowCircleRightIcon></ArrowCircleRightIcon></button>

              </div>
            </div>

            <div className="category-box" onClick={() => pathBool ?
              navigate(`/adminportal/products`) :
              navigate(`/userportal/products`)}>
              <img src={cta4} alt="Home" />
              <div className="cta-links">
                <h3>Home & Living</h3>&nbsp;<button><ArrowCircleRightIcon></ArrowCircleRightIcon></button>

              </div>
            </div>

            <div className="category-box" onClick={() => pathBool ?
              navigate(`/adminportal/products`) :
              navigate(`/userportal/products`)}>
              <img src={cta3} alt="Lifestyle" />
              <div className="cta-links">
                <h3>Lifestyle Essentials</h3>&nbsp;<button><ArrowCircleRightIcon></ArrowCircleRightIcon></button>

              </div>
            </div>

          </div>
        </section>

        {/* PROMISES SECTION */}

        <section className="trust">

          <h2>Our Promise</h2>

          <div className="trust-grid">

            <div className="trust-card">
              <img src={pro1} alt="" />
            </div>

            <div className="trust-card">
              <img src={pro2} alt="" />
            </div>

            <div className="trust-card">
              <img src={pro3} alt="" />
            </div>

            <div className="trust-card">
              <img src={pro4} alt="" />
            </div>

          </div>

        </section>

        {/* TESTIMONIALS */}

        <section className="testimonials">

          <h2>Customer Favorites</h2>

          <div className="testimonial-grid">

            <div className="testimonial-card">

              <p>
                “Absolutely love the quality and aesthetic. Shopping at
                ZYNTRA always feels premium and effortless.”
              </p>

              <h4>— Priya S.</h4>

            </div>

            <div className="testimonial-card">

              <p>
                “Beautiful collections and super fast delivery.
                Everything arrived exactly as expected.”
              </p>

              <h4>— Ananya R.</h4>

            </div>

            <div className="testimonial-card">

              <p>
                “The products are trendy, elegant, and affordable.
                My favorite online shopping destination.”
              </p>

              <h4>— Neha K.</h4>

            </div>

          </div>

        </section>

        {/* CTA SECTION */}
        <section className="cta">

          <h2>Your Style, Your Space, Your Way.</h2>

          <p>
            Explore collections designed to inspire confidence and elegance
            every day.
          </p>

          <button onClick={() => pathBool ?
            navigate(`/adminportal/products`) :
            navigate(`/userportal/products`)}>Start Shopping</button>

        </section>

      </div>
    </>
  )
}

export default About
