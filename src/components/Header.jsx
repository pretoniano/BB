import React from "react";
import "../assets/styles/header.css"
import { Link } from "react-router-dom";
import { useState } from "react";

/* Código responsavel pelo cabeçalho*/ 


const Header = () => {
  const [open, setopen] = useState(false);

  const HamburguerOpen= () => {
    setopen(!open);
    console.log(open)
  };

    return (
      <header>
        <section id="headerContainer">

        <div id="container_logo"> 
          <Link to="/"><img id="logo" src="../../public/img/icon_logo.png" alt="Logo da sua empresa" /></Link>
        </div>

        <nav id="container_menu">
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

     
      <div id="container_item">
          <Link to="/login"><button id="btn_login">Log in</button></Link>
          <Link to="/singup"><button id="btn_signup">Sign up</button></Link>
          <div id="hamburguer" onClick={HamburguerOpen}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
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