import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ViewMore = () => {
    let params = useParams()   //useparam() is a hook present in react-router Returns an object of key/value-pairs
    let productsid = params.id

    let [oneProduct, setOneProduct] = useState({})
    let navigate = useNavigate()

    // to hide the delete button in adminportal and show the add to cart in userportal
    let location = useLocation()
    let pathBool = location.pathname.startsWith(`/adminportal/viewmore`)

    let fetchApi = async () => {
        let apidata = await axios.get(`https://zyntra-backend-6.onrender.com/products/${productsid}`)
        setOneProduct(apidata.data)
    }
    useEffect(() => {
        fetchApi()
    }, [])
    // console.log(oneProduct)
    let { id, title, price, description, category, image, rating } = oneProduct

    let handleDelete = () => {
        let bool = window.confirm(`do you want to delete this product...?`)
        if (bool) {
            axios.delete(`https://zyntra-backend-6.onrender.com/products/${id}`)
            toast.success(`product is deleted`)
            navigate(`/adminportal/products`)
        }
        else {
            alert(`product is not deleted`)
        }

    }

    let addtoCart = () => {
        let bool = window.confirm(`Do you want to add this product to cart items`)
        if (bool) {
            axios.post(`https://zyntra-backend-6.onrender.com/cartitems`, oneProduct)
            
            toast.success(`product is added`)
            navigate(`/userportal/cartitems`)
        }
        else {
            toast.info('Product is not added')

        }
    }
    return (
        <div className='viewmore'>
            <div className="card">
                {/* <div>{id}</div> */}
                <div className="main">
                    <div className='cat'>{category}</div>
                    <img src={image} alt="" />
                    <div className='title'>{title}</div>
                </div>
                <div className="about">

                    <div className='price'>Price : {Math.floor(price * 95.72)}&nbsp;Rs</div>
                    <div className='disc'>Description : {description}</div>
                    <div className='btn'>
                        {
                            pathBool ?
                                <button onClick={handleDelete}><DeleteIcon />
                                    delete
                                </button> :
                                <button onClick={addtoCart}>add tocart</button>

                        }

                    </div>
                    <div className="rating">
                        <div className='rate' >{rating?.rate}⭐</div>
                        <div className='count ' >({rating?.count})</div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default ViewMore

