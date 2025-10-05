import './Productos.css'

// Cargar imágenes específicas para la grilla 3x2
const allImages = import.meta.glob('/src/imagenes/**/*.{png,jpg,jpeg,webp,gif}', { eager: true, import: 'default' })
const GRID_IMAGES = [
  { folder: 'amorypaz', name: 'amorypaz1', nombre: 'Amor y Paz', descripcion: 'Breve descripción del producto.' },
  { folder: 'armonia', name: 'armonia1', nombre: 'Armonía', descripcion: 'Breve descripción del producto.' },
  { folder: 'felicidad', name: 'felicidad1', nombre: 'Felicidad', descripcion: 'Breve descripción del producto.' },
  { folder: 'gratitud', name: 'gratitud1', nombre: 'Gratitud', descripcion: 'Breve descripción del producto.' },
  { folder: 'prosperidad', name: 'prosperidad1', nombre: 'Prosperidad', descripcion: 'Breve descripción del producto.' },
]

function resolveImages() {
  return GRID_IMAGES.map(({ folder, name, nombre, descripcion }) => {
    const match = Object.entries(allImages).find(
      ([path]) => path.includes(`/imagenes/${folder}/`) && path.toLowerCase().includes(name.toLowerCase())
    )
    return match ? { src: match[1], nombre, descripcion } : null
  }).filter(Boolean)
}

function Productos() {
  const items = resolveImages()
  return (
    <section id="productos" className="prod2">
      <h2 className="prod2__title">Productos</h2>
      <p className="prod2__subtitle">Conoce nuestros mejores productos</p>

      <div className="prod2__grid">
        {items.map((it, i) => (
          <article className="prod2__card" key={i}>
            <div className="prod2__media">
              <img className="prod2__img" src={it.src} alt={it.nombre} />
            </div>
            <div className="prod2__body">
              <h3 className="prod2__name">{it.nombre}</h3>
              <p className="prod2__desc">{it.descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Productos
