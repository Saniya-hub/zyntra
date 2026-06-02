import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const AdminLogin = () => {

    let [formdata, setFormdata] = useState({ email: "", password: "" })
    let [error, setError] = useState("")

    let [bool , setbool] = useState(true)

    let handlebool = () => {
        setbool(!bool)
    }

    let hadleInput = (e) => {
        //todo : collecting input values wuth name and value pair
        let key = e.target.name
        let val = e.target.value
        // console.log(key , val)

        //todo : upadting input values for formdata object
        setFormdata({ ...formdata, [key]: val })
        // console.log(formdata)
    }

    //usenavigate is a hook which is present in react-router-dom , It is used to navigate to next component & it returns navigateFunction , (In navigateFunction it has only one parameter thet parameter is accepting the path of the component)
    let navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formdata)
        let { email, password } = formdata
        //todo : destructuring of formdata which is collected the values from input field


        //todo : create credential object to store email and password
        let credentials = {
            admin_mail: "admin@gmail.com",
            admin_pswd: "Admin@123"
        }
        //todo : destructuring the credentials object
        let { admin_mail, admin_pswd } = credentials

        let errDesign = {
            color: 'white',
            textAlign: "center"
        }
        //todo : check inputvalues and credentials are matching ...?4
        if (email === admin_mail) {
            if (password === admin_pswd) {
                setError('')
                navigate('/adminportal')
                toast.success('Login Success')
                // alert('Login success')
                
            }
            else {
                setError(<h4 style={errDesign}>Password is invalid</h4>)
                toast.error('Password is invalid')
            }
        }
        else {
            setError(<h4 style={errDesign}>Email is invalifd</h4>)
            toast.error('Password is invalid')
        }
    }

    return (
        <>
            <div className="admin-login">
                <h2>Admin Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Enter Email Address' onChange={hadleInput} name='email' value={formdata.email} />
                    <div className="pass">
                        <input type={bool ? "password" : "text" } placeholder='Enter Password  ' onChange={hadleInput} name='password' value={formdata.password}  />
                        <span onClick={handlebool}>
                            {
                                bool ? <VisibilityIcon/> : <VisibilityOffIcon/>
                            }
                        </span>
                    </div>

                    <div>{error}</div>

                    <button >Admin Login</button>
                </form>
            </div>
        </>
    );
};

export default AdminLogin
