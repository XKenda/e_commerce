import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./Components/CartItem";
import { TheProd } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setTheNum, setTheTotal } from "../redux/Reducers/Products";


const Cart = () => {

    const [num, setNum] = useState(0)
    const [total, setTotal] = useState(0)
    const products = useSelector(state=> state.AllProducts.products)
    const [ProductsInCart, setProductsInCart] = useState([])
    const numOfProduct = useDispatch()

    useEffect(() => {
        const InCart = products
        .filter(p => p.added === true)
        
        setProductsInCart(InCart)
    }, [products])





    useEffect(() => {
        let updated = 0
        let salary = 0
        ProductsInCart.map((p) => {
            updated += p.quantity
            salary += p.quantity * p.price
        })
        setNum(updated)
        setTotal(Math.ceil(salary))
        setTheTotal(total)
        setTheNum(updated)

        numOfProduct(setTheNum(updated))
    }, [ProductsInCart])



    return (
        <>
            <div className="cart-con">
                <div className="cart-child-con">
                    <h2 className="cart-items-tite">Item List</h2>
                    <div id="cart-items-con" className="cart-items-con">
                        {
                            ProductsInCart.length === 0?
                            <p className="cart-is-impty">Cart Is Empty</p>
                            : ProductsInCart.map((p) => (
                                <CartItem
                                    id={p.id}
                                    image={p.image}
                                    price={p.price}
                                    title={p.title}
                                    quantity={p.quantity}
                                />
                            ))
                        }

                    </div>
                </div>
                <div className="order-summary-con">
                    <h2 className="summary-title">Order summary</h2>
                    <div className="summary-info-con">
                        <p className="products-slary">products ({num}) <span>${total}</span></p>
                        <p className="products-shipping">Shipping <span>${total === 0? "0": "30"}</span></p>
                        <p className="products-total-amount">Total Amount <span>${total === 0? "0" : total + 30}</span></p>
                        <Link className="chech-out-btn">Go to checkout</Link>
                    </div>

                </div>
            </div>
        </>
    )
}


export default React.memo(Cart);