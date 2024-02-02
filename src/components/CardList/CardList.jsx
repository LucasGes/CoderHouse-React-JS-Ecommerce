import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Button } from '@mui/material';
import Alert from "@mui/material/Alert";


import Spinner from "../Spinner/Spinner.jsx";
import CardProduct from "../CardProduct/CardProduct";

import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.js";

import { CartContext } from "../../context/CartContext.jsx";




const CardList = () => {
  const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
  const {addToCart } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);

  
  useEffect(() => {
    setIsLoading(true);

    const getProducts = async () => {
      const q = query(collection(db, "Productos"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
      setIsLoading(false)
    };
    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowAlert(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []); 

    return (
    <div className="grid-container">
      {isLoading ? (
        <Spinner/>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <Link to={`/detalle/${product.id}`} style={{ textDecoration: "none" }}>
              <CardProduct product={product} />
            </Link>
            
              <Button className="LinkDetalle" onClick={() => handleAddToCart(product)} >Agregar al carro</Button>
           
          </div>
        ))
      )}
        {showAlert && (
           <Alert onClose={() => setShowAlert(false)} severity="success" style={{ textAlign: "center", left: "50%", display: "flex", position: "fixed", top: "50%", transform: "translate(-50%, -50%)" }}>
           Producto agregado al carro. <br/>
           Para ver su compra haga click en el carro.
         </Alert>
          )}
    </div>

    
  );
};

export default CardList;
