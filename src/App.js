import React, { createContext, useEffect, useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Footer from "./Components/Footer";
import ProductPage from "./Components/Components/ProductPage";
import axios from "axios";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from "./redux/Reducers/Products";



export const TheProd = createContext()
export const ItemsInCart = createContext()


const App = () => {
  const [allProd, setAllProd] = useState(useSelector(state=> state.AllProducts.products));
  const SetProductDispatch = useDispatch()

  useEffect(() => {
    if(allProd.length === 0){
      axios.get("https://fakestoreapi.com/products/")
        .then((response) => {
          console.log("axios worked")
          const mappedProd = response.data.map(p => ({...p, added : false, quantity: 1}))
          setAllProd(mappedProd)
          SetProductDispatch(setProducts(mappedProd))
      })
    }

  }, []);



  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/e_commerce" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage/>} />
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;