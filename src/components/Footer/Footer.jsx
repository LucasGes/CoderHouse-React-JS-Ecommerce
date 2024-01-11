import "./Footer.css"
import img from "../../assets/Sin Fondo.png"
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (

<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">&copy; 2023 Company, Inc</p>

    <Link to="/"><img src={img} alt="Logo" style={{ maxWidth: '150px', maxHeight: '40px', marginRight: '5px'}} /></Link>

    <ul className="nav col-md-4 justify-content-end">
          <Link to="/" className="nav-item">
        <span className="nav-link active" aria-current="page">Home</span>
          </Link>
          <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rubros
          </span>
          <ul className="dropdown-menu">
            <Link to="/CategoryPage/women's clothing" className="dropdown-item">Ropa Dama</Link>
            <Link to="/CategoryPage/men's clothing" className="dropdown-item">Ropa Hombre</Link>
            <Link to="/CategoryPage/jewelery" className="dropdown-item">Accesorios</Link>
            <Link to="/CategoryPage/electronics" className="dropdown-item">Tecnología</Link>
          </ul>
        </li>
      <Link className="nav-item" to="/about">
        <span     className="nav-link px-2 text-body-secondary">About</span>
        </Link>
    </ul>
  </footer>
</div>

  );
};

export default Footer;
