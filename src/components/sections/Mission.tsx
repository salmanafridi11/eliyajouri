import { FaHeart } from "react-icons/fa";
import Image from 'next/image'
import Img from '../../../public/4.png'
import Img1 from '../../../public/5.png'

export function Mission() {
  return (
    <section 
      id="mission" 
      className="section-padding relative bg-cover bg-center"
      style={{
          backgroundImage: ` url(${Img.src})`
      }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed">
              We are dedicated to creating sustainable impact through education, public health 
              initiatives, and economic opportunity development. Our unique approach connects the 
              vibrant communities of Harlem, New York, and Marrakech, Morocco, fostering 
              cross-cultural understanding while addressing local needs.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed">
              Through comprehensive programs that respect cultural heritage while embracing 
              innovation, we empower individuals and families to build brighter futures for 
              themselves and their communities.
            </p>
            
            <div className="flex items-center  rounded-lg p-4">
              <FaHeart className="text-3xl text-[#D97706] mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Community-Centered Approach</h3>
                <p className="text-gray-200">
                  Every program is designed with community input and cultural sensitivity
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src={Img1}
                alt="Community members working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}