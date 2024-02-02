import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";

import Spinner from './../../components/Spinner/Spinner';
import CardProduct from "../../components/CardProduct/CardProduct.jsx";

import { collection, query, getDocs, doc, where} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.js";



const CategoryPage = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {Categoria} = useParams();

  useEffect(() => {
    setIsLoading(true);

    const getProducts = async () => {
      const q = query(collection(db, "Productos"), where ("Categoria", "==", Categoria)  );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
      setIsLoading(false)
    };
    getProducts();
  }, [Categoria]);

  return (
    
    <div className="grid-container">
      {isLoading ? (
        <Spinner/>
      ) : (
        products.map((product) => (
          <Link to={`/detalle/${product.id}`} key={product.id} style={{textDecoration: "none"}}>
            <CardProduct product={product} />
          </Link>
        ))
      )}
    </div>
  );
};

export default CategoryPage;
