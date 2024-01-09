import img from "../../assets/Sin Fondo.png"

import CartWidget from './../CardWidget/CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{backgroundColor: "white", border: `1px solid black`}}>
  <Link to="/"><img src={img} alt="Logo" style={{ maxWidth: '150px', maxHeight: '40px', marginRight: '5px'}} /></Link>
    <Link to="/"> <a className="navbar-brand"     >La Tienda Online</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link className="nav-item" to="/">
          <a className="nav-link active" aria-current="page">Home</a>
        </Link>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rubros
          </a>
          <ul className="dropdown-menu">
            <Link to="/CategoryPage/women's clothing"><a className="dropdown-item">Ropa Dama</a></Link>
            <Link to="/CategoryPage/men's clothing"><a className="dropdown-item">Ropa Hombre</a></Link>
            <Link to="/CategoryPage/jewelery"><a className="dropdown-item">Accesorios</a></Link>
            <Link to="/CategoryPage/electronics"><a className="dropdown-item">Tecnología</a></Link>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Juan Pedro</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit" style={{border:"white"}}>Search</button>
      </form>
      <CartWidget/>
    </div>
  </div>
</nav>
  )
}

export default NavBar

