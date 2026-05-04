import React, { useState, useEffect } from "react"
import { auth } from '../firebase'
import { Button } from "antd"
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import { sendSignInLinkToEmail } from "firebase/auth"

const RegisterComplete = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useState(() => { }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(process.env.REACT_APP_REGISTER_REDIRECT_URL)
        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true
        }
    }
    const registerForm = () => (
        <form onSubmit={handleSubmit}>
            <input type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus />

            <Button type="primary" htmlType="submit">Primary Button</Button>
        </form>
    )

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    <ToastContainer />
                    {registerForm()}
                </div>
            </div>
        </div>
    )
}

export default RegisterComplete