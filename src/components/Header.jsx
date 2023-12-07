import React from "react";
import "../assets/styles/header.css"
import { Link } from "react-router-dom";

/* Código responsavel pelo cabeçalho*/ 


const Header = () => {
    return (
      <header>
        <section id="headerContainer">
        <div className="container"> 
          <Link to="/"><img id="logo" src="../../public/img/icon_logo.png" alt="Logo da sua empresa" /></Link>
        </div>

        <nav className="container_menu">
        <ul>
          <li className="publicItem"> 
            <Link  to="/">Home</Link>
          </li>
          <li className="produto">
            <Link to="/produto">Produto</Link>
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
        <div id="btnContainer">
            <img src="../../public/img/icon_logo.png" alt="" srcset="" id="userMenu" />
            <Link to="/login"><button id="btn_login">Log in</button></Link>
            <Link to="/singup"><button id="btn_signup">Sign up</button></Link>
          </div>
         </div>
      </section>
      <section id="containerPromo">
        <h2 style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
           Promoção, botar para receber um input personalizado
        </h2>
</section>
    </header>
    
    );
  };
  
  export default Header;

  /**/