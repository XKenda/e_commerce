import React, { useContext, useEffect, useState } from "react";
import Product from "./Components/Product";
import { useSelector } from "react-redux";



const Products = (props) => {
    const [cate, setCate] = useState("all")
    const allProd = useSelector(state=> state.AllProducts.products)


    useEffect(() => {

        const getCate = (e) => {
            setCate(e.target.textContent.toLowerCase())
        };


        const btns = document.querySelectorAll(".products-categories-btn")
        btns.forEach((cateBtn) => {
            cateBtn.addEventListener("click", getCate)
        })

        return () => {
            btns.forEach((cateBtn) => {
                cateBtn.removeEventListener("click", getCate);
            });
        }
    }, [])

    const filteredProducts = cate === "all"
        ? allProd
        : allProd.filter(prod => prod.category.toLowerCase() === cate);



    return (
        <>
        <div id="products" className="products-sec-con">
            <h2 className="products-sec-title">Latest Products</h2>
            <hr />
            <div className="products-categories-con">
                <button id="All" className="products-categories-btn all-btn">All</button>
                <button id="Men" className="products-categories-btn men-btn">Men's clothing</button>
                <button id="Women" className="products-categories-btn women-btn">Women's clothing</button>
                <button id="Jewelery" className="products-categories-btn jewelery-btn">Jewelery</button>
                <button id="Electronics" className="products-categories-btn women-btn">Electronics</button>
            </div>
            <div  className="products-con">
                {
                    filteredProducts.map((prod) => (
                        <Product
                            key={prod.id}
                            id={prod.id}
                            title={prod.title}
                            price={prod.price}
                            description={prod.description}
                            category={prod.category}
                            image={prod.image}
                            rate={prod.rating.rate}
                            onClickBtn={props.OnClickBtn}
                            onRemoveBtn={props.onRemoveBtn}
                            added={prod.added}
                        />
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default React.memo(Products);