import './Testimonios.css'

function Testimonios() {
  const items = [
    {
      name: 'Ana Rodríguez',
      role: 'Diseñadora de interiores',
      text:
        'Las velas elevaron por completo la energía de mi sala. Aroma sutil, sensación de calma inmediata y un diseño que enamora.',
      rating: 5,
    },
    {
      name: 'Carlos Mendoza',
      role: 'Consultor de bienestar',
      text:
        'Ideal para mis sesiones: equilibran el ambiente y ayudan a que mis clientes se concentren y respiren mejor.',
      rating: 5,
    },
    {
      name: 'Sofía García',
      role: 'Emprendedora',
      text:
        'Encender una de estas velas se ha convertido en mi ritual para iniciar el día con intención y claridad.',
      rating: 5,
    },
  ]

  return (
    <section className="testi" id="testimonios">
      <div className="testi__head">
        <h2 className="testi__title">Testimonios</h2>
        <p className="testi__subtitle">
          Voces reales que han sentido la calma y armonía de nuestras velas.
        </p>
      </div>

      <div className="testi__grid">
        {items.map((t, i) => (
          <article className="testi__card" key={i}>
            <header className="testi__header">
              <div className="testi__avatar" aria-hidden="true">
                {t.name.charAt(0)}
              </div>
              <div className="testi__meta">
                <div className="testi__name">{t.name}</div>
                <div className="testi__role">{t.role}</div>
              </div>
              <div className="testi__stars" aria-label={`${t.rating} de 5 estrellas`}>
                {'★★★★★'.slice(0, t.rating)}
              </div>
            </header>

            <p className="testi__text">
              <span className="testi__quoteMark" aria-hidden="true">“</span>
              {t.text}
              <span className="testi__quoteMark" aria-hidden="true">”</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonios
