import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLoggidIn } from "../redux/Reducers/Auth";

const Login = () => {

    const Theusername = useSelector(state=> state.Auth.username)
    const Thepassword = useSelector(state=> state.Auth.password)
    const Theemail = useSelector(state=> state.Auth.email)
    const loggedIn = useSelector(state=> state.Auth.loggedIn)

    const loginDispatch = useDispatch()

    const login = ()=>{
        const password = document.querySelector("#pwd").value
        const email = document.querySelector("#email").value
        console.log("passowrd" + password)
        console.log("email" + email)

        if(loggedIn){
            alert("you already logged in")
        } else {
            try {
                if(email == Theemail && password == Thepassword){
                    loginDispatch(setLoggidIn(true))
                    alert(`Welcome back ${Theusername}`)
                } else if (Theusername) {
                    alert("username or Password is incorrect")
                } else {
                    alert("You must Sign up First")
                }
                
            } catch {
                alert("error while log in, please try again later")
            }
        }
    }

    return (
        <div className="login-con">
            <h2 className="login-title">LogIn</h2>
            <hr />
            <form className="form-con" >
                <div className="form-group email-group">
                    <label className="email-label" htmlFor="email" >Email Address</label>
                    <input id="email" type="email" placeholder="name@example.com" />
                </div>
                <div className="form-group pwd-group">
                    <label className="pwd-label" htmlFor="pwd" >Password</label>
                    <input id="pwd" type="password" placeholder="Password" />
                </div>
                <p className="nav-to-reg">New Here? <Link to={"/register"}>Register</Link></p>
                <input onClick={login} type="submit" value="Login" className="login-submit-btn" />
            </form>
        </div>
    )
}

export default React.memo(Login);