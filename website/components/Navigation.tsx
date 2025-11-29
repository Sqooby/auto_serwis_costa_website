'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/uslugi', label: 'Usługi' },
    { href: '/opinie', label: 'Opinie' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-navy/95 backdrop-blur-lg shadow-2xl'
        : 'bg-navy/80 backdrop-blur-sm'
    }`}>
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-costa-blue via-costa-turquoise to-costa-green" />

      <div className="container-custom mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Enhanced Design */}
          <Link href="/" className="group flex items-center gap-3 hover:opacity-90 transition-all duration-300">
            <div className="relative">
              {/* Animated Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-costa-blue to-costa-turquoise rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />

              {/* Logo Icon */}
              <div className="relative w-12 h-12 bg-gradient-to-br from-costa-blue to-costa-turquoise rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-white leading-tight">
                AUTO SERVICE
              </span>
              <span className="text-sm font-heading font-semibold bg-gradient-to-r from-costa-blue to-costa-turquoise bg-clip-text text-transparent">
                COSTA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group text-white hover:text-costa-blue transition-colors font-heading font-medium text-sm tracking-wide"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-costa-blue to-costa-turquoise group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Call Button */}
            <a
              href="tel:+48880378675"
              className="group relative px-6 py-3 bg-gradient-to-r from-costa-green to-green-600 text-white font-heading font-bold text-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:shadow-costa-green/50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="relative flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>880 378 675</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 text-white focus:outline-none flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-white/10 pt-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-white hover:text-costa-blue hover:bg-white/5 rounded-lg transition-all duration-300 font-heading font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Call Button */}
            <a
              href="tel:+48880378675"
              className="block mt-4 px-6 py-4 bg-gradient-to-r from-costa-green to-green-600 text-white font-heading font-bold text-center rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>880 378 675</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
