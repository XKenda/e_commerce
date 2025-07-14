import React from "react";
import { NavLink } from "react-router-dom";
import { IoPersonAddSharp, IoLogInOutline, IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {

    const activebtn = ({ isActive }) => {
        return {
            color: isActive ? "#31231E" : "Black",
            opacity: isActive ? "1" : "0.4",
        }
    }
    const num = useSelector(state => state.AllProducts.numOfItemsCart)
    const username = useSelector(state => state.Auth.username)
    const loggedIn = useSelector(state => state.Auth.loggedIn)
    console.log(username)

    return (
        <div className="navbar  navbar-expand-lg">
            <div className="header-con d-flex flex-row container-fluid">
                <p className="header-title">E-commerce</p>
                <button style={{"max-width": "75px"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-collapse" aria-controls="navbarcollapsediv" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarcollapsediv" className="collapse navbar-collapse header-collapse">
                    <nav className="navbar-nav header-nav">
                        <NavLink style={activebtn} to={"/e_commerce"}>Home</NavLink>
                        <NavLink style={activebtn} to={"/e_commerce"}  >Products</NavLink>
                        <NavLink style={activebtn} to={"/about"}>About</NavLink>
                        <NavLink style={activebtn} to={"/contact"}>Contact</NavLink>
                    </nav>
                    <div className="header-btns-con">
                        {

                            loggedIn ? <p className="Welcome-name">Hello, {(username.split(" "))[0]}</p>
                                : <>
                                    <NavLink className="header-btn login-btn" to={"/login"}><IoLogInOutline />LogIn</NavLink>
                                    <NavLink className="header-btn register-btn" to={"/register"}><IoPersonAddSharp />Register</NavLink>
                                </>
                        }

                        <NavLink className="header-btn cart-btn" to={"/cart"}><IoCart />Cart( {num} )</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Header);