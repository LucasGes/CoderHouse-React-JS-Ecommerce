import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const EmtpyCart = () => {
  return (
    <section className="container mx-auto my-8 text-center">
      <h2 className="text-4xl font-semibold mb-4" style={{margin: "30px"}}>El carrito está vacío</h2>
      <p className="text-lg mb-8">
        Por favor, agregar algún producto al carro.
      </p>
      <Button>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Volver
        </Link>
      </Button>
    </section>
  );
};

export default EmtpyCart;
