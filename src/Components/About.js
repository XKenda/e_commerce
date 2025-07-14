import React from "react";
import img1 from "../Images/men's clothing.jpg"
import img2 from "../Images/women's clothing.jpg"
import img3 from "../Images/electronics.jpg"
import img4 from "../Images/jewellary.jpg"


const About = () => {

    return (
        <>
            <div className="about-us-con">
                <h2 className="about-us-title">About US</h2>
                <hr />
                <p className="about-us-desc">Welcome in our online store, we provide varaity of products start from men's and women's cloths to electronics , jewelery and more 
                    you can buy without seeing the price duo to installment service, we will follow the quallity and user experience
                    to improve our product service, you shouldn't worry about your location we will come to you even in in the seventh earth and seventh sky,
                    just order you product and chose the suitably payment method and we will care about the rest.
                </p>
            </div>
            <div className="our-product-con">
                <h2 className="our-product-title">Our Product</h2>
                <div className="our-product-item-con">
                    <div className="our-product-item">
                        <img src={img1} alt="men's clothing" />
                        <p className="item-title">men's clothing</p>
                    </div>
                    <div className="our-product-item">
                        <img src={img2} alt="women's clothing" />
                        <p className="item-title">women's clothing</p>
                    </div>
                    <div className="our-product-item">
                        <img src={img3} alt="elecronics" />
                        <p className="item-title">elecronics</p>
                    </div>
                    <div className="our-product-item">
                        <img src={img4} alt="jewellary" />
                        <p className="item-title">jewellary</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(About);