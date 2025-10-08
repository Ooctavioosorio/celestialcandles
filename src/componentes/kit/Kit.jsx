import './Kit.css'

// Carga flexible de imágenes desde /src/imagenes
const allImages = import.meta.glob('/src/imagenes/**/*.{png,jpg,jpeg,webp,gif}', { eager: true, import: 'default' })

const KITS = [
  {
    key: 'kit450',
    folder: 'amorypaz',
    name: 'amorypazkit2',
    titulo: 'Kit Celestial – 450 g',
    descShort: 'Un ritual completo para conectar con tu energía interior.',
    descLong:
      'Incluye una vela natural de 450 gramos, una vela decorativa de obsequio, una tarjeta con oración personalizada y un palo santo para acompañar tu momento espiritual.',
    precio: '$95.000 COP mas envio ',
    entrega: '7 días (maduración de esencias).'
  },
  {
    key: 'kitduo',
    folder: 'kits',
    name: 'kits',
    titulo: 'Kit Dúo Celestial – 2×250 g',
    descShort: 'Equilibrio y armonía en pareja o para dos espacios.',
    descLong:
      'Incluye dos velas naturales de 250 gramos cada una, hechas con cera de soja, extractos naturales y fragancias puras.',
    precio: '$95.000 COP mas envio ',
    entrega: '7 días (maduración de esencias).'
  }
]

function resolveKitImages() {
  return KITS.map((k) => {
    const match = Object.entries(allImages).find(
      ([path]) => path.includes(`/imagenes/${k.folder}/`) && path.toLowerCase().includes(k.name.toLowerCase())
    )
    return match ? { ...k, src: match[1] } : { ...k, src: '' }
  })
}

function Kit() {
  const items = resolveKitImages()
  return (
    <section id="kit" className="kit">
      <h2 className="kit__title">Kits</h2>
      <p className="kit__subtitle">Elige tu experiencia y escoge tu aroma y propósito desde la sección Productos.</p>

      <div className="kit__stack">
        {items.map((it, idx) => (
          <article
            key={it.key}
            className={`kitRow kitRow--imgLeft`}
          >
            <div className="kitRow__media">
              {it.src ? (
                <img className="kitRow__img" src={it.src} alt={it.titulo} />
              ) : (
                <div className="kitRow__ph" aria-label="Imagen del kit" />
              )}
            </div>
            <div className="kitRow__text">
              <h3 className="kitRow__title">{it.titulo}</h3>
              <p className="kitRow__short">{it.descShort}</p>
              <p className="kitRow__long">{it.descLong}</p>
              <div className="kitRow__meta">
                <span className="kitRow__price">Precio: {it.precio}</span>
                <span className="kitRow__time">Tiempo de entrega: {it.entrega}</span>
              </div>
              <p className="kitRow__note">
                Puedes escoger la vela y su esencia en la <a href="#productos" className="kitRow__link">sección Productos</a>.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Kit

