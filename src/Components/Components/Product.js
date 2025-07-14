import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/Reducers/Products";



const Product = (props) => {
    const addDispatch = useDispatch()
    const removeDispatch = useDispatch()
    

    const handleAddClick = () => {
        addDispatch(add(props.id))
        toast.success("Item Added",{
            style:  {
                boxShadow: "none",
                borderRadius: "20px"
            }
        })
    }

    const handleRemoveClick = () => {
        removeDispatch(remove(props.id))
    }

    return (
        <div className={`product product-id-${props.id} ${props.category}`}>
            <img className="product-image"  src={props.image} alt={`item ${props.id}`} />
            <h3 className="product-title">{props.title.slice(0,12)}...</h3>
            <p className="product-description">{props.description.slice(0,90)}...</p>
            <hr />
            <p className="product-price">${props.price}</p>
            <hr />
            <div className="product-button-con">
                <Link to={`/product/${props.id}`} className="product-buy-btn">Buy Now</Link>
                {
                    props.added?
                    <Link onClick={handleRemoveClick} className="product-cart-btn product-remove-btn">Remove From Cart</Link>
                    : <Link onClick={handleAddClick}
                        className="product-cart-btn">Add To Cart</Link>
                }
                <Toaster />
            </div>
        </div>
    )
}

export default React.memo(Product);