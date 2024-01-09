import "./Footer.css"
import img from "../../assets/Sin Fondo.png"
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (

<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-body-secondary">&copy; 2023 Company, Inc</p>

    <img src={img} alt="Logo" style={{ maxWidth: '100px', maxHeight: '100px', marginRight: 'center'}} />

    <ul class="nav col-md-4 justify-content-end">
      <Link class="nav-item" to="/"><a class="nav-link px-2 text-body-secondary" >Home</a></Link>
      <Link class="nav-item" to="/ofertas"><a class="nav-link px-2 text-body-secondary" >Ofertas</a></Link>
      <li className="dropdown">
          <a className="nav-link dropdown-toggle"     role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rubros
          </a>
          <ul className="dropdown-menu">
            <Link to="/ropa"><a className="dropdown-item"    >Ropa</a></Link>
            <Link to="/accesorios"><a className="dropdown-item"    >Accesorios</a></Link>
            <Link to="/tecnologia"><a className="dropdown-item"    >Texnología</a></Link>
          </ul>
        </li>
      <Link class="nav-item" to="/about"><a     class="nav-link px-2 text-body-secondary">About</a></Link>
    </ul>
  </footer>
</div>

  );
};

export default Footer;
