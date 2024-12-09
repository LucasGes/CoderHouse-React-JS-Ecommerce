import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import "./Item.css";

const Item = ({ product }) => {
  const { Nombre, Precio, Categoria, Img } = product;

  return (
    <Card class="Card">
      <div className="img">
        <CardMedia
          component="img"
          image={Img} 
          alt={Nombre}
        />
      </div>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {Nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          PRECIO: ${Precio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          CATEGORÍA: {Categoria}
        </Typography>
      </CardContent>
   
    </Card>
  );
};

export default Item;
