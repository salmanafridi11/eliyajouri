"use client";
import { useRouter } from "next/navigation";
import Img from "../../../public/15.png";
export function Footer() {
  const router = useRouter();
  const quickLinks = [
    { label: "Mission", href: "#mission" },
    { label: "Programs", href: "#programs" },
    { label: "Impact", href: "#impact" },
    { label: "Contact", href: "#contact" },
  ];

  const getInvolvedLinks = [
    { label: "Volunteer", href: "/join-volunteer" },
    { label: "Donate", href: "/donation" },
    { label: "Partner", href: "/partnership-opportunities" },
    { label: "Careers", href: "#careers" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Annual Reports", href: "#reports" },
  ];

  return (
    <footer
      className="bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${Img.src})`,
      }}
    >
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div>
            <div className="font-bold text-xl mb-4">Empowering Futures</div>
            <p className="text-gray-400 leading-relaxed">
              Empowering communities across New York City and Morocco through
              education, health, and sustainable development programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    onClick={() => router.push(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              {getInvolvedLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © 2024 Empowering Lives. Building Futures. 501(c)(3) Nonprofit
            Organization. EIN: 12-3456789. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
