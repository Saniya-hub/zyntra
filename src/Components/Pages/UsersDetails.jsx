import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UsersDetails = () => {

    let [userDetails, setUserDetails] = useState([])

    let fetchapi = async () => {
        let respdata = await axios.get(`https://zyntra-backend-6.onrender.com/users`)
        setUserDetails(respdata.data)

    }
    useEffect(() => {
        fetchapi()
    }, [])
    console.log(userDetails)

    return (
        <>
            <div className="display-users">


                <>
                    <div className="users-table">
                        <h1>User Details</h1>
                        <table border={1}>
                            <thead className='head'>
                                <tr>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Place</th>
                                    <th>DOB</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody >
                                {userDetails.map((elem) => {
                                    let { username, contact, place ,dob,email,password} = elem
                                    return (
                                        <>
                                            <tr className='body'>
                                                <td>{username}</td>
                                                <td>{contact}</td>
                                                <td>{place}</td>
                                                <td>{dob}</td>
                                                <td>{email}</td>
                                                <td>{password}</td>

                                            </tr>
                                        </>

                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </>


            </div>
        </>
    )
}

export default UsersDetails
