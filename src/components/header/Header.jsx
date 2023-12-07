import React from "react";
import "../header/header.css"
import { Link } from "react-router-dom";

/* Código responsavel pelo cabeçalho*/ 


const Header = () => {
    return (
      <header>
        <div className="container"> 
          <Link to="/"><img id="logo" src="../../public/img/icon_logo.png" alt="Logo da sua empresa" /></Link>
        </div>

        <nav className="container_menu">
        <ul>
          <li className="publicItem"> 
            <Link  to="/">Home</Link>
          </li>
          <li className="publicItem">
            <Link to="/sobre">Sobre Nós</Link>
          </li>
          <li className="publicItem">
            <Link to="/contatos">Contatos</Link>
          </li>
          <li className="privateItem">
            <Link to="/produtos">BB</Link>
          </li>
          <li className="privateItem">
            <Link to="/menu">MENU_ADM</Link>
          </li>
         
        </ul>
      </nav>

      <div className="container">
        <Link to="/login"><button id="btn_login">Login/Register</button></Link>
      </div>
    </header>
    );
  };
  
  export default Header;

  /**/