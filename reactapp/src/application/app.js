import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./app.css"
import "react-toastify/dist/ReactToastify.css"

let Header = lazy(() => import ("./CommonComponent/HeaderComponent"));
let Home = lazy(() => import ("./CommonComponent/HomeComponent"));
let Footer = lazy(() => import ("./CommonComponent/FooterComponent"));
let About = lazy(() => import ("./CommonComponent/AboutComponent"));
let NotFound = lazy(() => import ("./CommonComponent/NotFound"));
let UserHook = lazy(() => import ("./AppComponents/User/UserHook"));
let ProductComponent = lazy(() => import ("./ProductComponents/Product/ProductComponent"));
let Cart = lazy(() => import ("./Cart/CartComponent"));
let Checkout = lazy(() => import ("./Checkout/CheckoutComponent"));
let RecentOrders = lazy(() => import ("./RecentOrders/RecentOrders"));
let Coupon = lazy(() => import ("./Coupon/CouponComponent"))
let UnderstandingHooks = lazy(()=> import("./Hooks/UnderstandingHooks"));


export default class Application extends Component {
    render(){
        return( 
            <Router>
                <ToastContainer/>
                <Suspense fallback={<div>Loading...</div>}>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home user={"User"} userName={"Lemar"}/>}/>
                        <Route path="/home" element={<Home user={"User"} userName={"Lemar"}/>}/>
                        <Route path="/product" element={<ProductComponent />} />
                        <Route path="/hook" element={<UserHook />} />
                        <Route path="/learn" element={<UnderstandingHooks />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/coupon" element={<Coupon />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/recentOrders" element={<RecentOrders />} />
                        <Route path="/about" element={<About />} />
                        <Route path='/about/:id' element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                <Footer />
                </Suspense>
            </Router>
        )
    }
}