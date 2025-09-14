import { HiGlobeAlt } from "react-icons/hi";
import Image from "next/image";
import Img from "../../../public/10.jpg";
import Img1 from "../../../public/11.png";

export function WhyBothCountries() {
  return (
    <section
      className="section-padding bg-cover bg-center"
      style={{
        backgroundImage: ` url(${Img.src})`,
      }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src={Img1}
                alt="Cross-cultural collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Both New York & Morocco?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our founders' deep roots in both Harlem and Marrakech revealed
              striking similarities: communities rich in culture and resilience,
              yet facing parallel challenges in education, healthcare, and
              economic opportunity.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              This unique connection allows us to share best practices, cultural
              insights, and innovative solutions across continents. When a
              literacy program succeeds in Harlem, we adapt it for Marrakech.
              When a women's cooperative thrives in Morocco, we bring those
              lessons to New York.
            </p>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <HiGlobeAlt className="text-2xl text-primary-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Cross-Cultural Impact
                </h3>
              </div>
              <p className="text-gray-700">
                Our bi-continental approach creates a unique learning exchange
                that benefits both communities through shared wisdom and mutual
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
