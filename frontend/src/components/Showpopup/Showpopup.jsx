import React, { useState } from 'react'
import './Showpopup.css'
import { Form } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Showpopup = ({ setShowLogin }) => {

    const [currState, setCurrstate] = useState("Login")
    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type="text" placeholder="Enter Name" required />}
                    <input type="text" placeholder="Enter email" required />
                    <input type="text/" placeholder="Enter Password" required />

                </div>
                <button>{currState === "Sign Up" ? "create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login" ?
                    <p>Create a new account? <span onClick={() => setCurrstate("Sign Up")}>click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrstate("Login")}>Login here</span></p>}
            </form>
        </div >
    )
}

export default Showpopup