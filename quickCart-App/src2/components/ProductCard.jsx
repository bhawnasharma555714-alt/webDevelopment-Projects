import {Link} from 'react-router-dom';

export default function ProductCard({product}){
    console.log(product.id);
    return(
        <div className="card">
            <h3 className="card-title">{product.name}</h3>
            <p className='card-meta'>Sold by {product.seller}, {product.city}</p>
            <p className='card-price'>${product.price}</p>
            <Link to={`/product/${product.id}`} className="card-link">View Details</Link>
        </div>
    );
}