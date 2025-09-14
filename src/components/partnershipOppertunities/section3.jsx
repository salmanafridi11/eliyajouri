import { IoIosTrendingUp } from "react-icons/io";
import { CiBullhorn } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { SiRoundcube } from "react-icons/si";
import { LuAward } from "react-icons/lu";
import Img from "../../../public/10.jpg";
const benefits = [
  {
    bgcolor: "#DBEAFE",
    color: "#4b84fe",
    icon: IoIosTrendingUp,
    title: "Measurable Impact",
    description:
      "Access detailed impact reports and metrics showing the direct results of your partnership investment incommunity development.",
    percentage: "95%",
    metric: "Program completion rate",
  },
  {
    bgcolor: "#DCFCE7",
    color: "#059669",
    icon: CiBullhorn,
    title: "Brand Visibility",
    description:
      "Enhance your organization's reputation through association with meaningful social impact and community development initiatives.",
    percentage: "200%",
    metric: "Monthly social media reach",
  },
  {
    bgcolor: "#F3E8FF",
    color: "#9333ea",
    icon: FaUsers,
    title: "Employee Engagement",
    description:
      "Provide meaningful volunteer opportunities that boost employee satisfaction, team building, and corporate culture development.",
    percentage: "85%",
    metric: "Employee satisfaction increase",
  },
  {
    bgcolor: "#FFEDD5",
    color: "#EA580C",
    icon: TbWorld,
    title: "Cross-Cultural Exposure",
    description:
      "Gain unique insights into diverse markets and communities through our bi-continental programs spanning NYC and Morocco.",
    percentage: "60%",
    metric: "Continents of impact",
  },
  {
    bgcolor: "#FEE2E2",
    color: "#DC2626",
    icon: SiRoundcube,
    title: "Tax Benefits",
    description:
      "Maximize your charitable giving through our 501(c)(3) status, providing significant tax advantages for corporate and individual donors.",
    percentage: "150%",
    metric: "Tax-deductible donations",
  },
  {
    bgcolor: "#FEF9C3",
    color: "#CA8A04",
    icon: LuAward,
    title: "Recognition Program",
    description:
      "Receive public recognition through our annual partner appreciation events, social media features, and community acknowledgments.",
    percentage: "75%",
    metric: "Annual recognition events",
  },
];

function Section3() {
  return (
    <section
      className="bg-cover bg-center py-20 px-4"
      style={{
        backgroundImage: ` url(${Img.src})`,
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Partnership Benefits
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover the tangible and intangible benefits of partnering with our
            organization to create meaningful social impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-transparent border-0  transition-shadow duration-300"
            >
              <div className="text-center pb-4">
                <div
                  className="mx-auto w-16 h-16  rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: benefit.bgcolor }}
                >
                  <benefit.icon
                    className="h-8 w-8 "
                    style={{
                      color: benefit.color,
                    }}
                  />
                </div>

                <h1 className="text-lg font-bold text-gray-800">
                  {benefit.title}
                </h1>
                <div className="text-sm font-semibold text-orange-600"></div>
              </div>
              <div>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </div>
              <div
                className="p-4 font-bold  mb-2 text-center mt-6 rounded-xl"
                style={{
                  backgroundColor: benefit.bgcolor,
                  color: benefit.color,
                }}
              >
                {benefit.percentage}
                <p className="text-center mt-2 text-sm font-normal">
                  {benefit.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Section3;
