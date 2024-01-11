import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Spinner from "../Spinner/Spinner.jsx";
import CardProduct from "../CardProduct/CardProduct";

import "./CardList.css"
 

 const CardList = () => {
    const [products, setProducts] = useState([]); 
    const [isLoading, setIsLoading] = useState (false);

    useEffect(()=> {
        setIsLoading (true)

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json => {
            setProducts(json);
            setIsLoading(false); 
          })
        
    }, [])

    return (
        <div className="grid-container">
          {isLoading ? (
            <Spinner/>
          ) : (
            products.map((product) => (
              <div key={product.id} className="grid-item">
                <Link to={`/detalle/${product.id}`}>
                <CardProduct product={product} />
                </Link>
              </div>
            ))
          )}
        </div>
      );
};
 export default CardList;