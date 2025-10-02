import './Encabezado.css'
import logo from '../../imagenes/logo.jpeg'
function Encabezado() {
  return (
    <header className="encabezado">
      <div className="encabezado__overlay">
        <div className="encabezado__content">
          <img
            className="encabezado__logo"
            src={logo}
            alt="Logo Celestial Candles"
          />
          <h1 className="encabezado__titulo">Celestial Candles</h1>
          <p className="encabezado__subtitulo">
            Velas con propósito para meditar, orar y conectar espiritualmente.
          </p>
          <a
            className="encabezado__cta"
            href="https://wa.me/573005466325?text=Hola%20Celestial%20Candles%2C%20quiero%20comprar%20un%20kit%20de%20velas"
            target="_blank"
            rel="noreferrer"
          >
            Comprar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Encabezado
  