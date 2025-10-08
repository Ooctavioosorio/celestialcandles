import { useEffect, useMemo, useState } from 'react'
import './Encabezado.css'
// Carga flexible de imagen sin depender de la extensión
const allImages = import.meta.glob('/src/imagenes/**/*.{png,jpg,jpeg,webp,gif}', { eager: true, import: 'default' })

// Imagen fija del hero (sin carrusel)
function getFixedImage() {
  const folder = 'armonia'
  const name = 'armonia2'
  const match = Object.entries(allImages).find(
    ([path]) => path.includes(`/imagenes/${folder}/`) && path.toLowerCase().includes(name.toLowerCase())
  )
  return match ? match[1] : null
}

function Encabezado() {
  const hero = useMemo(() => getFixedImage(), [])
  const [activeId, setActiveId] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  // Observa secciones para resaltar el link activo en la barra
  useEffect(() => {
    const ids = ['concepto', 'kit', 'proceso', 'productos']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      { root: null, rootMargin: '0px 0px -40% 0px', threshold: [0.3, 0.5, 0.7] }
    )

    sections.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const waHref = `https://wa.me/573008125143?text=${encodeURIComponent('Hola Celestial Candles, me interesa conocer sus productos')}`
  const handleNavClick = () => {
    // Al hacer click en un enlace del menú en móvil, cerrar el dropdown
    if (menuOpen) setMenuOpen(false)
  }

  return (
    <header className="enc">
      <nav className="enc__nav" aria-label="Navegación principal">
        <div className="enc__bar">
          {/* Botón hamburguesa solo visible en móvil */}
          <button
            className="enc__burger"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="enc-menu"
            onClick={() => setMenuOpen((v) => !v)}
            type="button"
          >
            <span className="enc__burgerLine" aria-hidden="true" />
            <span className="enc__burgerLine" aria-hidden="true" />
            <span className="enc__burgerLine" aria-hidden="true" />
          </button>
          <div className="enc__socialGroup">
            <a
              className="enc__social enc__social--ig"
              href="https://instagram.com/celestial.candles.bm"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="enc__socialIcon" aria-hidden="true">
                <path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.5.9.5.5.7.9.9 1.5.2.5.4 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.9 1.5-.5.5-.9.7-1.5.9-.5.2-1.2.4-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.5-.9-.5-.5-.7-.9-.9-1.5-.2-.5-.4-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .9-1.5.5-.5.9-.7 1.5-.9.5-.2 1.2-.4 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.2 0-3.5 0-4.7.1-1 .1-1.6.2-2 .3-.5.2-.8.3-1.1.6-.3.3-.5.6-.6 1.1-.1.4-.2 1-.3 2-.1 1.2-.1 1.5-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.3 2 .1.5.3.8.6 1.1.3.3.6.5 1.1.6.4.1 1 .2 2 .3 1.2.1 1.5.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 2-.3.5-.2.8-.3 1.1-.6.3-.3.5-.6.6-1.1.1-.4.2-1 .3-2 .1-1.2.1-1.5.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.3-2-.2-.5-.3-.8-.6-1.1-.3-.3-.6-.5-1.1-.6-.4-.1-1-.2-2-.3-1.2-.1-1.5-.1-4.7-.1Zm0 3.2a6.8 6.8 0 1 1 0 13.6 6.8 6.8 0 0 1 0-13.6Zm0 1.8a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm5.5-2.1a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"/>
              </svg>
            </a>
            <a
              className="enc__social enc__social--wa"
              href={waHref}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="enc__socialIcon" aria-hidden="true">
                <path fill="currentColor" d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.46 0 .1 5.36.1 11.97c0 2.1.55 4.15 1.6 5.96L0 24l6.23-1.63a11.92 11.92 0 0 0 5.83 1.52h.01c6.6 0 11.96-5.36 11.96-11.97 0-3.2-1.24-6.21-3.51-8.44ZM12.07 21.3c-1.86 0-3.67-.5-5.25-1.44l-.38-.23-3.69.97.99-3.6-.25-.37a9.75 9.75 0 0 1-1.5-5.18C2 6.5 6.54 1.97 12.07 1.97c2.6 0 5.05 1.01 6.89 2.85a9.65 9.65 0 0 1 2.84 6.88c0 5.52-4.52 10.05-10.03 10.05Zm5.52-7.52c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.66.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.12.3-.32.44-.48.15-.16.2-.27.3-.46.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.48.71.3 1.27.48 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.73 2.02-1.43.25-.7.25-1.3.18-1.43-.07-.14-.27-.23-.57-.38Z"/>
              </svg>
            </a>
          </div>
          <ul id="enc-menu" className={`enc__menu${menuOpen ? ' is-open' : ''}`}>
            <li><a onClick={handleNavClick} className={`enc__link${activeId==='concepto' ? ' is-active' : ''}`} href="#concepto">Proposito</a></li>
            <li><a onClick={handleNavClick} className={`enc__link${activeId==='productos' ? ' is-active' : ''}`} href="#productos">Productos</a></li>
            <li><a onClick={handleNavClick} className={`enc__link${activeId==='kit' ? ' is-active' : ''}`} href="#kit">Kit</a></li>
            <li><a onClick={handleNavClick} className={`enc__link${activeId==='proceso' ? ' is-active' : ''}`} href="#proceso">Proceso</a></li>
          </ul>
          <div className="enc__spacer" aria-hidden="true" />
        </div>
      </nav>

      <div className="enc__hero">
        <div className="enc__media">
          {hero ? (
            <img className="enc__img" src={hero} alt="Vela Celestial Candles - Armonía" />
          ) : (
            <div className="enc__placeholder" aria-label="Imagen de producto" />
          )}
        </div>
        <div className="enc__copy">
          <h1 className="enc__title">Ilumina tu espíritu con la esencia del cielo.</h1>
          <p className="enc__subtitle">Velas 100% ecológicas, naturales y con <strong>propósito</strong>.</p>
          <a className="enc__btn" href={waHref} target="_blank" rel="noreferrer">Escríbenos por WhatsApp</a>
        </div>
      </div>
    </header>
  )
}

export default Encabezado