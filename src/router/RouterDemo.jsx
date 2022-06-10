import React from "react";
import "./RouterDemo.css";

import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Products from "./pages/Product";
import Support from "./pages/Support";
import ProductDetail from "./pages/ProducDetail";

export default function RouterDemo() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/product-detail/:id" element={<ProductDetail/>} />
                    <Route path="support" element={<Support/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
