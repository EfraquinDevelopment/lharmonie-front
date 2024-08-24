import { CoffeeOutlined, BookOutlined, EnvironmentOutlined } from '@ant-design/icons';

import React from 'react'

const FeaturesSection = () => {
  return (

    <section className="py-16 w-full bg-white text-lharmonie-secondary">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 ">¿Por qué elegir Lharmonie?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                    <CoffeeOutlined className="text-[40px] mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Café de Calidad</h3>
                    <p>Seleccionamos los mejores granos para ofrecerte una experiencia única en cada taza.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <BookOutlined className="text-[40px] mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Ambiente Acogedor</h3>
                    <p>Un espacio perfecto para relajarte, leer un libro o trabajar mientras disfrutas de tu café.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <EnvironmentOutlined className="text-[40px] mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Múltiples Locaciones</h3>
                    <p>Encuentra tu Lharmonie favorito en diferentes puntos de la ciudad.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection