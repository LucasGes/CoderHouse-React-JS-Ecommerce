import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartWidget from './../CardWidget/CartWidget';

import img from "../../assets/Sin Fondo.png"

const NavBar = () => {

  const [value, setValue] = useState ("")
  const [userData, setUserData] = useState ("")


  const onChange= (e) =>{
    
    setValue(e.target.value);

  }
  const onSubmit = (e) => {
    e.preventDefault();

    const userInput = value.toLowerCase().replace(/ /g, "");

    if (userInput) {
      fetch(`https://fakestoreapi.com/products/${userInput}`)
              .then(res=>res.json())
              .then(json=>console.log(json))
    }
  }
 

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{backgroundColor: "white", border: `1px solid black`}}>
  <Link to="/"><img src={img} alt="Logo" style={{ maxWidth: '150px', maxHeight: '40px', marginRight: '5px'}} /></Link>
    <Link to="/"> <span className="navbar-brand"     >La Tienda Online</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Juan Pedro</a>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={onSubmit}>
        <input className="form-control me-2" placeholder="Buscar Producto" aria-label="Search" value={value} onChange={onChange}/>
        <button className="btn" type="submit"  style={{border:"white"}}>Buscar</button>
      </form>
      <CartWidget/>
    </div>
  </div>
</nav>
  )
}

export default NavBar

