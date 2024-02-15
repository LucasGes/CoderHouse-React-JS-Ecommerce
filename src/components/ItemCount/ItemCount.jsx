import { Button } from "@mui/material";

const ItemCount = ({ cantidad, stock, setCantidad }) => {
    const handleSumar = () => {
        console.log("Incrementando cantidad");
        cantidad < stock && setCantidad(cantidad + 1);
        console.log("Nueva cantidad:", cantidad);
      };
      const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
      };
      
    return (
      <div className="flex gap-4 items-center">
    <Button onClick={handleRestar} disabled={cantidad === 1}>
  -
</Button>
<span>{cantidad}</span>
<Button onClick={handleSumar} disabled={cantidad === stock}>
  +
</Button>
      </div>
    );
  };
  

export default ItemCount ;