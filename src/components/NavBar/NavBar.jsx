import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";

import img from "../../assets/Sin Fondo.png";

const NavBar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div
          className="container-fluid"
          style={{ backgroundColor: "white", border: `1px solid black`, position: "fixed", zIndex: "1000", top: "0",width: "100%"        }}
        >
          <Link to="/">
            <img
              src={img}
              alt="Logo"
              style={{
                maxWidth: "150px",
                maxHeight: "40px",
                marginRight: "5px",
              }}
            />
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="navbar-brand">La Tienda Online</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link
                to="/"
                className="nav-item"
                style={{ textDecoration: "none" }}
              >
                <span className="nav-link active" aria-current="page">
                  Home
                </span>
              </Link>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Rubros
                </span>
                <ul className="dropdown-menu">
                  <Link to="/CategoryPage/Regaleria" className="dropdown-item">
                    Regalería
                  </Link>
                  <Link to="/CategoryPage/Jugueteria" className="dropdown-item">
                    Juguetería
                  </Link>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Juan Pedro
                </a>
              </li>
            </ul>
            <CartWidget/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
