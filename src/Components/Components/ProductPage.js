import React, { useContext } from "react";
import { TheProd } from "../../App";
import { useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/Reducers/Products";

const ProductPage = (props) => {
    const { id } = useParams();
    const products = useSelector(state=> state.AllProducts.products)
    const product = products.find(p => String(p.id) === id);


    const addDispatch = useDispatch()
    const removeDispatch = useDispatch()

    const handleAddBtn = () => {
        
        addDispatch(add(id))
    }

    const handleremoveBtn = () => {
        removeDispatch(remove(id))
    }



    if (!product) return <div>Loading...</div>;

    return (
        <>
            <div className="product-info-con">
                <img src={product.image} alt="product-pic" />
                <div className="product-child-con">
                    <p className="product-category">{product.category}</p>
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-rating">{product.rating.rate}<FaStar /></p>
                    <p className="product-price">${product.price}</p>
                    <p className="product-desc">{product.description}</p>
                    <div className="product-btns-con">
                        {
                            product.added ?
                                <Link onClick={handleremoveBtn} className="product-remove-btn">Remove From Cart</Link>
                                : <Link onClick={handleAddBtn} className="product-add-cart-btn">Add To Cart</Link>
                        }
                        <Link to={"/cart"} className="product-go-cart-btn">Go To Cart</Link>
                    </div>

                </div>
            </div>
            <div className="also-like-con">
                <p className="also-like-title">You May Also Like</p>
                <Marquee className="also-like-items-con">
                    {products.map((pro) => (
                        <div className="also-like-item">
                            <img src={pro.image} alt="item-pic" />
                            <p className="item-title">{pro.title.slice(0, 15)}</p>
                            <div className="item-btns">
                                <Link to={`/product/${pro.id}`} className="product-buy-btn">Buy Now</Link>
                                <Link to={"/cart"} className="product-go-cart-btn">Go To Cart</Link>
                            </div>

                        </div>
                    ))}

                </Marquee>
            </div>
        </>
    )
}

export default React.memo(ProductPage);