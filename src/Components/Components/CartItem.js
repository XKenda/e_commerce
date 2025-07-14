import React from "react";
import { Link } from "react-router-dom";
import { decquantity, incquantity } from "../../redux/Reducers/Products";
import { useDispatch } from "react-redux";


const CartItem = (props) => {
    const incDispatch = useDispatch()
    const decDispatch = useDispatch()

    const handleInc = () => {
        incDispatch(incquantity(props.id))
    }

    const handledec = () => {
        if(props.quantity > 1){
            decDispatch(decquantity(props.id))
        }
    }

    return (
        <div className="cart-item">
            <Link to={`/product/${props.id}`}><img src={props.image} alt="cart item"/></Link>
            
            <p className="item-title">{props.title.length > 20? `${props.title.slice(0,20)}...`: props.title}</p>
            <div className="item-btns-con">
                <div className="item-num">
                    <button onClick={handledec} id="item-dec">-</button>
                    <p>{props.quantity}</p>
                    <button onClick={handleInc} id="item-inc">+</button>
                </div>
                <p className="item-total-price">{props.quantity} X ${props.price} = <span>{Math.ceil(props.quantity * props.price)}</span></p>
            </div>
        </div>
    )
}

export default React.memo(CartItem);