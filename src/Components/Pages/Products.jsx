import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import mens from '../../assets/images/cta_mens1.jpg'
import womens from '../../assets/images/cta_womens.jpg'
import electronics from '../../assets/images/cta_elec.jpg'
import jewelery from '../../assets/images/cta_jewel.jpg'
import all from '../../assets/images/cta_all.jpg'
import beauty from '../../assets/images/cta_beauty.jpg'

const Products = () => {

  let [products, setProducts] = useState([])
  // let [category, setCategory] = useState("all")

  let navigate = useNavigate()

  let fetchapi = async () => {
    let respData = await axios.get('https://zyntra-backend-6.onrender.com/products')
    setProducts(respData.data)



  }
  useEffect(() => {
    fetchapi()
  }, [])
  // console.log(products)

  // we want to hide the add product in user protalpage

  let location = useLocation()
  let pathBool = location.pathname.startsWith(`/adminportal`)

  let handleViewmore = (productId) => {
    pathBool ?
      navigate(`/adminportal/viewmore / ${productId}`) :
      navigate(`/userportal/viewmore / ${productId}`);


  };


  let handleViewMore = (productid) => {
    pathBool ?
      navigate(`/adminportal/viewmore/${productid}`) :
      navigate(`/userportal/viewmore/${productid}`)

  }

  let { category } = useParams()

  let filteredProducts = products.filter((elem) => {

    if (category === "mens") {

      return elem.category === "men's clothing"

    }

    else if (category === "womens") {

      return elem.category === "women's clothing"

    }

    else if (category === "electronics") {

      return elem.category === "electronics"

    }

    else if (category === "jewelery") {

      return elem.category === "jewelery"

    }
    else if (category === "beautyproducts") {

      return elem.category === "beauty products"

    }


    return elem

  })



  // let handleCategoryClick = (category) => {
  //   navigate(`/products/${category}`)
  // }

  return (
    <>
      <div className='products'>
        <div className='pro-head'>
          <h1>Products</h1>

          {pathBool && <button onClick={() => navigate(`/adminportal/addproducts`)}>ADD PRODUCTS<DoubleArrowIcon></DoubleArrowIcon> </button>}

        </div>

        <div className="category-grid">

          <div className="category-card" onClick={() => pathBool ?
            navigate(`/adminportal/products`) :
            navigate(`/userportal/products`)}>
            <img src={all} alt="mens" />
            <h2>All</h2>
          </div>

          <div className="category-card" onClick={() => pathBool ?
            navigate(`/adminportal/products/mens`) :
            navigate(`/userportal/products/mens`)}>
            <img src={mens} alt="mens" />
            <h2>Men's Clothing</h2>
          </div>

          <div className="category-card" onClick={() => pathBool ?
            navigate(`/adminportal/products/womens`) :
            navigate(`/userportal/products/womens`)}>
            <img src={womens} alt="mens" />
            <h2>Women's Clothing</h2>
          </div>

          <div className="category-card" onClick={() => pathBool ?
            navigate(`/adminportal/products/electronics`) :
            navigate(`/userportal/products/electronics`)}>
            <img src={electronics} alt="mens" />
            <h2>Electronics</h2>
          </div>

          <div className="category-card" onClick={() => pathBool ?
            navigate(`/adminportal/products/jewelery`) :
            navigate(`/userportal/products/jewelery`)}>
            <img src={jewelery} alt="mens" />
            <h2>Jewelery</h2>
          </div>

          <div className="category-card" onClick={() => pathBool ?
            navigate(`/adminportal/products/beautyproducts`) :
            navigate(`/userportal/products/beautyproducts`)}>
            <img src={beauty} alt="mens" />
            <h2>Beauty Products</h2>
          </div>

        </div>

        <div className="container">
          {filteredProducts.map((elem, index) => {
            let { title, image, category, id } = elem
            return (
              <div className="card" key={index}>
                <div className="cat">{category}
                  <button><FavoriteBorderIcon /></button>
                </div>
                <div className="image"><img src={image} alt="NO image" /></div>
                <div className="title">{title}
                  <div className='btns'>
                    <button className='view' onClick={() => handleViewMore(id)}>Veiw More<DoubleArrowIcon /></button>

                  </div>
                </div>


              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Products
