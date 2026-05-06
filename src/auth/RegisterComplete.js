import React, { useState, useEffect } from "react"
import { auth } from '../firebase'
import { Button } from "antd"
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import { sendSignInLinkToEmail } from "firebase/auth"

const RegisterComplete = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useState(() => { }, [console.log(window.localStorage.getItem("emailForRegistration"))])

    const handleSubmit = async (e) => {
        e.preventDefault()

    }
    const completeRegisterForm = () => (
        <form onSubmit={handleSubmit}>
            <input type="email"
                className="form-control"
                value={email}
                disabled />

                <input type="passowrd"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled />

            <Button type="primary" htmlType="submit">Complete Registration</Button>
        </form>
    )

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register Complete</h4>
                    {completeRegisterForm()}
                </div>
            </div>
        </div>
    )
}

export default RegisterComplete

