import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { CartContext } from "../../context/CartContext";

const CardWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ display: "flex" }}>
      <Link to="./shop">
        <ShoppingCartIcon />
        <span style={{ marginLeft: "5px" }}>{cart.length}</span>
      </Link>
    </div>
  );
};

export default CardWidget;
