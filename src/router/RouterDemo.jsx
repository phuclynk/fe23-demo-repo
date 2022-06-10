import React from "react";
import "./RouterDemo.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "react-router";

// PAGES
import Home from "./pages/Home";
import Products from "./pages/Product";

export default function RouterDemo() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact component={Home} />
                    <Route path="/products" component={Products} />
                </Routes>
            </Router>
        </div>
    );
}
