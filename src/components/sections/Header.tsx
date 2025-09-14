"use client";
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import Img from '../../../public/1.png'
import Img1 from '../../../public/2.png'

import Image from 'next/image'
import { useRouter } from 'next/navigation';

export function Header() {
  const router=useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { label: 'Mission', href: '#mission' },
    { label: 'Programs', href: '#programs' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavigate=()=>{
    router.push("/donation")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm"
     style={{
        backgroundImage: ` url(${Img.src})`
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={()=>router.push('/')}>
            <Image src={Img1} alt='logo' />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-primary-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary" onClick={handleNavigate}>
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-700">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-white hover:text-primary-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4">
                <button className="btn-primary w-full" onClick={handleNavigate}>
                  Donate Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}