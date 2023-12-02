import style from './header.module.css';

/* Código responsavel pelo cabeçalho*/ 

const Header = () => {
    return (
      <header>
        <img id="logo" src="caminho/para/sua/logo.png" alt="Logo da sua empresa" />
  
        <nav>
          <a href="~^~">Home</a>
          <a href="~^~">Produtos</a>
          <a href="~^~">Sobre Nós</a>
        </nav>

        <button id="btn_login">Login</button>
      </header>
    );
  };
  
  export default Header;