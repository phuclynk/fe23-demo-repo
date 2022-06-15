import { useState } from "react";
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import NavBar from "./navbar/Navbar";
import { ProductData } from "./ProductData";

import './style.css'

function ProducDetail() {
    const params = useParams();
    const navigate = useNavigate()
    const location = useLocation()

    console.log(location);

    return (<div>
        <h1>Product Detail</h1> 
        <button onClick={() => navigate(-2 , { replace: true })} >back</button>
        <h2>{params.identifier}</h2>
        <h2>{location.state.name}</h2>
    </div>
    );
}

function Home() {
    return (<h1>Home</h1> );
}
function Reports() {
    return (<h1>Report</h1> );
}
function Support() {
    return (<h1>Support</h1> );
}
function Product() {
    const navigate = useNavigate()

    const gotoProducDetail = (item) => {
        navigate(`/product-detail/${item.id}`, { state: {name: 'phuc', age: ''} })
    }

    return (
        <div>
            <h1>Product</h1> 
            <ul>
                {ProductData.map(item => <li 
                onClick={() => gotoProducDetail(item)} 
                key={item.id} >
                    {item.display}
                </li>)}
            </ul>
        </div>
    );
}


function RoutedApp() {
    const [showNavbar, setShowNavbar ] = useState(false);

    const toggleNavbar = () => setShowNavbar(!showNavbar);

    return ( 
        <div className="routed-app">
        <NavBar toggleSidebar={() => setShowNavbar(false)} show={showNavbar}/>
            <div>
                <button onClick={toggleNavbar}>Toggle</button>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Product/>}></Route>
                <Route path="/product-detail/:identifier" element={<ProducDetail/>}/>
                <Route path="/reports" element={<Reports/>}/>
                <Route path="/support" element={<Support/>}/>
            </Routes>
        </div> 
    );
}

export default RoutedApp;