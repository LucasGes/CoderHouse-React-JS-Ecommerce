
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./CardProduct.css"

const CardProduct = ({product}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <div className="img" >
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          style={{ width: '100%', height: 'auto' }}

        />
         </div>
        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div">
          {product.title}
          </Typography>
         
          <Typography variant="body2" color="text.secondary">
           CATEGORIA: {product.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           PRECIO: $ {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver Producto
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardProduct;
