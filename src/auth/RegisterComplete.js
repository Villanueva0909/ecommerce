import React, { useState, useEffect } from "react"
import { auth } from '../firebase'
import { Button } from "antd"
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { signInWithEmailLink } from "firebase/auth"

const RegisterComplete = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useState(() => {
        console.log(window.localStorage.getItem("emailForRegistration"))
        console.log(window.location.href)

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        //validation
        if (!email || !password) {
            toast.error("Email and password is required")
        return
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long")
        return
        }

        try {
            const result = await signInWithEmailLink(auth, email, window.location.href)
            if (result.user.emailVerified) {
                //remove user email from local storage
                window.localStorage.removeItem('emailForRegistration')
                //get user id token
                let user = auth.currentUser
                await user.updatePassword(password)
                const idTokenResult = await user.getIdTokenResult
                //reduex store
                console.log('user', user, "IdTokenResult", idTokenResult)
                //redirect
                history.push('/')

            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)

        }

    }
    const completeRegisterForm = () => (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                className="form-control"
                value={email}
                disabled />
            <br />
            <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoFocus />

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

