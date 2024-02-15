import React from 'react';
import { Link } from 'react-router-dom'; 
import Item from './../Item/Item';
import "./ItemList.css"

const ItemList = ({ products }) => { 
  return (
    <div className='ItemList'>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/detalle/${product.id}`} style={{ textDecoration: "none" }}>
            <Item product={product} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
