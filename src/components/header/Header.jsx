import React from "react";
import "../header/header.css"

/* Código responsavel pelo cabeçalho*/ 

const Header = () => {
    return (
      <header>
        <div className="sub"> 
          <img id="logo" src="caminho/para/sua/logo.png" alt="Logo da sua empresa" />
        </div>

        <div className="sub">
          <nav>
            <a href="~^~">Home</a>
            <a href="~^~">Produtos</a>
            <a href="~^~">Sobre Nós</a>
          </nav>
        </div>

        <div className="sub">
          <button id="btn_login">Login</button>
        </div>
    </header>
    );
  };
  
  export default Header;