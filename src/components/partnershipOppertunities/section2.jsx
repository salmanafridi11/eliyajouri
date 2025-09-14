import {
  HiAcademicCap,
  HiHeart,
  HiSparkles,
  HiOfficeBuilding,
} from "react-icons/hi";
import Img from "../../../public/9.jpg";
import { TiTick } from "react-icons/ti";
function Section2() {
  const programs = [
    {
      bgcolor: "#DBEAFE",
      color: "#4b84fe",
      icon: HiAcademicCap,
      title: "Corporate Sponsorship",
      description:
        "Strategic partnerships with corporations seeking meaningful social impact through financial support, employee engagement, and brand alignment.",
      features: [
        " Program funding and sponsorship",
        "Employee volunteer programs",
        "Corporate social responsibility initiatives",
        "Brand partnership opportunities",
      ],
      projectName: "Example Project",
      projectDescription:
        "Microsoft's partnership funded our digital literacy program, reaching 500+ students across both NYC and Morocco with technology training.",
    },
    {
      bgcolor: "#F3E8FF",
      color: "#9333ea",
      icon: HiSparkles,
      title: "Strategic Partnership",
      description:
        "Long-term strategic alliances for mutual growth and success.",
      features: [
        "Local organization collaborations",
        "Faith-based community partnerships",
        "Cultural center alliances",
        "Neighborhood association support",
      ],
      projectName: "Example Project",
      projectDescription:
        "Partnership with Harlem Children's Zone expanded our after-school programs to serve an additional 200 students with comprehensive support services.",
    },
    {
      bgcolor: "#DCFCE7",
      color: "#059669",
      icon: HiHeart,
      title: "Technology Integration",
      description:
        "Seamless technology partnerships and integration solutions.",
      features: [
        "Research collaboration projects",
        "Student internship programs",
        "Faculty expertise sharing",
        "Academic conference partnerships",
      ],
      projectName: "Example Project",
      projectDescription:
        "Columbia University's School of Public Health partnered with us to research health outcomes, leading to improved program design and $2M in additional funding.",
    },
    {
      bgcolor: "#FFEDD5",
      color: "#d97706",
      icon: HiOfficeBuilding,
      title: "Business Partnership",
      description:
        "Comprehensive business collaboration and growth opportunities.",
      features: [
        "Policy advocacy initiatives",
        "Government grant partnerships",
        "Public service collaborations",
        "International development projects",
      ],
      projectName: "Example Project",
      projectDescription:
        "NYC Department of Education partnership integrated our literacy curriculum into 15 public schools, directly impacting 3,000+ students annually.",
    },
  ];

  return (
    <section
      id="programs"
      className="section-padding relative bg-cover bg-center"
      style={{
        backgroundImage: ` url(${Img.src})`,
      }}
    >
      <div className="container-custom">
        <div className="text-center mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partnership Types
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We offer diverse partnership opportunities designed to meet your
            specific business needs and growth objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className=" ">
                <div className="flex justify-center">
                  <div
                    className="text-center flex items-center justify-center w-16 h-16  rounded-full mb-6"
                    style={{ backgroundColor: program.bgcolor }}
                  >
                    <program.icon
                      className="text-2xl "
                      style={{
                        color: program.color,
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center ">
                  {program.title}
                </h3>

                <p className="text-gray-600 leading-relaxed  text-center h-[150px]">
                  {program.description}
                </p>

                <div className="space-y-3  h-[180px]">
                  {program?.features?.map((item, programIndex) => (
                    <div key={programIndex} className="flex items-start">
                      <TiTick className="text-[#60bca0] mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div
                  className="space-y-3 p-4 mt-12 rounded-xl"
                  style={{ backgroundColor: program.bgcolor }}
                >
                  <p className="text-gray-600 leading-relaxed font-bold text-start ">
                    {program.projectName}
                  </p>
                  <p className="text-gray-600 leading-relaxed  text-start ">
                    {program.projectDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Section2;
