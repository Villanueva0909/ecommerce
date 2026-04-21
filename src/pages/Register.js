import React, { useState } from "react"
import { Button } from "antd"
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const Register = () => {
    const [email, setEmail] = useState()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const config = {
            url: "http://localhost:3000/register/complete",
            handleCodeInApp: true
        }
        await auth.sendSignInLinkToEmail(email, config)
        toast.success(
            `Email is sent to ${email}. Click the link to complete registration.`
        )
        // save user email in local storage
        window.localStorage.setItem('emailForRegistration', email)
    }
    const registerForm = () => (
        <form onSubmit={handleSubmit}>
            <input type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus />

            <Button type="primary">Primary Button</Button>
        </form>
    )

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    {registerForm()} / {email}
                </div>
            </div>
        </div>
    )
}

export default Register