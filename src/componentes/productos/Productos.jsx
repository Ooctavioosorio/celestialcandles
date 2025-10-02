import './Productos.css'

// Utilidad para obtener imágenes por carpeta con Vite (eager)
const allImages = import.meta.glob('/src/imagenes/**/*.{png,jpg,jpeg,webp,gif}', { eager: true, import: 'default' })

function getImagesForFolder(folder) {
  // Filtra todas las imágenes que están dentro de la carpeta dada
  const entries = Object.entries(allImages).filter(([path]) => path.includes(`/imagenes/${folder}/`))
  // Busca principal y kit, sin depender de extensión, solo por nombre
  const findByKeyword = (keyword) => {
    const match = entries.find(([path]) => path.toLowerCase().includes(keyword))
    return match ? match[1] : null
  }
  const principal = findByKeyword('principal') || (entries[0] ? entries[0][1] : null)
  const kit = findByKeyword('kit') || null
  return { principal, kit }
}

const PRODUCTOS = [
  {
    key: 'gratitud',
    nombre: 'Gratitud',
    proposito: 'Agradecer y elevar la vibración del corazón',
    fragancias: 'Vainilla suave, notas cítricas y flor de azahar',
  },
  {
    key: 'prosperidad',
    nombre: 'Prosperidad',
    proposito: 'Atraer abundancia y oportunidades',
    fragancias: 'Canela ligera, sándalo y cítricos verdes',
  },
  {
    key: 'armonia',
    nombre: 'Armonía',
    proposito: 'Equilibrar energía y pensamientos',
    fragancias: 'Lavanda, bergamota y té blanco',
  },
  {
    key: 'felicidad',
    nombre: 'Felicidad',
    proposito: 'Expandir alegría y optimismo',
    fragancias: 'Frutos amarillos y pétalos dulces',
  },
  {
    key: 'amorypaz',
    nombre: 'Amor y Paz',
    proposito: 'Cultivar compasión, calma y unión',
    fragancias: 'Rosa suave, vainilla blanca y almizcle limpio',
  },
]

function Productos() {
  return (
    <section className="productos" id="productos">
      <div className="productos__header">
        <h2 className="productos__titulo">Nuestras Velas con Propósito</h2>
        <p className="productos__intro">Cada vela está creada para acompañarte en un camino espiritual, con fragancias que elevan y armonizan tu espacio.</p>
      </div>

      <div className="productos__grid">
        {PRODUCTOS.map((p) => {
          const imgs = getImagesForFolder(p.key)
          return (
            <article key={p.key} className="producto">
              <div className="producto__imgwrap">
                {imgs.principal ? (
                  <img src={imgs.principal} alt={`Vela ${p.nombre}`} className="producto__img" />
                ) : (
                  <div className="producto__placeholder" aria-label={`Imagen no disponible para ${p.nombre}`} />
                )}
              </div>
              <div className="producto__body">
                <h3 className="producto__nombre">{p.nombre}</h3>
                <p className="producto__proposito">{p.proposito}</p>
                <p className="producto__fragancias"><strong>Fragancias:</strong> {p.fragancias}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Productos
