import './Kit.css'

const allImages = import.meta.glob('/src/imagenes/**/*.{png,jpg,jpeg,webp,gif}', { eager: true, import: 'default' })

function getKitImage() {
  // 1) Intentar imagen en carpeta kits/
  const fromKits = Object.entries(allImages).find(([path]) => path.includes('/imagenes/kits/'))
  if (fromKits) return fromKits[1]
  // 2) Buscar cualquier imagen con "kit" en las carpetas de cada vela
  const fromVelaKit = Object.entries(allImages).find(([path]) => /\/imagenes\/(gratitud|prosperidad|armonia|felicidad|amorypaz)\//.test(path) && path.toLowerCase().includes('kit'))
  return fromVelaKit ? fromVelaKit[1] : null
}

function Kit() {
  const kitImg = getKitImage()
  const message = encodeURIComponent('Hola Celestial Candles, quiero comprar el kit por $95.000 COP')
  const whatsAppHref = `https://wa.me/573005466325?text=${message}`

  return (
    <section className="kit" id="kit">
      <div className="kit__container">
        <div className="kit__left">
          <h2 className="kit__titulo">Kit Celestial</h2>
          <ul className="kit__incluye">
            <li>1 vela de 450 gr</li>
            <li>1 vela decorativa de obsequio</li>
            <li>1 tarjeta con oración personalizada</li>
            <li>1 palo santo</li>
          </ul>
          <p className="kit__precio"><span>$95.000</span> COP</p>
          <p className="kit__tiempo">Tiempo de entrega: 7 días (maduración de esencias)</p>
          <a className="kit__cta" href={whatsAppHref} target="_blank" rel="noreferrer">Comprar por WhatsApp</a>
        </div>
        <div className="kit__right">
          {kitImg ? (
            <img className="kit__img" src={kitImg} alt="Kit Celestial Candles" />
          ) : (
            <div className="kit__placeholder" aria-label="Imagen del kit no disponible" />
          )}
        </div>
      </div>
    </section>
  )
}

export default Kit
