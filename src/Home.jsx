import Encabezado from "./componentes/encabezado/Encabezado";
import Concepto from "./componentes/concepto/Concepto";
import Productos from "./componentes/productos/Productos";
import Kit from "./componentes/kit/Kit";
import Proceso from "./componentes/proceso/Proceso";
import CtaFinal from "./componentes/ctaFinal/CtaFinal";
import Testimonios from "./componentes/testimonios/Testimonios";
import Pie from "./componentes/footer/Pie";
function Home() {

  return (
    <>
      <Encabezado/>
      <Concepto/>
      <Productos/>
      <Kit/>
      <Proceso/>
      <Testimonios/>
      <CtaFinal/>
      <Pie/>
    </>
  )
} 

export default Home
