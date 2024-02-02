
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';

import "./CardProduct.css"

const CardProduct = ({product}) => {

  const { Nombre, Precio, Categoria, Img, Detalle, Stock} = product;

  return (
    <Card sx={{ maxWidth: 345 }}>
     
      <div className="img" >
        <CardMedia className='img'
          component="img"
          image={product.Img}
                  />
         </div>
        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div">
          {product.Nombre}
          </Typography>
         
          <Typography variant="body2" color="text.secondary">
           CATEGORIA: {product.Categoria}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           PRECIO: $ {product.Precio}
          </Typography>
     
        </CardContent>
      
      <CardActions>
       
      </CardActions>
    </Card>
       
  );
}

export default CardProduct;
