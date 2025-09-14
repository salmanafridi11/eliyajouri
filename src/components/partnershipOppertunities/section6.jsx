import React from "react";
import { FaStar, FaSquare } from "react-icons/fa";
import Img from "../../../public/9.jpg";

const Section6 = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Director of Corporate Social Responsibility",
      company: "Microsoft Corporation",
      image: "/api/placeholder/60/60",
      quote:
        "Our partnership has exceeded all expectations. The digital literacy program we co-developed has reached over 1,200 individuals across two continents, with 94% of participants reporting improved job prospects. The team's cultural sensitivity and program expertise made this collaboration seamless and impactful.",
      rating: 5,
      duration: "3-year partnership",
    },
    {
      id: 2,
      name: "Dr. Marcus Williams",
      title: "Chief Community Health Officer",
      company: "Mount Sinai Health System",
      image: "/api/placeholder/60/60",
      quote:
        "This partnership has transformed how we deliver healthcare to underserved communities. Through their community connections and cultural expertise, we've been able to provide preventive care to over 5,000 patients who previously had limited access to healthcare services.",
      rating: 5,
      duration: "2-year partnership",
    },
    {
      id: 3,
      name: "Carlos Rodriguez",
      title: "VP of Community Development",
      company: "JPMorgan Chase",
      image: "/api/placeholder/60/60",
      quote:
        "The financial literacy and entrepreneurship programs we've supported have created lasting economic impact. We've seen 200+ small businesses launched, with an average 40% increase in household income among program participants. Our employees are more engaged than ever through volunteer opportunities.",
      rating: 5,
      duration: "4-year partnership",
    },
    {
      id: 4,
      name: "Professor Lisa Kim",
      title: "Dean of Public Health",
      company: "Columbia University",
      image: "/api/placeholder/60/60",
      quote:
        "Our research collaboration has produced groundbreaking insights into cross-cultural health interventions. The data we've collected has informed policy recommendations and secured $2M in additional federal funding for community health initiatives. Our students gain invaluable real-world experience.",
      rating: 5,
      duration: "5-year partnership",
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: ` url(${Img.src})`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl  font-bold text-white mb-6">
              Partnership Success Stories
            </h2>
            <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
              Hear from our partners about the meaningful impact we've created
              together and the lasting relationships we've built
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                {/* Profile Header */}
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {testimonial.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 text-base">
                  "{testimonial.quote}"
                </blockquote>

                {/* Rating and Duration */}
                <div className="flex items-center justify-between">
                  <StarRating rating={testimonial.rating} />
                  <span className="text-sm font-medium text-gray-500">
                    {testimonial.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
