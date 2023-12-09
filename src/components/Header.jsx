import React from "react";
import "../assets/styles/header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

/* Código responsavel pelo cabeçalho*/

const Header = (/*+++ linkar props*/) => { 
  const [open, setopen] = useState(false);
  const havePromo = true;/*+++ linkar databank*/
  const [openPromo, setopenPromo] = useState(true);/*+++ linkar ao cookie futuramente*/
  const isMobile = useMediaQuery({ query: "(max-width: 991px)" });

 

  const HamburguerOpen = () => {
    console.log(open)
    setopen(!open);
  };

  return (
    <div id="header_responsive">
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
            <li className="publicItem liPc">
              <Link to="/">Home</Link>
            </li>
            <li className="publicItem liPc">
              <Link to="/produto">Produto</Link>
            </li>
            <li className="publicItem liPc">
              <Link to="/sobre">Sobre Nós</Link>
            </li>
            <li className="publicItem liPc">
              <Link to="/contatos">Contatos</Link>
            </li>
            <li className="privateItem liPc">
              <Link to="/produtos">BB</Link>
            </li>
            <li className="privateItem liPc">
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
          className={open ? "open" : ""
          }
        >
          <div className="bar t" ></div>
          <div className="bar m" ></div>
          <div className="bar b" ></div>
        </div>
     
        </section>
        

      
    </header>
    

      <section id="mobile" style={{top: open && isMobile ? '0':''}}>
        <nav id="container_menu_mobile">
          <ul id="ul_mobile">
            <li className="publicItem li_mobile" onClick={HamburguerOpen}>
              <Link to="/">Home</Link>
            </li>
            <li className="publicItem li_mobile" onClick={HamburguerOpen}>
              <Link to="/produto">Produto</Link>
            </li>
            <li className="publicItem li_mobile" onClick={HamburguerOpen}>
              <Link to="/sobre">Sobre Nós</Link>
            </li>
            <li className="publicItem li_mobile" onClick={HamburguerOpen}>
              <Link to="/contatos">Contatos</Link>
            </li>
            <li className="privateItem li_mobile" onClick={HamburguerOpen}>
              <Link to="/produtos">BB</Link>
            </li>
            <li className="privateItem li_mobile" onClick={HamburguerOpen}>
              <Link to="/menu">MENU_ADM</Link>
            </li>
          </ul>
        </nav>

        <div id="container_item_mobile" >
          <Link to="/login">
            <button id="btn_login_mobile" className="btn_login"  onClick={HamburguerOpen}>Log in</button>
          </Link>
          <Link to="/signup">
            <button id="btn_signup_mobile" className="btn_signup"  onClick={HamburguerOpen}>Sign up</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Header;

/**/
