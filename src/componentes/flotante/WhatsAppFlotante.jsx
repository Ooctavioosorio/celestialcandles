import './WhatsAppFlotante.css'

function WhatsAppFlotante() {
  const waNumber = '573008125143'
  const waText = encodeURIComponent('Hola Celestial Candles, me interesa conocer sus productos')
  const waLink = `https://wa.me/${waNumber}?text=${waText}`

  return (
    <a
      href={waLink}
      className="waFloat"
      target="_blank"
      rel="noreferrer"
      aria-label="Contactarme por WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="waFloat__icon" aria-hidden="true">
        <path fill="currentColor" d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.46 0 .1 5.36.1 11.97c0 2.1.55 4.15 1.6 5.96L0 24l6.23-1.63a11.92 11.92 0 0 0 5.83 1.52h.01c6.6 0 11.96-5.36 11.96-11.97 0-3.2-1.24-6.21-3.51-8.44ZM12.07 21.3c-1.86 0-3.67-.5-5.25-1.44l-.38-.23-3.69.97.99-3.6-.25-.37a9.75 9.75 0 0 1-1.5-5.18C2 6.5 6.54 1.97 12.07 1.97c2.6 0 5.05 1.01 6.89 2.85a9.65 9.65 0 0 1 2.84 6.88c0 5.52-4.52 10.05-10.03 10.05Zm5.52-7.52c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.66.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.12.3-.32.44-.48.15-.16.2-.27.3-.46.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.48.71.3 1.27.48 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.73 2.02-1.43.25-.7.25-1.3.18-1.43-.07-.14-.27-.23-.57-.38Z"/>
      </svg>
    </a>
  )
}

export default WhatsAppFlotante
