import React from "react";
import {
  FaComments,
  FaFileAlt,
  FaSearch,
  FaBell,
  FaCheck,
  FaFolder,
} from "react-icons/fa";
import Img from "../../../public/10.jpg";
const Section5 = () => {
  const processSteps = [
    {
      id: 1,
      number: "1",
      bgcolor: "#DBEAFE",
      color: "#4b84fe",
      icon: FaComments,
      title: "Initial Consultation",
      description:
        "We begin with a comprehensive discussion to understand your organizations goals, values, and desired impact areas.",
      details: [
        "30-minute discovery call",
        "Needs assessment",
        "Goal alignment review",
        "Partnership fit evaluation",
      ],
    },
    {
      id: 2,
      number: "2",
      bgcolor: "#DCFCE7",
      color: "#059669",
      icon: FaFileAlt,
      title: "Proposal Development",
      description:
        "Together, we develop a detailed partnership proposal outlining objectives, activities, timelines, and expected outcomes.",
      details: [
        "Collaborative proposal drafting",
        "Budget development",
        "Timeline creation",
        "Success metrics definition",
      ],
    },
    {
      id: 3,
      number: "3",
      bgcolor: "#F3E8FF",
      color: "#9333ea",
      icon: FaSearch,
      title: "Review & Approval",
      description:
        "Our board and leadership team review the proposal to ensure alignment with our mission and organizational capacity.",
      details: [
        "Board review process",
        "Due diligence completion",
        "Legal compliance check",
        "Final approval decision",
      ],
    },
    {
      id: 4,
      number: "4",
      bgcolor: "#FFEDD5",
      color: "#EA580C",
      icon: FaBell,
      title: "Implementation",
      description:
        "We launch the partnership with clear communication channels, regular check-ins, and transparent progress reporting.",
      details: [
        "Partnership agreement signing",
        "Project kickoff meeting",
        "Regular progress updates",
        "Impact measurement & reporting",
      ],
    },
  ];

  const eligibilityRequirements = [
    "Demonstrated commitment to social impact and community development",
    "Alignment with our mission and values of empowerment and cultural sensitivity",
    "Financial stability and capacity for long-term commitment",
    "Willingness to participate in collaborative program development",
  ];

  const documentationNeeded = [
    "Organization overview and mission statement",
    "Financial statements or annual reports",
    "Partnership proposal with specific objectives",
    "References from previous nonprofit partnerships",
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage: ` url(${Img.src})`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl  font-bold text-gray-800 mb-6">
            Partnership Process
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our streamlined partnership process ensures alignment, transparency,
            and successful collaboration from initial contact to program
            implementation.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="text-center">
                {/* Step Icon */}
                <div className="relative mb-6">
                  <div
                    className=" rounded-full w-20 h-20 mx-auto flex items-center justify-center  relative z-10"
                    style={{ backgroundColor: step.bgcolor }}
                  >
                    <IconComponent
                      style={{
                        color: step.color,
                      }}
                      className="text-2xl "
                    />
                  </div>
                  <div className="absolute top-[-0.5rem] right-[6.5rem] bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold z-20">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="rounded-xl p-6 h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step Details */}
                  <ul className="text-center space-y-2">
                    {step.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-gray-600 "
                      >
                        <span className="text-orange-600 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Requirements Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Partnership Requirements & Criteria
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eligibility Requirements */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-6">
                Eligibility Requirements
              </h4>
              <div className="space-y-4">
                {eligibilityRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                      <FaCheck className="text-green-600 text-xs" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {requirement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documentation Needed */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-6">
                Documentation Needed
              </h4>
              <div className="space-y-4">
                {documentationNeeded.map((doc, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                      <FaFolder className="text-orange-600 text-xs" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {doc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
