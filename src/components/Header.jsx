import React from "react";
import "../assets/styles/header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

/* Código responsavel pelo cabeçalho*/

const Header = () => {
  const [open, setopen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const HamburguerOpen = () => {
    setopen(!open);
    console.log(open);
  };

  return (
    <header >
      <section id="headerContainer">
        <div id="container_logo">
          <Link to="/">
            <img
              id="logo"
              src="../../public/img/icon_logo.png"
              alt="Logo da sua empresa"
            />
          </Link>
        </div>

        <nav id="container_menu">
          <ul id="ulPc">
            <li className="publicItem">
              <Link to="/">Home</Link>
            </li>
            <li className="publicItem">
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
          <Link to="/login">
            <button id="btn_login" className="btn_login">Log in</button>
          </Link>
          <Link to="/signup">
            <button id="btn_signup" className="btn_signup">Sign up</button>
          </Link>
        </div>

        <div
          id="hamburguer"
          onClick={HamburguerOpen}
          className={open ? "open" : ""}
        >
          <div className="bar t"></div>
          <div className="bar m"></div>
          <div className="bar b"></div>
        </div>
      </section>

      <section id="mobile">
        <nav id="container_menu_mobile">
          <ul id="ul_mobile">
            <li className="publicItem li_mobile">
              <Link to="/">Home</Link>
            </li>
            <li className="publicItem li_mobile">
              <Link to="/produto">Produto</Link>
            </li>
            <li className="publicItem li_mobile">
              <Link to="/sobre">Sobre Nós</Link>
            </li>
            <li className="publicItem li_mobile">
              <Link to="/contatos">Contatos</Link>
            </li>
            <li className="privateItem li_mobile">
              <Link to="/produtos">BB</Link>
            </li>
            <li className="privateItem li_mobile">
              <Link to="/menu">MENU_ADM</Link>
            </li>
          </ul>
        </nav>

        <div id="container_item_mobile">
          <Link to="/login">
            <button id="btn_login_mobile" className="btn_login">Log in</button>
          </Link>
          <Link to="/signup">
            <button id="btn_signup_mobile" className="btn_signup">Sign up</button>
          </Link>
        </div>
      </section>

      <section id="containerPromo" style={{display: open ?  "none": ""}}>
        <h2 style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>
          Promoção, botar para receber um input personalizado
        </h2>
      </section>
    </header>
  );
};

export default Header;

/**/
