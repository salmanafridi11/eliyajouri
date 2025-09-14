import React from "react";
import {
  FaWindows,
  FaHospital,
  FaUniversity,
  FaGraduationCap,
  FaBuilding,
  FaChild,
} from "react-icons/fa";
import Img from "../../../public/9.jpg";
const Section4 = () => {
  const partners = [
    {
      id: 1,
      icon: FaWindows,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      name: "Microsoft Corporation",
      type: "Technology Partner",
      description:
        "Providing digital literacy training and technology resources to underserved communities in both New York and Morocco.",
      partnership: "3 years partnership",
      partnershipColor: "text-teal-600",
      impact: "$500K+ impact",
    },
    {
      id: 2,
      icon: FaHospital,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      name: "Mount Sinai Health System",
      type: "Healthcare Partner",
      description:
        "Supporting our community health initiatives with medical expertise, free clinics, and preventive care programs.",
      partnership: "2 years partnership",
      partnershipColor: "text-teal-600",
      impact: "5,000+ patients served",
    },
    {
      id: 3,
      icon: FaBuilding,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700",
      name: "JPMorgan Chase",
      type: "Financial Sponsor",
      description:
        "Funding our financial literacy and small business development programs while providing employee volunteers.",
      partnership: "4 years partnership",
      partnershipColor: "text-teal-600",
      impact: "200+ entrepreneurs trained",
    },
    {
      id: 4,
      icon: FaGraduationCap,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      name: "Columbia University",
      type: "Academic Partner",
      description:
        "Research collaboration on public health outcomes and student internship programs in community development.",
      partnership: "5 years partnership",
      partnershipColor: "text-teal-600",
      impact: "50+ student interns",
    },
    {
      id: 5,
      icon: FaUniversity,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      name: "NYC Department of Education",
      type: "Government Partner",
      description:
        "Integrating our literacy curriculum into public schools and providing after-school programming support.",
      partnership: "6 years partnership",
      partnershipColor: "text-teal-600",
      impact: "15 schools impacted",
    },
    {
      id: 6,
      icon: FaChild,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      name: "Harlem Children's Zone",
      type: "Community Partner",
      description:
        "Collaborative programming to expand educational opportunities and family support services in Harlem.",
      partnership: "3 years partnership",
      partnershipColor: "text-teal-600",
      impact: "800+ families served",
    },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: ` url(${Img.src})`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Current Partners
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We're proud to work with organizations that share our commitment to
            community empowerment and social change.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {partners.map((partner) => {
            const IconComponent = partner.icon;
            return (
              <div
                key={partner.id}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Partner Icon and Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`${partner.iconBg} p-3 rounded-xl flex-shrink-0`}
                  >
                    <IconComponent
                      className={`${partner.iconColor} text-2xl`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {partner.type}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {partner.description}
                </p>

                {/* Partnership Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span
                    className={`${partner.partnershipColor} text-sm font-semibold`}
                  >
                    {partner.partnership}
                  </span>
                  <span className="text-sm text-gray-600 font-medium">
                    {partner.impact}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-white opacity-30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-32 w-3 h-3 bg-white opacity-40 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white opacity-50 rounded-full animate-pulse delay-2000"></div>
    </section>
  );
};

export default Section4;
