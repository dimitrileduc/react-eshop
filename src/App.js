import React, {useState, useEffect} from "react";
import {Routes, Route, useLocation, useHistory} from "react-router-dom";

import {LocomotiveScrollProvider} from "react-locomotive-scroll";

import uuid from "react-uuid";
import {ParallaxProvider} from "react-scroll-parallax";
import {CustomCursor} from "react-svg-cursor";
import ScrollToTop from "./components/utils/ScrollToTop";
import useScrollDirection from "./components/utils/useScrollDirection";
import {AnimatePresence} from "framer-motion";

import {ContainerAnim, BlackBox, TextBox} from "./styles";

import Layout from "./components/Layout";
import LayoutMobile from "./components/Layout/LayoutMobile";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ProductsList from "./components/UI/organisms/ProductsList";
import Contacts from "./components/pages/Contacts";
import Product from "./components/UI/molecules/Product";
import Account from "./components/pages/Account";

import IntroTransition from "./components/transitions/IntroTransition";

import createUser from "./components/utils/axiosRequest/createUser";
import getAllProducts from "./components/utils/axiosRequest/getAllProducts";

import svg from "./components/assets/icons/arrow2.svg";

import TransitionExit from "./components/transitions/TransitionExit";

export default function App() {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);

    const location = useLocation();

    // state for products from dummy data
    const [productsItems, setProductsItems] = useState([]);
    const [windowDimension, setWindowDimension] = useState(null);
    const isMobile = windowDimension <= 680;
    const [orders, setOrders] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [isImageHeaderVisible, setIsImageHeaderVisible] = useState(true);

    const [isCustomCursor, setIsCustomCursor] = useState(false);

    const [isAnimationRunning, setIsAnimationRunning] = useState(true);
    const [cart, setCart] = useState([]);

    const scrollDirection = useScrollDirection();

    const [isLoading, setIsLoading] = useState(true);

    const [isLogged, setIsLogged] = useState(false);

    const [currentPageIsHome, setCurrentPageIsHome] = useState(false);

    const [pageName, setPageName] = useState("");

    const [delayMaquee, setDelayMaquee] = useState(4);

    // detect if page is Home .
    // hide cart when page change
    useEffect(() => {
        if (location.pathname === "/") {
            setCurrentPageIsHome(true);
            setPageName("home");
        } else {
            setPageName(location.pathname);
            setDelayMaquee(1);
        }
        setIsCartVisible(false);
    }, [location]);

    // Get products - axios
    useEffect(() => {
        getAllProducts(
            "http://localhost:3000/products",

            setIsLoading,
            setError,
            error,
            setProductsItems,
        );
    }, []);

    // detect resize window
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

    // change state animation running
    function changeStateAnimation() {
        setIsAnimationRunning(false);
    }

    // display intro animation when refresh page only if page is Home
    let intro;
    if (currentPageIsHome) {
        intro = <IntroTransition changeStateAnimation={changeStateAnimation} />;
    } else {
        intro = null;
    }

    // render only if !isLoading
    if (!isLoading) {
        return (
            <>
                <ContainerAnim $isAnimationRunning={isAnimationRunning}>
                    {intro}

                    <ScrollToTop>
                        <AnimatePresence exitBeforeEnter>
                            <Routes location={location} key={location.pathname}>
                                <Route
                                    path="/"
                                    element={{
                                        ...(isMobile ? (
                                            <LayoutMobile />
                                        ) : (
                                            <Layout
                                                isCartVisible={isCartVisible}
                                                setIsCartVisible={
                                                    setIsCartVisible
                                                }
                                                cart={cart}
                                                orders={orders}
                                                productsItems={productsItems}
                                                setOrders={setOrders}
                                                isImageHeaderVisible={
                                                    isImageHeaderVisible
                                                }
                                                scrollDirection={
                                                    scrollDirection
                                                }
                                            />
                                        )),
                                    }}>
                                    <Route
                                        index
                                        element={
                                            <Home
                                                setIsImageHeaderVisible={
                                                    setIsImageHeaderVisible
                                                }
                                                setIsCustomCursor={
                                                    setIsCustomCursor
                                                }
                                                scrollDirection={
                                                    scrollDirection
                                                }
                                                productsItems={productsItems}
                                                delayMaquee={delayMaquee}
                                                isMobile={isMobile}
                                            />
                                        }
                                    />
                                    <Route
                                        path="products"
                                        element={
                                            <Products pageName={pageName} />
                                        }>
                                        <Route
                                            index
                                            element={
                                                <ProductsList
                                                    productsItems={
                                                        productsItems
                                                    }
                                                    products={products}
                                                />
                                            }
                                        />
                                        <Route
                                            path=":slug"
                                            element={
                                                <Product
                                                    productsItems={
                                                        productsItems
                                                    }
                                                    setOrders={setOrders}
                                                    orders={orders}
                                                    cart={cart}
                                                    setIsCartVisible={
                                                        setIsCartVisible
                                                    }
                                                />
                                            }
                                        />
                                    </Route>
                                    <Route
                                        path="contacts"
                                        element={
                                            <Contacts pageName={pageName} />
                                        }
                                    />
                                    <Route
                                        path="myaccount"
                                        element={
                                            <Account
                                                isLogged={isLogged}
                                                setIsLogged={setIsLogged}
                                            />
                                        }
                                    />
                                </Route>
                            </Routes>
                        </AnimatePresence>
                    </ScrollToTop>

                    <CustomCursor
                        component={svg}
                        isDisabled={!isCustomCursor}
                        width={50}
                        height={50}
                        zIndex={420}
                    />
                </ContainerAnim>
            </>
        );
    }
}

/*  if no logged user - use localStorage
     /*
    const [basket, setBasket] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("products");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });
    

    useEffect(() => {
        // setBasket(JSON.parse(window.localStorage.getItem("products")));
        console.log("new Basket" + JSON.stringify(basket));
        window.localStorage.setItem("products", JSON.stringify(basket));
    }, [basket]);
    

    function removeItemFromBasket() {
        window.localStorage.clear();
    }
    */

// To use when strappi is used . Fetch all products from db
/*
    useEffect(() => {
        getAllProducts(setProducts);
    }, []);
    */

/*
    const handleEndScrollUp = useMemo(
        () => _.debounce(() => showHeader(), 1000),
        [],
    );

    const handleEndScroll = useMemo(
        () => _.debounce(() => hideHeader(), 1000),
        [],
    );
    */

/*

     // when user is logged w/ auth0 :
    // 1. Add user to Strapi DB,
    // 2. Set user in active user state
    // 3. setCart
    useEffect(() => {
        if (isLoading) {
            console.log("...loading....");
        } else {
            if (isAuthenticated) {
                console.log(user);
                createUser(user, activeUser, setActiveUser, setCart);
            }
        }
    }, [user]);

    // get list of Products
    useEffect(() => {
        getAllProducts(setProducts);
    }, []);


    */

/*

    const [activeUser, setActiveUser] = useState();
    
    const {user, isAuthenticated, isLoading} = useAuth0()

    */
