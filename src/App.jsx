//ESTILOS
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//COMPONENTES
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemList/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";
import CartList from "./components/CartList/CartList";
import Carousel from "./components/Carousel/Carousel";

//REACT-ROUTER-DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import AboutPage from "./pages/AboutPage/AboutPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

//CONTEX PROVIDER
import { CartProvider } from "./context/CartContext";


function App() {

  const images = [ "https://via.placeholder.com/800x400?text=Imagen+1",
    "https://via.placeholder.com/800x400?text=Imagen+2",
    "https://via.placeholder.com/800x400?text=Imagen+3", ];

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar/>

          <Carousel images={images} />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/categoryPage/:Categoria"
              element={<ItemListContainer />}
            />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/shop" element={<CartList />} />
            <Route path="/checkOut" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
