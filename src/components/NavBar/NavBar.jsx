import { Link } from "react-router-dom";
import CardWidget from '../CardWidget/CardWidget.jsx';
import { CartContext } from "../../context/CartContext.jsx";
import { useContext } from "react";

import img from "../../assets/Sin Fondo.png";

const NavBar = () => {

  const {cart } = useContext(CartContext);
  
  const handleLinkClick = () => {
    clearSearch();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{ backgroundColor: "white", border: `1px solid black` }}>
          <Link to="/" onClick={handleLinkClick}><img src={img} alt="Logo" style={{ maxWidth: '150px', maxHeight: '40px', marginRight: '5px' }} /></Link>
          <Link to="/" onClick={handleLinkClick} style={{textDecoration: "none"}}><span className="navbar-brand" >La Tienda Online</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/" className="nav-item" onClick={handleLinkClick} style={{textDecoration: "none"}}>
                <span className="nav-link active" aria-current="page">Home</span>
              </Link>
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Rubros
                </span>
                <ul className="dropdown-menu">
                  <Link to="/CategoryPage/Regaleria" className="dropdown-item"onClick={handleLinkClick} >Regalería</Link>
                  <Link to="/CategoryPage/Jugueteria" className="dropdown-item"onClick={handleLinkClick} >Juguetería</Link>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Juan Pedro</a>
              </li>
            </ul>
            <CardWidget cartLength={cart.length} />

          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
