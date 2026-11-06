import { useNavigate } from 'react-router-dom';
import './sectionone.css';

import sekil1 from './sekil1.png';
import sekil2 from './Image2.png';
import sekil3 from './Image3.png';

export const products = [
    {
        id: 1,
        image: sekil1,
        title: 'Subtítulo',
        subtitle: 'Nombre del producto',
        price: '10,99 $',
        description: 'Cuerpo del texto para describir qué es este producto y por qué es una compra imprescindible.'
    },
    {
        id: 2,
        image: sekil2,
        title: 'Subtítulo',
        subtitle: 'Nombre del producto',
        price: '15,99 $',
        description: 'Cuerpo del texto para describir qué es este producto y por qué es una compra imprescindible.'
    },
    {
        id: 3,
        image: sekil3,
        title: 'Subtítulo',
        subtitle: 'Nombre del producto',
        price: '20,99 $',
        description: 'Cuerpo del texto para describir qué es este producto y por qué es una compra imprescindible.'
    }
];

function Sectionsone() {

    const navigate = useNavigate();

    return (
        <div className="umumi">

            <h1>Encabezado de sección</h1>

            <div className="products">

                {products.map((item) => (
                    <div
                        key={item.id}
                        className="product"
                        onClick={() => navigate(`/product/${item.id}`)}
                    >

                        <img src={item.image} alt={item.title} />

                        <h2>{item.title}</h2>

                        <p>{item.description}</p>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default Sectionsone;