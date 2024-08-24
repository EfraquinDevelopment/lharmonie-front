import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecommendedProducts = () => {
  return (
    <section className="py-16 bg-[#F5F5F0] border-b border-[#232323]/10">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#232323]">Productos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((product) => (
                <div key={product} className="group cursor-pointer">
                  <div className="relative pt-[100%] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/test-2.png"
                      alt={`Producto ${product}`}
                      layout="fill"
                      objectFit="cover"
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1 relative inline-block text-[#232323]">
                    Producto {product}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#232323] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">Descripción breve del producto {product}</p>
                  <p className="text-lg font-bold text-[#232323]">$XX.XXX</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button>
                <Link href="/tienda">Ver Todos los Productos</Link>
              </Button>
            </div>
          </div>
        </section>
  )
}

export default RecommendedProducts