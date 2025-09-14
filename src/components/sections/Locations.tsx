import { HiLocationMarker } from "react-icons/hi";
import Image from "next/image";
import Img from "../../../public/6.jpg";
import Img1 from "../../../public/7.png";
import Img2 from "../../../public/8.png";
import { BsBuildings } from "react-icons/bs";
import { TbBuildingCastle } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
export function Locations() {
  const locations = [
    {
      name: "New York City",
      flag: <BsBuildings />,
      image:Img1,
      programs: [
        "After-school tutoring and mentorship programs",
        "Immigrant family support and integration services",
        "Community health outreach and wellness programs",
        "Youth leadership and career development",
      ],
    },
    {
      name: "Morocco",
      flag: <TbBuildingCastle />,
      image:Img2,
      programs: [
        "Education and literacy programs for all ages",
        "Women's empowerment and entrepreneurship training",
        "Healthcare access and preventive medicine",
        "Cultural preservation and sustainable development",
      ],
    },
  ];

  return (
    <section
      className="section-padding bg-cover bg-center"
      style={{
        backgroundImage: ` url(${Img.src})`,
      }}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Where We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our programs span two continents, connecting communities through
            shared values and mutual support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <span
                  className="text-2xl mr-4 p-3  rounded-full"
                  style={{
                    backgroundColor:
                      location.name == "Morocco" ? "#FFEDD5" : "#DBEAFE",
                    color: location.name == "Morocco" ? "#de8520" : "#5285f0",
                  }}
                >
                  {location.flag}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {location.name}
                </h3>
              </div>

              <div className="aspect-[3/2] relative rounded-lg overflow-hidden mb-6">
                <Image
                  src={location.image}
                  alt={`${location.name} location`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3">
                {location.programs.map((program, programIndex) => (
                  <div key={programIndex} className="flex items-start">
                    <TiTick  className="text-[#60bca0] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{program}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
