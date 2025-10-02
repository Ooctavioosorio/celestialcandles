import './Testimonios.css'

function Testimonios() {
  return (
    <section className="testimonios" id="testimonios">
      <div className="testimonios__header">
        <h2 className="testimonios__titulo">Testimonios</h2>
        <p className="testimonios__intro">Historias reales de personas que encendieron sus intenciones.</p>
      </div>

      <div className="testimonios__grid">
        <article className="testimonio">
          <p className="testimonio__texto">
            “La vela de Armonía me ayudó a encontrar calma en días difíciles. El aroma es suave y se siente una energía muy bonita.”
          </p>
          <p className="testimonio__autor">— Ana M., Medellín</p>
        </article>
      </div>

      <p className="testimonios__nota">Puedes reemplazar o agregar más testimonios cuando estés listo.</p>
    </section>
  )
}

export default Testimonios
