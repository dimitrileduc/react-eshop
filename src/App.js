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

import {useAuth0} from "@auth0/auth0-react";

import "./App.css";

import createUser from "./components/utils/axiosRequest/createUser";

export default function App() {
    // Setting test products objects
    const {user, isAuthenticated, isLoading} = useAuth0();
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [changeQuantityIsFromBasket, setChangeQuantityIsFromBasket] =
        useState(false);
    const [basket, setBasket] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("products");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    useEffect(() => {
        if (isLoading) {
            console.log("...loading....");
        } else {
            if (isAuthenticated) {
                console.log(user);
                createUser(user);
            }
        }
    }, [user]);

    // update localStorage value when basket Items changed
    useEffect(() => {
        // setBasket(JSON.parse(window.localStorage.getItem("products")));
        console.log("new Basket" + JSON.stringify(basket));
        window.localStorage.setItem("products", JSON.stringify(basket));
    }, [basket]);

    console.log(basket);

    function removeItemFromBasket() {
        window.localStorage.clear();
    }

    const [productsItems, setProductsItems] = useState([
        {
            title: "The Empress of India",
            category: "Darjeeling tea",
            description:
                "Our signature Darjeeling tea, The Empress of India is named after Queen Victoria for whom the Victoria Memorial in Calcutta was built. We acquired this tea straight from one of the best tea gardens in the world, located at the foothills of the Himalayas. With a warm muscatel aroma, this tea is the perfect complement to any occasion with subtle notes of grape and berries in the first sip.",
            label: "New",
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
            stock: 12,
            imageName: "delhi_sultanate",
            review: 5,
            price: 12,
        },
        {
            title: "Hama Sakura  Teapot",
            category: "Accessoiries",
            description:
                "Iron teapots are handmade, forged by iron artisans, and following strict steps to ensure their quality. Therefore, each Tetsubin is unique and unrepeatable, giving a unique value to such a precious object. Perfect for a tea tasting due to its size.  ",
            label: "",
            stock: 8,
            imageName: "hama_sakura_teapot",
            review: 5,
            price: 3,
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
        {
            title: "The Jasmine Pearl",
            category: "Flavoured tea",
            description:
                " The Jasmine Pearl is a rare blend of high-grade Chinese green tea and the rarest, organic Jasmine. The 'pearls' of the jasmine are blended to give a subtle calming tone to the tea with a hint of sweetness. Perfect to calm nerves and settle yourself before going to bed.  ",
            label: "",
            stock: 19,
            imageName: "the_jasmine_pearl",
            review: 2.8,
            price: 9,
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
        {
            title: "Tea Valeriana",
            category: "Flavoured tea",
            description:
                " Infusion of fruits, flowers and plants that help reduce stress. An ideal infusion to relax the body and mind, with a delicate aroma and enveloping taste. ",
            label: "",
            stock: 3,
            imageName: "tea_valeriana",
            review: 4.8,
            price: 12,
        },
        {
            title: "White Snow Tea",
            category: "Darjeeling tea",
            description:
                " Sweet and creamy taste that evokes the classic caramelised baked apple tart. Ideal to enjoy in a festive and cosy winter. Its delicate and sweet aroma is an invitation to the well-being that cradles the magnificent properties of White Tea. ",
            label: "",
            stock: 6,
            imageName: "white_snow_tea",
            review: 4.8,
            price: 12,
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
    //console.log(isMobile);

    // Test purpose
    //console.log("render count ");

    // return jsx
    if (!isLoading) {
        return (
            <>
                <Router>
                    <ScrollToTop>
                        <Routes>
                            <Route
                                path="/"
                                element={{
                                    ...(isMobile ? (
                                        <LayoutMobile />
                                    ) : (
                                        <Layout
                                            isCartVisible={isCartVisible}
                                            setIsCartVisible={setIsCartVisible}
                                            setBasket={setBasket}
                                            basket={basket}
                                            changeQuantityIsFromBasket={
                                                changeQuantityIsFromBasket
                                            }
                                            setChangeQuantityIsFromBasket={
                                                setChangeQuantityIsFromBasket
                                            }
                                        />
                                    )),
                                }}>
                                <Route index element={<Home />} />
                                <Route path="products" element={<Products />}>
                                    <Route
                                        index
                                        element={
                                            <ProductsList
                                                productsItems={productsItems}
                                                setProductsItems={
                                                    setProductsItems
                                                }
                                            />
                                        }
                                    />
                                    <Route
                                        path=":slug"
                                        element={
                                            <Product
                                                productsItems={productsItems}
                                                setBasket={setBasket}
                                                basket={basket}
                                                setIsCartVisible={
                                                    setIsCartVisible
                                                }
                                                setChangeQuantityIsFromBasket={
                                                    setChangeQuantityIsFromBasket
                                                }
                                            />
                                        }
                                    />
                                </Route>
                                <Route path="contacts" element={<Contacts />} />
                                <Route
                                    path="myaccount"
                                    element={<Account userCurrent={user} />}
                                />
                            </Route>
                        </Routes>
                    </ScrollToTop>
                </Router>
            </>
        );
    }
}
