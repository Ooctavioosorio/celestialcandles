import './Proceso.css'

const STEPS = [
  {
    n: 1,
    icon: '🕯️',
    title: 'Vertido & Bendición',
    desc: 'La cera de soja se vierte junto a extractos naturales y una intención espiritual.'
  },
  { n: 2, icon: '⏳', title: 'Reposo Inicial', desc: 'La cera comienza a tomar cuerpo mientras las fragancias se equilibran.' },
  { n: 3, icon: '🌿', title: 'Maduración Suave', desc: 'Los aceites aromáticos se integran profundamente, potenciando su esencia.' },
  { n: 4, icon: '✂️', title: 'Ajuste de Mecha', desc: 'Se revisa y ajusta cada mecha para lograr una combustión armoniosa.' },
  { n: 5, icon: '✨', title: 'Pulido & Cuidado', desc: 'Se perfeccionan detalles, se limpian bordes y se preparan etiquetas.' },
  { n: 6, icon: '🔮', title: 'Energización', desc: 'Cada vela se consagra con intención de propósito y energía positiva.' },
  { n: 7, icon: '📦', title: 'Empaque & Envío', desc: 'Listas para llegar a tu espacio y acompañar tus rituales.' }
]

function Proceso() {
  return (
    <section id="proceso" className="proceso">
      <h2 className="proceso__title">Proceso Celestial – 7 Días</h2>
      <p className="proceso__subtitle">
        Cada vela madura pacientemente durante siete días, asegurando una fragancia plena y una experiencia espiritual serena.
      </p>

      <ol className="proceso__grid">
        {STEPS.map((s) => (
          <li className="step" key={s.n}>
            <div className="step__badge" aria-hidden>
              <span className="step__num">{s.n}</span>
            </div>
            <div className="step__body">
              <h3 className="step__title">
                <span className="step__icon" aria-hidden>{s.icon}</span>
                {s.title}
              </h3>
              <p className="step__desc">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="proceso__ctaWrap">
        <a href="#kit" className="proceso__cta">Conoce nuestros Kits</a>
      </div>
    </section>
  )
}

export default Proceso

