import { useParams, useNavigate } from 'react-router-dom';
import { products } from "../../componenets/Sectionone/Sectionsone";
import Header from '../../componenets/Header/Header'
import './product.css';

function Product() {

    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <h2>Məhsul tapılmadı!</h2>;
    }

    return (
        <>
            <Header />
            <div className='product-parent'>
                <div className="product-page">


                    <div className="product-detail">

                        <img src={product.image} alt={product.title} />

                        <div className="product-info">
                            <h3>{product.subtitle}</h3>
                            <h2>{product.title}</h2>

                            <span>{product.price}</span>

                            <p>{product.description}</p>
                            <button>Añadir al carrito</button>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

export default Product;