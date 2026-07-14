'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactPage() {
  const FONT_SERIF = { fontFamily: "'Playfair Display', Georgia, serif" }
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent successfully!')
  }

  return (
    <div className="w-full pt-12 md:pt-[110px] flex flex-col items-center">
      {/* ── Section 1: Office Location ── */}
      <div className="w-full max-w-[1235px] px-4 md:px-0 flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Info Column */}
        <div className="w-full lg:w-[48%] flex flex-col items-start gap-8 md:gap-[60px]">
          <div className="flex flex-col items-start gap-3">
            <span className="text-[11px] md:text-[16px] font-medium text-[#000000] tracking-widest uppercase">
              [Visit Us]
            </span>
            <h1 className="text-[34px] sm:text-[44px] md:text-[72px] font-semibold text-[#171A1E] leading-tight md:leading-[84px] tracking-tight">
              Office{' '}
              <span style={FONT_SERIF} className="italic font-semibold">
                Location
              </span>
            </h1>
            <p className="text-[18px] text-[#6B6B69] leading-relaxed mt-2">
              Our office is conveniently located in the heart of theses cities, providing easy
              access for clients and partners.
            </p>
          </div>

          <div className="bg-[white] border border-[#E0E0E0]/30 rounded-[8px] p-6 flex flex-col items-start gap-4 w-full">
            <img src="images/svg/loocation.svg" alt="" />
            <div className="flex flex-col gap-1">
              <span className="text-[24px] font-medium text-[#03030F]">Dubai</span>
              <p className="text-[18px] text-[#6B6B69] leading-relaxed">
                Opal Tower - 1408 Burj Khalifa Blvd
              </p>
            </div>
          </div>
        </div>

        {/* Right Photo Column */}
        <div className="w-full lg:w-[48%] relative rounded-[12px] overflow-hidden aspect-[4/4] shadow-md max-w-[500px] lg:max-w-none">
          <Image
            src="/images/dubai.webp"
            alt="HOF Dubai Office Building - Opal Tower"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 550px"
          />
          <div className="absolute top-4 left-4 bg-white/95 text-[#171A1E] font-medium text-[16px] px-2.5 py-1 rounded-full shadow-sm">
            Dubai
          </div>
        </div>
      </div>

      {/* ── Section 2: Drop Us a Message ── */}
      <div className="w-full bg-[#ffffff] py-20 md:py-28 flex justify-center mt-24 md:mt-32">
        <div className="w-full max-w-[1235px] px-4 md:px-0 flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left Side: Text and Contact Bullets */}
          <div className="w-full lg:w-[44%] flex flex-col justify-between self-stretch lg:min-h-[480px]">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[11px] md:text-[16px] font-medium text-[#03030F] tracking-widest uppercase">
                [Contact]
              </span>
              <h2 className="text-[28px] sm:text-[36px] md:text-[52px] font-medium text-[#03030F] leading-[1.2] tracking-tight mt-1">
                Drop Us a{' '}
                <span style={FONT_SERIF} className="italic font-medium">
                  Message
                </span>
              </h2>
              <p className="text-[18px] text-[#6B6B69] leading-relaxed mt-4">
                We're always happy to hear from you and will get back to you as soon as possible.
              </p>
            </div>

            {/* Details block */}
            <div className="flex flex-col gap-6 mt-8 lg:mt-0">
              {/* Email */}
              <div className="flex items-start gap-4">
                <img src="images/svg/mail.svg" className="w-6 h-6 mt-5" />
                <div className="flex flex-col ml-3">
                  <span className="text-[18px] font-medium text-[#6B6B69]">Email</span>
                  <a
                    href="mailto:info@hofmigration.com"
                    className="text-[16px] md:text-[24px] font-semibold text-[#171A1E] hover:underline"
                  >
                    info@hofmigration.com
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-4">
                <img src="images/svg/call.svg" className="w-6 h-6 mt-5" />
                <div className="flex flex-col ml-3">
                  <span className="text-[18px] font-medium text-[#6B6B69]">Call</span>
                  <a
                    href="tel:045766563"
                    className="text-[16px] md:text-[24px] font-semibold text-[#171A1E] hover:underline"
                  >
                    04 576 6563
                  </a>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-start gap-4">
                <img src="images/svg/map.svg" className="w-6 h-6 mt-5" />
                <div className="flex flex-col ml-3">
                  <span className="text-[18px] font-medium text-[#6B6B69]">Visit Us</span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] md:text-[24px] font-semibold text-[#171A1E] hover:underline"
                  >
                    See on Google Map
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-[50%] bg-[#F9F9F8] rounded-[12px] p-6 md:py-10 md:px-8 flex flex-col gap-4"
          >
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-medium text-[#03030F]">Full Name</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full bg-white border border-[#EDEDEA] rounded-[8px] px-4 py-3 text-[16px] text-[#171A1E] placeholder-[#6B6B69] focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-medium text-[#03030F]">Email Address</label>
              <input
                type="email"
                required
                placeholder="Enter email address"
                className="w-full bg-white border border-[#EDEDEA] rounded-[8px] px-4 py-3 text-[16px] text-[#171A1E] placeholder-[#6B6B69] focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Grid layout for fields */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-5">
              {/* Country/Region */}
              <div className="flex flex-col gap-2">
                <label className="text-[18px] font-medium text-[#03030F]">Country/Region*</label>
                <input
                  type="text"
                  required
                  placeholder="Region"
                  className="w-full bg-white border border-[#EDEDEA] rounded-[8px] px-4 py-3 text-[16px] text-[#171A1E] placeholder-[#6B6B69] focus:outline-none focus:border-black transition-colors"
                />
              </div>

              {/* Occupation */}
              <div className="flex flex-col gap-2">
                <label className="text-[18px] font-medium text-[#03030F]">Occupation *</label>
                <input
                  type="text"
                  required
                  placeholder="Doctor"
                  className="w-full bg-white border border-[#EDEDEA] rounded-[8px] px-4 py-3 text-[16px] text-[#171A1E] placeholder-[#6B6B69] focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-5">
              {/* Education Level */}
              <div className="flex flex-col gap-2">
                <label className="text-[18px] font-medium text-[#03030F]">Education Level*</label>
                <select
                  required
                  className="w-full bg-white border border-[#EDEDEA] rounded-[8px] px-4 py-3 text-[16px] text-[#6B6B69] focus:outline-none focus:border-black transition-colors"
                >
                  <option value="">Please Select</option>
                  <option value="highschool">High School</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Destination */}
              <div className="flex flex-col gap-2">
                <label className="text-[18px] font-medium text-[#03030F]">Destination*</label>
                <input
                  type="text"
                  required
                  placeholder="USA"
                  className="w-full bg-white border border-[#EDEDEA] rounded-[8px] px-4 py-3 text-[16px] text-[#171A1E] placeholder-[#6B6B69] focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            {/* Write Your Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-medium text-[#03030F]">Write Your Message</label>
              <textarea
                rows={3}
                placeholder="I want to collaborate"
                className="w-full bg-white border border-[#EDEDEA] rounded-[8px] px-4 py-3 text-[16px] text-[#171A1E] placeholder-[#6B6B69] focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group flex items-center justify-between bg-black hover:bg-[#1C1F26] text-white rounded-full pl-6 pr-1 py-1 transition-all duration-200 mt-2 cursor-pointer w-full"
            >
              <span className="text-[14px] font-medium tracking-wide">Send Message</span>
              <span className="flex items-center justify-center w-[48px] h-[48px] bg-white rounded-full transition-transform duration-200">
                <img
                  src="/images/svg/arrow.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-[48px] h-[48px] transition-transform duration-200 group-hover:rotate-45"
                />
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* ── Section 3: Friendly Asked Questions ── */}
      <div className="w-full bg-[#F9F9F8] py-20 md:py-20 flex justify-center ">
        <div className="w-full max-w-[1235px] px-4 md:px-0 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Left Column: Title & CTA card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 lg:gap-0 py-0">
            <h2 className="text-[32px] sm:text-[40px] md:text-[64px] font-semibold text-[#171A1E] leading-tight md:leading-[80px] tracking-tight ">
              Friendly Asked <br />
              <span style={FONT_SERIF} className="italic font-semibold">
                Questions
              </span>
            </h2>

            <div className="bg-[#ffffff] rounded-[12px] p-6 border border-[#E0E0E0]/30 shadow-[0_2px_12px_rgba(0,0,0,0.01)] flex flex-col gap-2">
              <h3 className="text-[24px] font-medium text-[#171A1E]">Still have a question?</h3>
              <p className="text-[13px] md:text-[16px] text-[#6B6B69] leading-relaxed">
                Our team is ready to assist you with anything you need.
              </p>
              <Link
                href="/contact"
                className="group flex items-center justify-between bg-black hover:bg-[#1C1F26] text-white rounded-full pl-6 pr-1 py-1 transition-all duration-200 mt-2 max-w-[180px]"
              >
                <span className="text-[16px] font-medium tracking-wide">Make a Call</span>
                <span className="flex items-center justify-center w-[48px] h-[48px] bg-white rounded-full text-black transition-transform duration-200">
                  <img src="/images/svg/arrow.svg" alt="" className="transition-transform duration-200 group-hover:rotate-45" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col">
            {[
              {
                q: 'How quickly can we see results?',
                a: 'Depending on the destination and visa pathway, initial processing times vary. For instance, Express Entry profiles can receive invitations within weeks, while skilled migration nominations typically take 3 to 6 months. We set clear timelines at the start.',
              },
              {
                q: 'What makes your approach different?',
                a: "We combine data-driven diagnostics with hands-on execution support—we don't just deliver reports, we embed with your team to implement solutions. Plus, our has a 90% success rate.",
              },
              {
                q: 'Do you work with startups or established businesses?',
                a: 'Yes, we work with both. We help foreign entrepreneurs establish businesses in free zones or mainland UAE, and assist corporate teams with international transfers, golden visa applications, and employee relocation.',
              },
              {
                q: 'What industries do you specialize in?',
                a: 'We specialize in corporate immigration, skilled professions (IT, healthcare, engineering, finance), study abroad programs, and business investment/residency-by-investment programs across Canada, Australia, Europe, and the US.',
              },
              {
                q: 'How do you measure success of a consulting engagement?',
                a: 'We measure success by our visa approval rate, which currently stands at 97%, the speed of application processing, and the seamless transition of our clients to their new destinations.',
              },
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div key={idx} className="border-b border-[#E0E0E0] py-5">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center gap-4 text-left outline-none cursor-pointer group"
                  >
                    <span className="text-[16px] md:text-[20px] font-medium text-[#171A1E]">
                      {faq.q}
                    </span>
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-all duration-300 font-bold ${
                        isOpen
                          ? 'bg-[#E3E8FC] text-[#3F51B5]'
                          : 'bg-black text-white group-hover:bg-[#1C1F26]'
                      }`}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[250px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[13px] md:text-[16px] text-[#6B6B69] leading-relaxed max-w-[620px]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Section 4: CTA Banner (Work with Experts) ── */}
      <div className="w-full max-w-[1235px] px-4 py-12 md:py-[100px] md:px-[30px] bg-[#ffffff]">
        <div className="bg-[#000000] rounded-[12px] p-3 text-white overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[380px]">
          {/* Left Column: CTA Texts */}
          <div className="lg:col-span-7 py-8 px-1 sm:p-8 md:p-12 lg:p-5 lg:py-15 flex flex-col justify-between items-start gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-medium leading-[1.2] tracking-normal max-w-[520px]">
                Work with Experts to <br />
                Build Your{' '}
                <span style={FONT_SERIF} className="italic font-normal">
                  Grow
                </span>
              </h2>

              <Link
                href="/contact"
                className="group flex items-center justify-between bg-white hover:bg-[#EDEDEA] text-black rounded-full pl-5 pr-1 py-1 gap-3 transition-all duration-200 w-fit max-w-[180px]"
              >
                <span className="text-[16px] font-medium tracking-wide">Get Started</span>
                <span className="flex items-center justify-center w-[48px] h-[48px] bg-[#0F1117] rounded-full text-white transition-transform duration-200">
                  <img src="/images/svg/white-arrow.svg" alt="" className="transition-transform duration-200 group-hover:rotate-45" />
                </span>
              </Link>
            </div>

            {/* Checklist at the bottom */}
            <div className="flex flex-col gap-4 mt-6 text-[14px] md:text-[16px] text-white w-full">
              <div className="flex items-start gap-3">
                <img
                  src="/images/svg/circle-with-tick.svg"
                  className="w-[14px] h-[14px] mt-1 shrink-0"
                  alt=""
                />
                <span>Book a Free Consultation — No Commitment Required</span>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="/images/svg/circle-with-tick.svg"
                  className="w-[14px] h-[14px] mt-1 shrink-0"
                  alt=""
                />
                <span>Discover Your Eligible Visa Pathways</span>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="/images/svg/circle-with-tick.svg"
                  className="w-[14px] h-[14px] mt-1 shrink-0"
                  alt=""
                />
                <span>Discover Your Eligible Visa Pathways</span>
              </div>
            </div>
          </div>

          {/* Right Column: Skyscrapers Image */}
          <div className="lg:col-span-5 relative w-full min-h-[250px] lg:min-h-full">
            <Image
              src="/images/building.webp"
              alt="Skyscrapers perspective"
              fill
              className="object-cover rounded-[12px] object-center"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
