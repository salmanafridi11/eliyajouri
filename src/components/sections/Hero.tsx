"use client";
import { useRouter } from 'next/navigation'
import Img from '../../../public/3.png'
export function Hero() {
   const router=useRouter()
   const handleNavigate=()=>{
    router.push("/donation")
  }
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: ` url(${Img.src})`
      }}
    >
      <div className="container-custom text-center text-white z-10">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <p className="">Empowering Lives,<span className=" text-[#FCAD1D]">Building Futures.</span></p>
            
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Connecting communities across New York City and Morocco through education, 
            health, and sustainable development programs that create lasting change.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleNavigate} className="btn-primary text-lg px-8 py-4">
              Donate Now
            </button>
            
          </div>
        </div>
      </div>
    </section>
  )
}