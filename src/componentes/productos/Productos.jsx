import './Productos.css'

// Cargar imágenes específicas para la grilla 3x2
const allImages = import.meta.glob('/src/imagenes/**/*.{png,jpg,jpeg,webp,gif}', { eager: true, import: 'default' })
const GRID_IMAGES = [
  { folder: 'gratitud', name: 'gratitud1', nombre: 'Gratitud', descripcion: 'Agradecer y elevar la vibración del corazón. Fragancias: Vainilla suave, notas cítricas y flor de azahar.' },
  { folder: 'prosperidad', name: 'prosperidad1', nombre: 'Prosperidad', descripcion: 'Atraer abundancia y oportunidades. Fragancias: Canela ligera, sándalo y cítricos verdes.' },
  { folder: 'armonia', name: 'armonia1', nombre: 'Armonía', descripcion: 'Equilibrar energía y pensamientos. Fragancias: Lavanda, bergamota y té blanco.' },
  { folder: 'felicidad', name: 'felicidad1', nombre: 'Felicidad', descripcion: 'Expandir alegría y optimismo. Fragancias: Frutos amarillos y pétalos dulces.' },
  { folder: 'amorypaz', name: 'amorypaz1', nombre: 'Amor y Paz', descripcion: 'Cultivar compasión, calma y unión. Fragancias: Rosa suave, vainilla blanca y almizcle limpio.' },
  { folder: 'sangabriel', name: 'sangabriel1', nombre: 'Arcángel San Gabriel', descripcion: 'Guiar y comunicar con claridad el propósito del alma. Fragancias: Sándalo puro con notas suaves de incienso.' },
  { folder: 'sanmiguel', name: 'sanmiguel1', nombre: 'Arcángel San Miguel', descripcion: 'Proteger, limpiar y fortalecer la energía interior. Fragancias: Sándalo intenso con toque amaderado.' },
  { folder: 'salmo91', name: 'salmo91_1', nombre: 'Salmo 91', descripcion: 'Invocar fe, protección y serenidad espiritual. Fragancias: Flores árabes y esencia mística.' },
  { folder: '', name: 'proposito', nombre: 'Renacer', descripcion: 'Propósito: Renovar la energía emocional y abrir el corazón a nuevos comienzos. Fragancias: Vainilla francesa con matices suaves de flor blanca.' },
]

function resolveImages() {
  return GRID_IMAGES.map(({ folder, name, nombre, descripcion }) => {
    let match
    const hasFolder = typeof folder === 'string' && folder.trim().length > 0
    const hasName = typeof name === 'string' && name.trim().length > 0

    if (hasFolder && hasName) {
      match = Object.entries(allImages).find(
        ([path]) => path.includes(`/imagenes/${folder}/`) && path.toLowerCase().includes(name.toLowerCase())
      )
    } else if (hasFolder && !hasName) {
      // Si no hay nombre específico, toma la primera imagen disponible en la carpeta
      match = Object.entries(allImages).find(
        ([path]) => path.includes(`/imagenes/${folder}/`)
      )
    } else if (!hasFolder && hasName) {
      // Sin carpeta: busca por nombre en cualquier ruta de imagen
      match = Object.entries(allImages).find(
        ([path]) => path.toLowerCase().includes(name.toLowerCase())
      )
    }

    return match ? { src: match[1], nombre, descripcion } : null
  }).filter(Boolean)
}

function Productos() {
  const items = resolveImages()
  return (
    <section id="productos" className="prod2">
      <h2 className="prod2__title">Productos</h2>
      <p className="prod2__subtitle">Conoce nuestros mejores productos</p>
      <p className="prod2__note">
        Vela de propósito: <strong>$58.000</strong>. Vela individual 250 g: <strong>$47.500</strong>. Las velas de 450 g se venden solo dentro de los kits.
      </p>

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
