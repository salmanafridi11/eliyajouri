import { HiHand, HiCurrencyDollar, HiUserGroup } from "react-icons/hi";
import Img from "../../../public/9.jpg";
export function GetInvolved() {
  const involvementOptions = [
    {
      bgcolor: "#DBEAFE",
      color: "#4b84fe",
      icon: HiHand,
      title: "Volunteer",
      description:
        "Share your skills and passion with our communities. From tutoring to program coordination, there's a place for everyone.",
      buttonText: "Join Our Team",
    },
    {
      bgcolor: "#DCFCE7",
      color: "#059669",
      icon: HiCurrencyDollar,
      title: "Donate",
      description:
        "Your financial support directly funds programs that transform lives. Every dollar creates measurable impact.",
      buttonText: "Make a Donation",
    },
    {
      bgcolor: "#F3E8FF",
      color: "#9333ea",
      icon: HiUserGroup,
      title: "Partner",
      description:
        "Collaborate with us on initiatives that align with your organization's mission and values.",
      buttonText: "Explore Partnership",
    },
  ];

  return (
    <section
      className="section-padding relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${Img.src})`,
      }}
    >
      <div className="container-custom">
        <div className="text-center mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join us in creating lasting change. Every contribution, whether
            time, resources, or expertise, makes a meaningful difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {involvementOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ backgroundColor: option.bgcolor }}
              >
                <option.icon
                  className="text-2xl"
                  style={{
                    color: option.color,
                  }}
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {option.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {option.description}
              </p>

              <button className="btn-primary w-full">
                {option.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
