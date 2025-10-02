import './CtaFinal.css'

function CtaFinal() {
  const message = encodeURIComponent('Hola Celestial Candles, quiero comprar un kit y recibir asesoría espiritual')
  const href = `https://wa.me/573005466325?text=${message}`

  return (
    <section className="ctaFinal" aria-label="Llamado a la acción final">
      <div className="ctaFinal__overlay" />
      <div className="ctaFinal__content">
        <h2 className="ctaFinal__frase">Ilumina tu espacio. Eleva tu energía.</h2>
        <p className="ctaFinal__sub">Acompañamos tu intención con velas naturales y un toque celestial.</p>
        <a className="ctaFinal__btn" href={href} target="_blank" rel="noreferrer">Comprar por WhatsApp</a>
      </div>
    </section>
  )
}

export default CtaFinal
