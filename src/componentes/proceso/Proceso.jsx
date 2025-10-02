import './Proceso.css'

const pasos = [
  { dia: 1, titulo: 'Vertido & Bendición', desc: 'Se vierte la cera de soja con extractos naturales e intención espiritual.' },
  { dia: 2, titulo: 'Reposo Inicial', desc: 'La cera empieza a tomar cuerpo y se equilibran las fragancias.' },
  { dia: 3, titulo: 'Maduración Suave', desc: 'Los aceites aromáticos se integran profundamente en la cera.' },
  { dia: 4, titulo: 'Ajuste de Mecha', desc: 'Se revisa y ajusta la mecha para una combustión armoniosa.' },
  { dia: 5, titulo: 'Pulido & Cuidado', desc: 'Se perfecciona el acabado y se preparan las etiquetas.' },
  { dia: 6, titulo: 'Energización', desc: 'Se consagra la vela con intención de propósito.' },
  { dia: 7, titulo: 'Empaque & Envío', desc: 'Listas para llegar a tu espacio y acompañar tu ritual.' },
]

function Proceso() {
  return (
    <section className="proceso" id="proceso">
      <div className="proceso__header">
        <h2 className="proceso__titulo">Proceso de 7 Días</h2>
        <p className="proceso__intro">Cada vela madura pacientemente durante 7 días para asegurar una fragancia plena y una experiencia espiritual serena.</p>
      </div>

      <ol className="proceso__timeline">
        {pasos.map((p) => (
          <li key={p.dia} className="proceso__item">
            <div className="proceso__badge">{p.dia}</div>
            <div className="proceso__body">
              <h3 className="proceso__step">{p.titulo}</h3>
              <p className="proceso__desc">{p.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Proceso
