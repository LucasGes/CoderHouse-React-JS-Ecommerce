import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import Spinner from '../../Spinner/Spinner';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { Categoria } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const productosRef = collection(db, 'Productos');
    const docsRef = Categoria
      ? query(productosRef, where('Categoria', '==', Categoria))
      : productosRef;

    getDocs(docsRef)
      .then((querySnapshot) => {
        const docs = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }));
        console.log(docs);
        setProducts(docs);
      })
      .finally(() => setIsLoading(false));
  }, [Categoria]);

  return (
    <div className="grid-container">
      {isLoading ? (
        <Spinner/>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
