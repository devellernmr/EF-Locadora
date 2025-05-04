import "./navbar.css";
import { useState } from "react";
import logoImg from "../../assets/img/logo-ef.png";
import emailIcon from "../../assets/svg/email-icon.svg";
import whatsappIcon from "../../assets/svg/whatsapp-icon.svg";
import searchIcon from "../../assets/svg/search-icon.svg";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="nav-bar">
        <div className="logo">
          <img 
          src={logoImg} 
          alt="Logo-EF" />
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sobre">Quem somos</a>
          </li>
          <li>
            <a href="#Produtos">Serviços</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>

          <div className="container-buttons" id="container-buttons">
            <div className="search-box">
              <input type="text" placeholder="Pesquisar produtos..." />
              <button type="submit">
                <img src={searchIcon} alt="Pesquisar" />
              </button>
            </div>

            <div className="buttons-nav">
              <div className="buttons-a-nav">
                <a className="btn-whatsapp">
                  <img
                    src={whatsappIcon}
                    alt="Whatsapp-icon"
                  />
                </a>
                <a className="btn-email">
                  <img
                    src={emailIcon}
                    alt="Email-icon"
                  />
                </a>
              </div>
              <button className="btn-orçamento">Solicite um orçamento</button>
            </div>
          </div>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
        </div>

        <div className="container-buttons">
          <div className="search-box">
            <input type="text" placeholder="Pesquisar produtos..." />
            <button type="submit">
              <img src={searchIcon} alt="Pesquisar" />
            </button>
          </div>

          <div className="buttons-nav">
            <div className="buttons-a-nav">
              <a className="btn-whatsapp">
                <img
                  src={whatsappIcon}
                  alt="Whatsapp-icon"
                />
              </a>
              <a className="btn-email">
                <img src={emailIcon} alt="Email-icon" />
              </a>
            </div>
            <button className="btn-orçamento">Solicite um orçamento</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
