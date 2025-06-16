import "./home.css";
import back from "/assets/img/background.png";
import backmobile from "/assets/img/background-mobile.png";
import what from "/assets/svg/icons8-whatsapp.svg";

function Home() {
  return (
    <section className="hero">
      <div className="hero-section">
        <div className="content">
          <div className="hero-background">
            <picture>
              {/* fonte para mobile até 425px */}
              <source
                media="(max-width: 425px)"
                srcSet={backmobile}
              />
              {/* fallback para desktop */}
              <img src={back} alt="Fundo do hero" />
            </picture>
          </div>
          <div className="hero-content-txt">
            <div>
              <h1>
                <span>COMPROMISSO</span> <br /> COM O <br />
                <span>SUCESSO DA</span> <br /> SUA OBRA!
              </h1>
              <p>
                Agilidade, confiança e os melhores equipamentos para sua
                construção.
              </p>
              <div className="hero-buttons">
                <a href="#services" className="btn btn-primary">
                  <img src={what} alt="WhatsApp" /> Contate-nos Agora!
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Veja nossos produtos &#x21E9;
                </a>
              </div>
            </div>
          </div>
          <div className="diagonal"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
