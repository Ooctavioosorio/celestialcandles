import './CtaFinal.css'

function CtaFinal() {
  const waNumber = '573008125143' // número unificado, sin +
  const waText = encodeURIComponent('Hola Celestial Candles, me interesa conocer sus productos')
  const waLink = `https://wa.me/${waNumber}?text=${waText}`

  return (
    <section className="cta" id="cta">
      <div className="cta__inner">
        <h2 className="cta__title">Lleva armonía a tu espacio hoy</h2>
        <p className="cta__subtitle">
          Aromas que elevan tu energía. Diseños que inspiran. Hechas con intención.
        </p>

        <div className="cta__actions">
          <a className="cta__btn" href={waLink} target="_blank" rel="noopener noreferrer">
            Escríbenos por WhatsApp
          </a>
          <span className="cta__secure">Compra segura • Respuesta rápida</span>
        </div>
      </div>
    </section>
  )
}

export default CtaFinal
