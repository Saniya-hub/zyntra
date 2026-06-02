import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddProducts = () => {

    let navigate = useNavigate()
    let [formData, setFormData] = useState({
        title: "",
        price: undefined,
        description: "",
        category: "",
        image: "",
        rating: {
            rate: undefined,
            count: undefined
        }
    })

    let handleChange = (e) => {
        let { name, value } = e.target
        // For rating object
        if (name === "rate" || name === "count") {
            setFormData({
                ...formData,
                rating: {
                    ...formData.rating,
                    [name]: value
                }
            })
        }
        else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }

    // HANDLE SUBMIT

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:4000/products',formData)
            toast.success("Product Added Successfully")
            navigate("/adminportal/products")
            window.location.reload
            // console.log(formData)
        }
        catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className='add-products'>
                <h1>Add Products</h1>
                <div className="formbox">
                    <form onSubmit={handleSubmit}>
                        <div className="input-boxes">
                            <input type="text" placeholder='Enter Title Name' name='title' value={formData.title} onChange={handleChange} required/>
                            <input type="text" placeholder='Enter Price' name='price' value={formData.price} onChange={handleChange} required/>
                            <input type="text" placeholder='Enter Descripton' name='description' value={formData.description} onChange={handleChange} required/>

                            <select name="category" value={formData.category} onChange={handleChange} required>
                                <option value="">---Select Category---</option>
                                <option value="men's clothing">MENS CLOTHING</option>
                                <option value="women's clothing">WOMENS CLOTHING</option>
                                <option value="electronics">ELECTRONICS</option>
                                <option value="jewelery">JEWELERY</option>
                                <option value="beauty products">BEAUTY PRODUCTS</option>
                            </select>
                            <input type="text" placeholder='Enter image URL' name='image' value={formData.image} onChange={handleChange} required/>
                            <input type="text" placeholder='Enter rating' name='rate' value={formData.rating?.rate}  onChange={handleChange} required/>
                            <input type="text" placeholder='Enter count' name='count'  value={formData.rating?.count}onChange={handleChange} required/>

                        </div>
                        <button >ADD PRODUCTS</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProducts
