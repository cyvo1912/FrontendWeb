import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../componentsstilos/Header.css';
const Headers =  () => {
   
    const navigate=useNavigate();
    const location=useLocation();
   
    const IraIniciarSesion=()=>{
       
       navigate('/pe/es/logon');
    }
   
   const Ircesta=()=>{
   
    navigate('/pe/es/shop/cart');
   }
   
   const Buscar=()=>{
      navigate('/pe/es/search/home')
   }
  
 
   


  return (
    <header className="header">
      <div className="header-left">
        <h1>
          <a href="/">
            <img
              src="https://static.cdnlogo.com/logos/z/3/zara.png"
              alt="Zara logo"
              className="logo"
            />
          </a>
        </h1>
      </div>
      <nav className="header-right">
        <button onClick={Buscar} className="search-button">
          Buscar
        </button>
        {location.pathname!=='/pe/es/logon' &&(
        <button onClick={IraIniciarSesion} className="btn-text">
          Iniciar Sesión
        </button>)}
        <button onClick={Ircesta} className="btn-text">
          Cesta
        </button>
      </nav>
    </header>
        );
    ;
    
}

export default Headers;