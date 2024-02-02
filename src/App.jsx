//ESTILOS
import "./App.css";

//COMPONENTES
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//REACT-ROUTER-DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Shop from "./pages/Shop/Shop";

//CONTEX PROVIDER
import { CartProvider } from "./context/CartContext";


function App() {
  return (
   <CartProvider>
      <Router>
        <div className="App">
      
          <NavBar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/categoryPage/:Categoria" element={<CategoryPage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/detalle/:id" element={<DetailPage />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>

          <Footer />
          
        </div>
      </Router>
    
      </CartProvider>
  );
}


export default App;
