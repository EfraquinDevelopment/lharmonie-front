import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OurHistory = () => {
  return (
   <section className="py-16 w-full  bg-[#F5F5F0]">
   <div className=" px-4 container mx-auto md:px-6">
     <div className="flex flex-col md:flex-row items-center gap-8">
       <div className="md:w-1/2">
         <h2 className="text-3xl font-bold mb-4 text-[#232323]">Nuestra Historia</h2>
         <p className="text-lg mb-4 text-[#232323]">
           Lharmonie nació de la pasión por el café y el deseo de crear un espacio donde cada taza cuente una historia. Desde nuestros humildes comienzos, hemos crecido para convertirnos en un destino querido por los amantes del café en toda la ciudad.
         </p>
         <p className="text-lg mb-4 text-[#232323]">
           Nuestro compromiso con la calidad, la sostenibilidad y la comunidad nos ha permitido expandirnos a múltiples locaciones, cada una con su propio carácter pero todas unidas por nuestra dedicación a ofrecer la mejor experiencia de café posible.
         </p>
         <Button>
           <Link href="/sobre-nosotros">Conoce Más Sobre Nosotros</Link>
         </Button>
       </div>
       <div className="md:w-1/2">
         <Image
           src="/test-1.png"
           alt="Lharmonie Café"
           width={500}
           height={500}
           className="rounded-lg"
         />
       </div>
     </div>
   </div>
 </section>
  )
}

export default OurHistory