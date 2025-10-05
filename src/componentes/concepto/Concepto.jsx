import './Concepto.css'

function Concepto() {
  return (
    <section id="concepto" className="con">
      <h2 className="con__title">Propósito</h2>

      <div className="con__grid">
        <article className="con__card">
          <div className="con__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="con__iconSvg" focusable="false" aria-hidden>
              <path fill="currentColor" d="M5 13c0 3.866 3.134 7 7 7 3.53 0 6.462-2.613 6.94-6h-2.02A5.998 5.998 0 0 1 12 18c-3.314 0-6-2.686-6-6 0-2.89 2.05-5.297 4.77-5.87V4.08C7.2 4.67 5 8.06 5 13Z"/>
            </svg>
          </div>
          <h3 className="con__cardTitle">100% Natural</h3>
          <p className="con__cardText">Desde la cera hasta el pabilo, todo es ecológico.</p>
        </article>
        <article className="con__card">
          <div className="con__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="con__iconSvg" focusable="false" aria-hidden>
              <path fill="currentColor" d="M9 2l1.5 4.5L15 8l-4.5 1.5L9 14 7.5 9.5 3 8l4.5-1.5L9 2Zm9 6 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"/>
            </svg>
          </div>
          <h3 className="con__cardTitle">Esencia</h3>
          <p className="con__cardText">Inspiradas en lo angelical, lo puro y lo espiritual.</p>
        </article>
        <article className="con__card">
          <div className="con__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="con__iconSvg" focusable="false" aria-hidden>
              <path fill="currentColor" d="M12.1 18.55 12 18.65l-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5 18.5 5 20 6.5 20 8.5c0 2.89-3.14 5.74-7.9 10.05Z"/>
            </svg>
          </div>
          <h3 className="con__cardTitle">Valores</h3>
          <p className="con__cardText">Más que luz: una herramienta para meditar y orar.</p>
        </article>
      </div>

      <div className="con__cta">
        <a className="con__btn" href="#productos">Nuestra Tienda</a>
      </div>
    </section>
  )
}

export default Concepto

