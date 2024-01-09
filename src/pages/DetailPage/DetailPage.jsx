import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardProduct from '../../components/CardProduct/CardProduct';
import Spinner from '../../components/Spinner/Spinner';


const DetailPage = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch(error => console.error('Error fetching product data:', error));
  }, [id]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: 20 }}>
      {product.id ? <CardProduct product={product} /> :  <Spinner/>}
    </div>
  );
};

export default DetailPage;
