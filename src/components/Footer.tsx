'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const mainPages = [
  { label: 'Home', href: '/' },
  { label: 'Service', href: '/services' },
  { label: 'Case Study', href: '/case-studies' },
  { label: 'About Us', href: '/about' },
]

const companyLinks = [
  { label: 'Service', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Case Studies', href: '/case-studies' },
]

const socialLinks = [
  { label: 'Twitter', href: 'https://x.com/HOFmigration' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/68774040/admin/dashboard/' },
  { label: 'Facebook', href: 'https://www.facebook.com/hofmigration' },
  { label: 'Instagram', href: 'https://www.instagram.com/hofmigration?igsh=ZTZ0c2ZhcWxkd3Y=' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Cookies', href: '/cookies' },
]

export function Footer() {
  const FONT_INTER = { fontFamily: "'Inter', sans-serif" }
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const emailInputRef = useRef<HTMLInputElement>(null)

  const isValidEmail = (val: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(val)
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      if (emailInputRef.current) {
        emailInputRef.current.focus()
      }
      return
    }

    setStatus('success')
    setMessage('Thank you for subscribing!')
    setEmail('') // Reset input field

    // Auto-hide success message after 4 seconds
    setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 4000)
  }

  return (
    <footer className="w-full " style={FONT_INTER}>
      <div className="max-w-[1235px] mx-auto bg-[#EDEDEA] pt-15 pb-5 px-6 md:px-[30px] flex flex-col gap-12">
        {/* ── Top Section: Newsletter & Links ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
          {/* Newsletter Column */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <h3 className="text-[20px] font-semibold text-[#171A1E] tracking-tight">Newsletter</h3>

            {/* Input Pill */}
            <form
              onSubmit={handleSubscribe}
              noValidate
              className="flex items-center bg-white rounded-full p-1 border border-[#D1CDC8] max-w-[420px] w-full shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <input
                ref={emailInputRef}
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === 'error') {
                    setStatus('idle')
                    setMessage('')
                  }
                }}
                className="flex-1 bg-transparent px-4 py-2 text-[16px] text-[#171A1E] placeholder-[#8A8A88] outline-none min-w-0"
              />
              <button
                type="submit"
                className="group flex items-center gap-2 bg-[#0F1117] hover:bg-[#1C1F26] text-white rounded-full pl-5 pr-1 py-1 transition-all duration-200 shrink-0"
              >
                <span className="text-[16px] font-medium tracking-wide">
                  {status === 'success' ? 'Subscribed' : 'Subscribe'}
                </span>
                <span className="flex items-center justify-center w-[32px] h-[32px] bg-white rounded-full transition-transform duration-200">
                  <Image
                    src="/images/svg/arrow.svg"
                    alt="arrow"
                    width={48}
                    height={48}
                    className="object-contain transition-transform duration-200 group-hover:rotate-45"
                  />
                </span>
              </button>
            </form>

            {message && (
              <p
                className={`text-[14px] font-medium mt-1 ${
                  status === 'success' ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {message}
              </p>
            )}

            <p className="text-[16px] text-[#6B6B69] max-w-[320px] leading-relaxed">
              Let's transform your vision into results.
            </p>
          </div>

          {/* Links Column Wrapper: Grid split on desktop/mobile */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            {/* Links Column: Main Pages */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[16px] font-semibold text-[#171A1E] tracking-tight">
                Main Pages
              </h3>
              <ul className="flex flex-col gap-[16px]">
                {mainPages.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[#6B6B69] hover:text-[#171A1E] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Column: Company */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[16px] font-semibold text-[#171A1E] tracking-tight">Company</h3>
              <ul className="flex flex-col gap-[16px]">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[#6B6B69] hover:text-[#171A1E] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Mid & Bottom Section Group ── */}
        <div className="flex flex-col gap-6">
          {/* ── Mid Section: Contact Info ── */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-[#171A1E]">
            {/* Email */}
            <div className="flex flex-col gap-1">
              <span className="text-[14px] font-medium uppercase tracking-wider text-[#6B6B69]">
                Email
              </span>
              <a
                href="mailto:info@hofmigration.com"
                className="text-[16px] font-semibold inline-block transition-transform duration-200 hover:-translate-y-0.5"
              >
                info@hofmigration.com
              </a>
            </div>

            {/* Visit Us */}
            <div className="flex flex-col gap-1">
              <span className="text-[14px] font-medium uppercase tracking-wider text-[#6B6B69]">
                Visit Us
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1408,+Opal+Tower,+Burj+Khalifa+Boulevard+,+Dubai,+United+Arab+Emirates"
                target="_blank"
                rel="noopener noreferrer"
                title="1408, Opal Tower, Burj Khalifa Boulevard , Dubai, United Arab Emirates"
                className="text-[16px] font-semibold inline-block transition-transform duration-200 hover:-translate-y-0.5"
              >
                Opal Tower - 1408 Burj Khalifa Blvd
              </a>
            </div>

            {/* Call Us */}
            <div className="flex flex-col gap-1 md:mr-30">
              <span className="text-[14px] font-medium uppercase tracking-wider text-[#6B6B69]">
                Call us Now
              </span>
              <a
                href="tel:0457665563"
                className="text-[16px] font-semibold inline-block transition-transform duration-200 hover:-translate-y-0.5"
              >
                04 576 6563
              </a>
            </div>
          </div>

          {/* ── Bottom Dark Container ── */}
          <div className="w-full bg-[#0F1117] rounded-[16px] p-6 md:p-8 flex flex-col gap-6 text-white shadow-xl">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-[#F9F9F8]/25">
              {/* Logo */}
              <Link href="/" className="flex items-center shrink-0">
                <div className="relative h-[32px] w-[180px]">
                  <Image
                    src="/images/hof-logo-white.png"
                    alt="HOF Migration"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              {/* Legal Links */}
              <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-[14px] text-[#F9F9F8]">
                {legalLinks.map((link, idx) => (
                  <span key={link.href} className="flex items-center gap-2 md:gap-3">
                    <Link
                      href={link.href}
                      className="hover:opacity-80 transition-opacity duration-150"
                    >
                      {link.label}
                    </Link>
                    {idx < legalLinks.length - 1 && <span className="text-[#F9F9F8]">•</span>}
                  </span>
                ))}
              </nav>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#F9F9F8]">
              {/* Socials */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-150"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="font-normal text-[#F9F9F8]/90 tracking-wide">
                © 2026.All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
