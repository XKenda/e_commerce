import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setInfo } from "../redux/Reducers/Auth";

const Register = () => {
    const RegisterDispatch = useDispatch()

    const RegisterBtnClcik = ()=>{
        const username = document.querySelector("#name").value
        const password = document.querySelector("#pwd").value
        const email = document.querySelector("#email").value
        try{
            RegisterDispatch(setInfo({
                username,
                password,
                email
            }))
            alert("Account Created Succesffuly")
        } catch {
            alert("Cann't create the account righ now")
        }
        
    }

    return (
        <div className="reg-con">
            <h2 className="reg-title">Register</h2>
            <hr />

            <form className="form-con" >
                <div className="form-group name-group">
                    <label className="name-label" htmlFor="name" >Full Name</label>
                    <input id="name" type="text" placeholder="Enter Full Name" />
                </div>
                <div className="form-group email-group">
                    <label className="email-label" htmlFor="email" >Email Address</label>
                    <input id="email" type="email" placeholder="name@example.com" />
                </div>
                <div className="form-group pwd-group">
                    <label className="pwd-label" htmlFor="pwd" >Password</label>
                    <input id="pwd" type="password" placeholder="Password" />
                </div>
                <p className="nav-to-reg">Alredy Have Account <Link to={"/login"}>Login</Link></p>
                <input onClick={RegisterBtnClcik} type="submit" value="Register" className="reg-submit-btn" />
            </form>
        </div>
    )
}

export default React.memo(Register);