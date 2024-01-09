//ESTILOS
import "./App.css";

//COMPONENTES
import NavBar from "./components/NavBar/NavBar";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer"

//REACT-ROUTER-DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES

import HomePage from "./pages/HomePage/HomePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

function App() {
  return ( 
    <Router>
    <div className="App">
      <NavBar />

    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/CategoryPage/:categoryId" element={<CategoryPage />}/>
    <Route path="*" element={<ErrorPage/>}/>
    <Route path="/detalle/:id" element={<DetailPage/>}/>

    </Routes>

    <Footer />
    </div>
    </Router>
  );
}

export default App;
