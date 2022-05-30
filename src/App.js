import React, {useState, useEffect} from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Layout from "./components/Layout";
import LayoutMobile from "./components/Layout/LayoutMobile";

import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ProductsList from "./components/UI/organisms/ProductsList";
import Contacts from "./components/pages/Contacts";
import Product from "./components/UI/molecules/Product";
import Account from "./components/pages/Account";

import ScrollToTop from "./components/utils/ScrollToTop";

import "./App.css";

export default function App() {
    // Setting test products objects
    const [productsItems, setProductsItems] = useState([
        {
            title: "The Empress of India",
            category: "Darjeeling tea",
            description:
                "Our signature Darjeeling tea, The Empress of India is named after Queen Victoria for whom the Victoria Memorial in Calcutta was built. We acquired this tea straight from one of the best tea gardens in the world, located at the foothills of the Himalayas. With a warm muscatel aroma, this tea is the perfect complement to any occasion with subtle notes of grape and berries in the first sip.",
            label: "",
            stock: 12,
            imageName: "empress_india",
            review: 4.1,
            price: 18,
        },
        {
            title: "The Delhi Sultanate",
            category: "Chai tea",
            description:
                "The Delhi Sultanate is a rich, saffron-infused masala chai that glows with a ruby-red hue when brewed. Named after the Mughal Court of Delhi and infused with the 'King of Spices' that is Saffron, this tea is truly royalty in a cup. Rich in the aftertaste and incredibly sought after, this tea has a natural, delicate sweetness that makes it a perfect masala chai for your evening tea party.",
            label: "New",
            stock: 2,
            imageName: "delhi_sultanate",
            review: 5,
            price: 12,
        },
        {
            title: "The Ambassadore",
            category: "Chai tea",
            description:
                " The Ambassador is a spiced masala chai with roots in the finest Assam tea. A blend of the most exquisite, organic spices (a secret recipe), this tea brings the spiced sweetness of Madagascan Cinnamon to the shores of Calcuttan Chai. The tea has a succulent aroma of cinnamon among other spices. ",
            label: "Best Seller",
            stock: 1,
            imageName: "the_ambassadore",
            review: 4.8,
            price: 17,
        },
    ]);

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

    // Test purpose
    console.log("render count ");

    // return jsx
    return (
        <>
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
                                        <Product
                                            productsItems={productsItems}
                                        />
                                    }
                                />
                            </Route>
                            <Route path="contacts" element={<Contacts />} />
                            <Route path="myaccount" element={<Account />} />
                        </Route>
                    </Routes>
                </ScrollToTop>
            </Router>
        </>
    );
}
