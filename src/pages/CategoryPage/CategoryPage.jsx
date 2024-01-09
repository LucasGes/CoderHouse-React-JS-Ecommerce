import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardProduct from '../../components/CardProduct/CardProduct';
import Spinner from '../../components/Spinner/Spinner';
import { Link } from "react-router-dom";

const CategoryPage = () => {
  let { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

console.log(categoryId);

let filteredProduct = products.filter((product) => {
  return product.category ===categoryId; 
})


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: 20,  }}>
      {isLoading ? (
        <Spinner />
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {filteredProduct.map(product => (
          <div key={product.id} style={{ margin: 10, width: '30%' }}>
            <Link to={`/detalle/${product.id}`}>
            <CardProduct product={product} />
            </Link>
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
