import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";


import Spinner from './../../components/Spinner/Spinner';
import CardProduct from './../../components/CardProduct/CardProduct';

import { collection, query, getDocs, doc, where, documentId } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.js";

import "./DetailPage.css"


const DetailPage = () => {

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {id} = useParams();

  useEffect(() => {
    setIsLoading(true);

    const getProduct = async () => {
      const q = query(collection(db, "Productos"), where (documentId(), "==", id)  );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProduct(docs);
      setIsLoading(false)
    };
    getProduct();
  }, [id]);

  return (
    
    <div className="grid-container">
      {isLoading ? (
        <Spinner/>
      ) : (
        product.map((product) => (
          <div  key={product.id} className="cardDetail">
          
          <CardProduct product={product} />
          <p style={{width: "400px", margin: "80px", lineHeight: "2"} }> {product.Detalle} </p>  
          </div>
          ))
       
        )}
        
    </div>
  );
};

export default DetailPage;

