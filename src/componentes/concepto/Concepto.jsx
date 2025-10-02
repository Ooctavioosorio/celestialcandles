import './Concepto.css'

function Concepto() {
  return (
    <section className="concepto" id="concepto">
      <div className="concepto__container">
        <div className="concepto__textos">
          <h2 className="concepto__titulo">Velas ecológicas, naturales y hechas a mano</h2>
          <p className="concepto__parrafo">
            Nuestras velas están elaboradas con <strong>cera de soja 100% natural</strong> y
            <strong> extractos aromáticos naturales</strong>. Cada pieza se vierte a mano
            con intención, para acompañar tus momentos de <em>meditación, oración</em> y
            conexión espiritual.
          </p>
          <p className="concepto__parrafo concepto__parrafo--sec">
            Diseñadas para crear un ambiente <strong>sereno y angelical</strong>, con
            fragancias suaves que elevan tu energía y tu espacio.
          </p>
        </div>
        <div className="concepto__imagen" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Concepto
