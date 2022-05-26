import React, {useState, useEffect} from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Layout from "./components/Layout";
import LayoutMobile from "./components/Layout/LayoutMobile";

import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ProductsList from "./components/UI/organisms/ProductsList";
import Contacts from "./components/pages/Contacts";
import Product from "./components/UI/molecules/Product";

import ScrollToTop from "./components/utils/ScrollToTop";

import "./App.css";

export default function App() {
    // Setting test products objects
    const [productsItems, setProductsItems] = useState({
        1: {
            title: "First product",
            description: "Lorem ipsum dolor sit amet, consectetur adip.",
        },
        2: {
            title: "Second product",
            description: "ipsum dolor sit amet,",
        },
    });

    // State to detect resize window
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 680;
    console.log(isMobile);

    //

    // Test purpose
    console.log("render count ");

    // return jsx
    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route
                        path="/"
                        element={{
                            ...(isMobile ? <LayoutMobile /> : <Layout />),
                        }}>
                        <Route index element={<Home />} />
                        <Route path="products" element={<Products />}>
                            <Route
                                index
                                element={
                                    <ProductsList
                                        productsItems={productsItems}
                                    />
                                }
                            />
                            <Route
                                path=":slug"
                                element={
                                    <Product productsItems={productsItems} />
                                }
                            />
                        </Route>
                        <Route path="contacts" element={<Contacts />} />
                    </Route>
                </Routes>
            </ScrollToTop>
        </Router>
    );
}
