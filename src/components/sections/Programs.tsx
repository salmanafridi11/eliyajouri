import {
  HiAcademicCap,
  HiHeart,
  HiSparkles,
  HiOfficeBuilding,
} from "react-icons/hi";
import Img from "../../../public/9.jpg";
export function Programs() {
  const programs = [
    {
      bgcolor: "#DBEAFE",
      color: "#4b84fe",
      icon: HiAcademicCap,
      title: "Education & Literacy",
      description:
        "Comprehensive educational programs from early childhood through adult literacy, including STEM initiatives and vocational training.",
    },
    {
      bgcolor: "#F3E8FF",
      color: "#9333ea",
      icon: HiSparkles,
      title: "Women & Girls Empowerment",
      description:
        "Leadership development, entrepreneurship training, and advocacy programs that empower women and girls to reach their full potential.",
    },
    {
      bgcolor: "#DCFCE7",
      color: "#059669",
      icon: HiHeart,
      title: "Health & Wellness",
      description:
        "Preventive healthcare, mental health support, nutrition education, and community wellness programs tailored to local needs.",
    },
    {
      bgcolor: "#FFEDD5",
      color: "#d97706",
      icon: HiOfficeBuilding,
      title: "Community Development",
      description:
        "Sustainable economic development, infrastructure improvement, and capacity building that strengthens entire communities.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our comprehensive programs address the most critical needs in our
            communities through proven, culturally-sensitive approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16  rounded-full mb-6"
                  style={{ backgroundColor: program.bgcolor }}
                >
                  <program.icon
                    className="text-2xl "
                    style={{
                      color: program.color,
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
