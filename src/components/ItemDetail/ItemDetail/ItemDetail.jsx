import { useContext, useEffect, useState} from "react";
import { Alert, Button } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../../../context/CartContext";

import "./ItemDetail.css";
import ItemCount from "../../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);

  const handleAgregar = () => {
    const itemToCart = {
      ...product,
      cantidad,
    };
    addToCart(itemToCart);
    setShowAlert(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []); 

  const handleVolver = () => {
    navigate(-1);
  };

  if (!product) {
    return null;
  }

  return (
    <div className="grid-container">
      <Button onClick={handleVolver} className="botonVolver">
        Volver
      </Button>
      <hr />
      <div className="cardDetail">
        <img
          src={product.Img}
          alt={product.Nombre}
          className="w-64 h-64 object-cover rounded-md"
        />
        <div>
          <h3 className="mt-4 text-2xl font-semibold">{product.Nombre}</h3>
          <p className="text-gray-600">{product.Detalle}</p>
          <p className="text-xl font-bold">Precio: ${product.Precio}</p>

          

          <>
            <Button
              onClick={handleAgregar}
              disabled={product.Stock === 0}
              className="mt-4"
            >
              Agregar al carrito
            </Button>
            <ItemCount
              cantidad={cantidad}
              stock={product.Stock}
              setCantidad={setCantidad}
            />
          </>

          <Button>
            <Link to="/shop" style={{textDecoration: "none"}} >Terminar mi compra</Link>
          </Button>

          {showAlert && (
           <Alert onClose={() => setShowAlert(false)} severity="success" style={{ textAlign: "center", left: "50%", display: "flex", position: "fixed", top: "50%", transform: "translate(-50%, -50%)" }}>
           Producto agregado al carro. <br/>
           Para ver su compra haga click en el carro.
         </Alert>
          )}

        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
