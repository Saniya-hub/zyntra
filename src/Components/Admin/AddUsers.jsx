import { Password } from '@mui/icons-material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddUsers = () => {

    let navigate = useNavigate()

    let [formData, setFormDat] = useState({
        username : "",
        contact : "",
        email : "",
        password : "",
        place : "",
        dob : ""

    })

    let handleInput = (e) => {
        let key = e.target.name
        let val = e.target.value
        console.log(key , val)

        setFormDat({...formData, 
            [key] : val
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post(`http://localhost:4000/users`, formData)
        toast.success(`Registered succefully`)
        window.location.reload()
    }

    return (
        <>
            <div className="add-users">
                <h1>Users Registration Form</h1>
                <div className="formbox">
                    <form onSubmit={handleSubmit}>
                        <div className="input-boxes">
                            <input type="text" placeholder='Enter User Name' name='username' value={formData.username} onChange={handleInput} required/>
                            <input type="tel" pattern='[6-9]{1}[0-9]{9}' placeholder='Enter Contact Number' name='contact' value={formData.contact} onChange={handleInput} required/>
                            <input type="email" placeholder='Enter Email Address' name='email' value={formData.email} onChange={handleInput } required/>
                            <input type="password" placeholder='Enter Password' name='password' value={formData.password} onChange={handleInput} required/>
                            <input type="text" placeholder='Enter Place' name='place' value={formData.place} onChange={handleInput} required/>
                            <input type="date"  name='dob' value={formData.dob} onChange={handleInput} required />

                            
                        </div>
                        <button>Register</button>
                        <button type='button' onClick={() => navigate("/adminportal/userdetails")}>Display Users</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddUsers
