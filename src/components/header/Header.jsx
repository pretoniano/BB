import React from "react";
import "../header/header.css"
import { Link } from "react-router-dom";

/* Código responsavel pelo cabeçalho*/ 


const Header = () => {
    return (
      <header>
        <div className="sub"> 
          <Link to="/"><img id="logo" src="caminho/para/sua/logo.png" alt="Logo da sua empresa" /></Link>
        </div>

        <nav className="sub_menu">
        <ul>
          <li>
            <Link  to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/contatos">Contatos</Link>
          </li>
          <li>
            <Link to="/b_b">BB</Link>
          </li>
          <li>
            <Link to="/menu">MENU_ADM</Link>
          </li>
         
        </ul>
      </nav>

      <div className="sub">
        <Link to="/login"><button id="btn_login">Login</button></Link>
      </div>
    </header>
    );
  };
  
  export default Header;

  /**/