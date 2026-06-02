import React, { useState } from 'react'
import AdminLogin from './Admin/AdminLogin'
import UsersLogin from './Users/UsersLogin'
import vid1 from '../assets/images/vid2.mp4'
import login from '../assets/images/login.png'



const Landingpage = () => {

    let [bool, setbool] = useState(true)
    let handlebool = () => {
        setbool(!bool)
    }
    return (
        <>
            <div className="landing-page">

                <img src={login} alt="" />

                <div className="overlay"></div>

                {/* <h1>Welcome to zyntra</h1> */}


                <div className="container">

                    <div className="btnbox">

                        <button onClick={handlebool} className={bool ? 'lft' : 'ryt'}>
                            {bool ? " Admin Login" : "User Login"}
                        </button>
                    </div>

                    <div className="formbox">
                        {bool ? <AdminLogin /> : <UsersLogin />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landingpage
