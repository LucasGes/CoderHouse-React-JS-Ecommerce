import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import Spinner from '../../Spinner/Spinner';
import ItemDetail from '../ItemDetail/ItemDetail'; 


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const productosRef = collection(db, 'Productos');
    const docsRef = id
      ? query(productosRef, where(documentId(), '==', id))
      : productosRef;
  
    getDocs(docsRef)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          setProduct({
            ...doc.data(),
            id: doc.id
          });
        } else {
          console.log('No se encontró el producto con el ID proporcionado.');
          setProduct(null); 
        }
      })
      .finally(() => setIsLoading(false));
  }, [id]);
  
  return (
    <div className="grid-container">
      {isLoading ? (
        <Spinner/>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
