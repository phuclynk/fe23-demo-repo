import React from "react";
import { useNavigate, useParams } from "react-router";

export const products = [
    { id: 'iphone11', display: 'Iphone 11' },
    { id: 'iphone12', display: 'Iphone 12' },
    { id: 'iphone13', display: 'Iphone 13' },
    { id: 'iphone14', display: 'Iphone 14' },
]

export default function Products() {
    const param = useParams();
    const navigate = useNavigate();

    console.log(param)

    const navLinkStyle =  { 
        textDecoration: 'none',
        border: '1px solid gray',
        padding: '10px 20px',
        marginRight: '30px'
    };

    const gotoDetail = (item) => {
        navigate(`/product-detail/${item.id}`)
    }

    return (
        <div className="products">
            <h1>Products</h1>
            <div style={{ display: 'flex', width: '100%' }} className="products-container">
                {products.map(item => <li 
                    onClick={() => gotoDetail(item)} 
                    style={navLinkStyle}
                >
                    {item.display}
                </li>
                )}
            </div>
        </div>
    );
}
