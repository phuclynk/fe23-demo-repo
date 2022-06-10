import { useNavigate, useParams } from "react-router";


function ProductDetail() {
    const params = useParams();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

    return ( <div>
        <h1>Product Detail</h1>
        <button onClick={handleGoBack}>Back</button>
        <h2>{params.id}</h2>
    </div> );
}

export default ProductDetail;