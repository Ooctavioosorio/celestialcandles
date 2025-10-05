import './Pie.css'
import logo from '../../imagenes/logo_trtansparente.png'

function Pie() {
  const year = new Date().getFullYear()
  const waHref = `https://wa.me/573005466325?text=${encodeURIComponent('Hola Celestial Candles, me gustaría más información')}`

  return (
    <footer className="pie" id="pie">
      <div className="pie__inner">
        <div className="pie__brand">
          <img className="pie__logo" src={logo} alt="Celestial Candles" />
          <p className="pie__tag">
            Velas con intención. Armoniza tus espacios con aromas que inspiran calma.
          </p>
        </div>

        <nav className="pie__nav" aria-label="Navegación inferior">
          <h3 className="pie__heading">Menú</h3>
          <ul className="pie__menu">
            <li><a className="pie__link" href="#concepto">Proposito</a></li>
            <li><a className="pie__link" href="#productos">Productos</a></li>
            <li><a className="pie__link" href="#kit">Kit</a></li>
            <li><a className="pie__link" href="#proceso">Proceso</a></li>
            <li><a className="pie__link" href="#testimonios">Testimonios</a></li>
          </ul>
        </nav>

        <div className="pie__contacto">
          <h3 className="pie__heading">Contacto</h3>
          <ul className="pie__list">
            <li><a className="pie__link" href="mailto:contacto@celestialcandles.co">contacto@celestialcandles.co</a></li>
            <li><a className="pie__link" href={waHref} target="_blank" rel="noreferrer">WhatsApp: +57 300 546 6325</a></li>
            <li><span className="pie__small">Horario: Lun - Sáb, 9:00 a 18:00</span></li>
          </ul>
          <div className="pie__social">
            <a className="pie__socialBtn" href="https://instagram.com/celestial.candles.bm" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" className="pie__socialIcon" aria-hidden="true">
                <path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.5.9.5.5.7.9.9 1.5.2.5.4 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.9 1.5-.5.5-.9.7-1.5.9-.5.2-1.2.4-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.5-.9-.5-.5-.7-.9-.9-1.5-.2-.5-.4-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .9-1.5.5-.5.9-.7 1.5-.9.5-.2 1.2-.4 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.2 0-3.5 0-4.7.1-1 .1-1.6.2-2 .3-.5.2-.8.3-1.1.6-.3.3-.5.6-.6 1.1-.1.4-.2 1-.3 2-.1 1.2-.1 1.5-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.3 2 .1.5.3.8.6 1.1.3.3.6.5 1.1.6.4.1 1 .2 2 .3 1.2.1 1.5.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 2-.3.5-.2.8-.3 1.1-.6.3-.3.6-.5 1.1-.6.4-.1 1-.2 2-.3 1.2-.1 1.5-.1 4.7-.1Zm0 3.2a6.8 6.8 0 1 1 0 13.6 6.8 6.8 0 0 1 0-13.6Zm0 1.8a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm5.5-2.1a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"/>
              </svg>
            </a>
            <a className="pie__socialBtn" href={waHref} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" className="pie__socialIcon" aria-hidden="true">
                <path fill="currentColor" d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.46 0 .1 5.36.1 11.97c0 2.1.55 4.15 1.6 5.96L0 24l6.23-1.63a11.92 11.92 0 0 0 5.83 1.52h.01c6.6 0 11.96-5.36 11.96-11.97 0-3.2-1.24-6.21-3.51-8.44ZM12.07 21.3c-1.86 0-3.67-.5-5.25-1.44l-.38-.23-3.69.97.99-3.6-.25-.37a9.75 9.75 0 0 1-1.5-5.18C2 6.5 6.54 1.97 12.07 1.97c2.6 0 5.05 1.01 6.89 2.85a9.65 9.65 0 0 1 2.84 6.88c0 5.52-4.52 10.05-10.03 10.05Zm5.52-7.52c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.66.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.12.3-.32.44-.48.15-.16.2-.27.3-.46.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.48.71.3 1.27.48 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.73 2.02-1.43.25-.7.25-1.3.18-1.43-.07-.14-.27-.23-.57-.38Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="pie__bottom">
        <p className="pie__copy">© {year} Celestial Candles. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Pie

