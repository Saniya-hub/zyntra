import React from 'react'
import banner1 from '..//../assets/images/banner1.jpeg'
import { useNavigate, useLocation } from 'react-router-dom'

const Home = () => {

  let location = useLocation()
  let pathBool = location.pathname.startsWith(`/adminportal`)

  let navigate = useNavigate()
  return (
    <>
      <div className="home">

        <div className="home-banner">
          <div className="banner-info">
            <div className="info">
              <button className='btn1' onClick={() => pathBool ?
                navigate(`/adminportal/about`) :
                navigate(`/userportal/about`)}>KNOW ABOUT US</button>
              <h1><span style={{ color: "#7c2f3e" }}>Shop More</span>, <br /> Live Better</h1>
              <p>Discover the latest trends in fashion, accessories, electronics and more.</p>
              <button onClick={() => pathBool ?
                navigate(`/adminportal/products`) :
                navigate(`/userportal/products`)}>SHOP NOW</button>
            </div>
          </div>
          <img src={banner1} alt="" />

        </div>

      </div >
    </>
  )
}

export default Home



