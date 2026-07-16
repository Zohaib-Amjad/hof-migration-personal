'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Visa types', href: '/visa-types' },
  { label: 'Services', href: '/services' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesExpanded, setServicesExpanded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        className="w-full sticky lg:top-[-16px] top-0 left-0 z-50 flex justify-center px-4 pt-4 lg:-mb-[74px] transition-all duration-300"
      >
        {/* ── Nav Container ── */}
        <nav
          className={`w-full max-w-[1235px] flex items-center justify-between
                     bg-white rounded-[1000px]
                     px-5 py-[10px] transition-all duration-300
                     ${isScrolled ? 'shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-[#E0E0E0]/40' : ''}`}
        >
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative h-[38px] w-[185px]">
              <Image
                src="/images/hof-logo.webp"
                alt="HOF Migration"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden lg:flex items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              if (link.label === 'Services') {
                return (
                  <li key={link.href} className="relative group py-2">
                    <button
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: 500,
                        color: isActive ? '#171A1E' : '#6B6B69',
                        letterSpacing: '0.01em',
                      }}
                      className="px-[12px] py-[8px] transition-colors duration-150 hover:text-[#171A1E] flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{link.label}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-44 bg-white border border-[#E0E0E0] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                      {['A', 'B', 'C'].map((option) => (
                        <Link
                          key={option}
                          href="/services"
                          className="block px-4 py-2 text-[14px] font-medium text-[#6B6B69] hover:text-[#171A1E] hover:bg-[#F5F5F3] transition-colors duration-150"
                        >
                          Option {option}
                        </Link>
                      ))}
                    </div>
                  </li>
                )
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontWeight: 500,
                      color: isActive ? '#171A1E' : '#6B6B69',
                      letterSpacing: '0.01em',
                    }}
                    className="px-[12px] py-[8px] transition-colors duration-150 hover:text-[#171A1E]"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* ── Contact Us ── */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="group flex items-center gap-[10px]"
              style={{ textDecoration: 'none' }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#1a1a2e',
                  letterSpacing: '0.01em',
                  transition: 'color 150ms',
                }}
                className="group-hover:text-[#1a1a6e] transition-colors duration-150"
              >
                Contact Us
              </span>

              {/* Black circle arrow button */}
              <span
                className="flex items-center justify-center w-[34px] h-[34px] rounded-full
                           bg-[#0f1117]
                           shadow-[0_2px_8px_rgba(0,0,0,0.25)]
                           transition-all duration-200
                           group-hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="14"
                  height="14"
                  className="transition-transform duration-200 group-hover:rotate-45"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 p-1.5 rounded-lg
                       hover:bg-gray-100 transition-colors duration-150"
            onClick={() => {
              setMenuOpen(!menuOpen)
              if (menuOpen) setServicesExpanded(false)
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-[20px] h-[2px] bg-[#1a1a2e] rounded-full
                          transition-all duration-300
                          ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
            />
            <span
              className={`block w-[20px] h-[2px] bg-[#1a1a2e] rounded-full
                          transition-all duration-300
                          ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
            />
            <span
              className={`block w-[20px] h-[2px] bg-[#1a1a2e] rounded-full
                          transition-all duration-300
                          ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
            />
          </button>
        </nav>

        {/* ── Mobile Dropdown Menu ── */}
        <div
          className={`lg:hidden absolute top-[calc(100%-4px)] left-4 right-4
                      bg-white rounded-[12px] border border-[#e0e0e0]
                      shadow-[0_8px_32px_rgba(0,0,0,0.10)]
                      overflow-hidden
                      transition-all duration-300 ease-in-out
                      ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <div className="px-5 py-4 flex flex-col">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href

              if (link.label === 'Services') {
                return (
                  <div key={link.href} className="flex flex-col">
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      style={{
                        fontSize: '14px',
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? '#1a1a6e' : '#3a3a4a',
                        textDecoration: 'none',
                        padding: '11px 0',
                        borderBottom: index < navLinks.length - 1 && !servicesExpanded ? '1px solid #f0f0f2' : 'none',
                        transition: 'color 150ms',
                      }}
                      className="hover:text-[#1a1a6e] flex items-center justify-between w-full text-left cursor-pointer"
                    >
                      <span>{link.label}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-4 h-4 transition-transform duration-200 ${servicesExpanded ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {/* Mobile Submenu Options */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 flex flex-col bg-[#F9F9F8]/50 rounded-lg ${
                        servicesExpanded ? 'max-h-40 py-2 border-b border-[#f0f0f2]' : 'max-h-0'
                      }`}
                    >
                      {['A', 'B', 'C'].map((option) => (
                        <Link
                          key={option}
                          href="/services"
                          onClick={() => {
                            setMenuOpen(false)
                            setServicesExpanded(false)
                          }}
                          className="py-2 text-[13px] font-medium text-[#6B6B69] hover:text-[#171A1E]"
                        >
                          Option {option}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: '14px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#1a1a6e' : '#3a3a4a',
                    textDecoration: 'none',
                    padding: '11px 0',
                    borderBottom: index < navLinks.length - 1 ? '1px solid #f0f0f2' : 'none',
                    transition: 'color 150ms',
                  }}
                  className="hover:text-[#1a1a6e]"
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Mobile Contact Us */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2.5
                         bg-[#0f1117] text-white rounded-full
                         px-5 py-[11px]
                         hover:bg-[#1a1a6e] transition-colors duration-200 group"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.01em',
                textDecoration: 'none',
              }}
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="14"
                height="14"
                className="transition-transform duration-200 group-hover:rotate-45"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* ── Spacer so page content clears the navbar ── */}
      <div className="h-[72px]" />
    </>
  )
}
