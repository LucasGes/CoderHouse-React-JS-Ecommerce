import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { itemsInCart } = useContext(CartContext);

  return (
    <div style={{ display: "flex" }}>
      <Link to="./shop" style={{textDecoration: "none"}}>
        <ShoppingCartIcon />
        <span style={{ marginLeft: "5px" }}>{itemsInCart()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
