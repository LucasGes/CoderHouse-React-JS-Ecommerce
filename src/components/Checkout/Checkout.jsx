
import { useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import "./Checkout.css"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const initialState = {
    nombre: "",
    apellido: "",
    ciudad: "",
  };

const Checkout = () => {

    const [values, setValues] = useState(initialState);
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false); 
    const [userId, setUserId] = useState("");  
    const {clearCart} = useContext(CartContext);
    const [formDisabled, setFormDisabled] = useState(false);

    const onChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
    
        if (
          values.nombre.trim() === "" ||
          values.apellido.trim() === "" ||
          values.ciudad.trim() === ""
        ) {
          setShowError(true);
          setShowSuccess(false); 
    
          return;
        }
         
    
        try {
          const docRef = await addDoc(collection(db, "Compras"), {
            values,
          });
    
          setUserId(docRef.id);
          setValues(initialState);
          setShowError(false); 
          setShowSuccess(true);
          setFormDisabled(true); 
    
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      };
    
      const handleCloseError = () => {
        setShowError(false);
      };
    
      const handleCloseSuccess= () => {
        setShowSuccess(false);
      };


  return (
    <div className="FormShopContainer">
       <Box
      
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
       

      <div className="FormShop">

      <p style={{ marginTop: "10px", textAlign: "center", color: "#0d47a1"}}> COMPLETE EL FORMULARIO</p>

        <TextField
          id="standard-input"
          label="Nombre"
          variant="standard"
          name="nombre"
          value={values.nombre}
          onChange={onChange}
          disabled={formDisabled}
        />
        <TextField
          id="standard-input"
          label="Apellido"
          variant="standard"
          name="apellido"
          value={values.apellido}
          onChange={onChange}
          disabled={formDisabled}
        />
        <TextField
          id="standard-input"
          label="Ciudad"
          variant="standard"
          name="ciudad"
          value={values.ciudad}
          onChange={onChange}
          disabled={formDisabled}
        />

        <Button type="submit" onClick={clearCart} disabled={formDisabled}>
          Comprar
          
        </Button>

        {showError && (
          <Alert
            onClose={handleCloseError}
            severity="error"
            style={{ height: "50px", width: "251px" }}
          >
            Completar los campos.
          </Alert>
        )}

{showSuccess && (
      <Alert onClose={handleCloseSuccess} severity="success" style={{textAlign: "center", width: "300px"}}>
       Gracias por su compra!! <br />
       Su ID de transacción es: {userId}<br />
       <Link to="/"  className="LinkDetalle">
        VOLVER AL INICIO
        </Link>
      </Alert>
      
    )}
         </div>
    </Box>
    </div>
  )
}

export default Checkout
