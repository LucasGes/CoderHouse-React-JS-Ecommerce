import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import EmptyCart from "./EmptyCart";
import { Button } from "@mui/material";

import "./CartList.css";
import { Link } from "react-router-dom";

const CartList = () => {
  const { cart, totalCart, clearCart, removeItem, itemsInCart } =
    useContext(CartContext);
  const totalConImpuesto = totalCart() * 1.21;

  if (cart.length === 0) return <EmptyCart />;

  return (
    <section className="CartList">
      <h1 className="text-4xl font-semibold text-center mb-4">Tu Carro</h1>

      <ul className="cart-items">
        {cart.map((product) => (
          <li key={product.id} className="cart-item">
            <div className="item-details">
              <img src={product.Img} alt="Cart img" className="img1" />
              <div className="item-text">
                <h3 className="text-2xl text-center">{product.Nombre}</h3>
                <p className="text-2xl font-bold text-center">
                  Precio Unitario: ${product.Precio}</p>
                <p className="text-center">
                  Cantidad: {product.cantidad}</p>
                <p className="text-center">
                  Subtotal: $ {product.Precio * product.cantidad}</p>
              </div>
            </div>
            <div className="BotonEliminar">
              <Button variant="outlined" onClick={() => removeItem(product.id)}>
                Eliminar
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <h6 className="text-4xl font-semibold text-center mt-8">
        TOTAL DE ARTÍCULOS: {itemsInCart()}
      </h6>

      <h5 className="text-4xl font-semibold text-center mt-8">
        PRECIO SIN IVA: ${totalCart()}
      </h5>

      <h4 className="text-4xl font-semibold text-center mt-8">
        PRECIO FINAL: ${totalConImpuesto}
      </h4>
      <div></div>
      <div className="flex justify-center mt-8">
        <Button onClick={clearCart}>Vaciar carrito</Button>
      </div>

      <Button className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-white">
        <Link to="/checkOut">Finalizar mi compra</Link>
      </Button>
    </section>
  );
};

export default CartList;
