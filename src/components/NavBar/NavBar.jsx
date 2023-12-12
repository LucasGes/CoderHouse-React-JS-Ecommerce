import img from "../../assets/Sin Fondo.png"

import CartWidget from './../CardWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{backgroundColor: "white", border: `1px solid black`}}>
    <img src={img} alt="Logo" style={{ maxWidth: '150px', maxHeight: '40px', marginRight: '5px'}} />
    <a className="navbar-brand" href="#">La Tienda Online</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ofertas</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rubros
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Juguetería</a></li>
            <li><a className="dropdown-item" href="#">Libreria</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Otros</a></li>
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

