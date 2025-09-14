import { HiMail, HiPhone, HiUserGroup } from "react-icons/hi";
import { CiShare2 } from "react-icons/ci";
import Img from "../../../public/9.jpg";
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export function Contact() {
  const contactOptions = [
    {
      bgcolor: "#DBEAFE",
      color: "#4b84fe",
      icon: HiMail,
      title: "Email Newsletter",
      description: "Get monthly updates on our programs and impact stories.",
      hasEmailForm: true,
    },
    {
      bgcolor: "#DCFCE7",
      color: "#60bca0",
      icon: HiPhone,
      title: "Contact Information",
      contactInfo: [
        "Phone: +1 (212) 555-0123",
        "Email: info@empoweringfutures.org",
        "Address: 125 W 125th St, New York, NY 10027",
      ],
    },
    {
      bgcolor: "#F3E8FF",
      color: "#993eec",
      icon: CiShare2 ,
      title: "Follow Us",
      hasSocialMedia: true,
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${Img.src})`,
      }}
    >
      <div className="container-custom">
        <div className="text-center mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join our community and stay updated on our latest programs, impact
            stories, and opportunities to get involved.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactOptions.map((option, index) => (
            <div key={index} className="text-center text-white">
              <div
                className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full"
                style={{ backgroundColor: option?.bgcolor }}
              >
                <option.icon
                  className="text-3xl"
                  style={{ color: option.color }}
                />
              </div>

              <h3 className="text-xl font-semibold mb-4">{option.title}</h3>

              {option.description && (
                <p className="text-gray-200 mb-6">{option.description}</p>
              )}

              {option.hasEmailForm && (
                <div className="flex max-w-sm mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-400"
                  />
                  <button className="bg-primary-500 hover:bg-primary-600 px-6 py-2 rounded-r-lg font-medium transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              )}

              {option.contactInfo && (
                <div className="space-y-2">
                  {option.contactInfo.map((info, infoIndex) => (
                    <p key={infoIndex} className="text-gray-200">
                      {info}
                    </p>
                  ))}
                </div>
              )}

              {option.hasSocialMedia && (
                <div className="flex justify-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm"><FaFacebookF /></span>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm"><FaTwitter /></span>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm"><FaInstagramSquare /></span>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm"><FaLinkedinIn /></span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
