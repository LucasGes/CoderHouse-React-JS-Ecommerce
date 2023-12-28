import { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
 import "./CardList.css"

 

 const CardList = () => {
    const [products, setProducts] = useState([]); 

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProducts(json))

    }, [])

return (
<div className="grid-container">
{products.map((product) => {

    return (
    
    <div key={product.id} className="grid-item" >
        <CardProduct product={product}/>
        </div>
        );

 })}
</div>
);
};
 export default CardList;