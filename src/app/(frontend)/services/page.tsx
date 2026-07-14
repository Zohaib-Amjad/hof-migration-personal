'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesPage() {
  const FONT_SERIF = { fontFamily: "'Playfair Display', Georgia, serif" }
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  const stats = [
    {
      id: 1,
      num: '5,000+',
      desc: 'Visa applications successfully completed across all major destinations',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4.5 h-4.5 text-black"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      num: '98%',
      desc: 'Client satisfaction rate across immigration and study abroad cases',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4.5 h-4.5 text-black"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: 3,
      num: '10+',
      desc: 'Destination countries with active immigration pathways and expertise',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4.5 h-4.5 text-black"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      id: 4,
      num: '15+',
      desc: 'Years of trusted immigration consultancy experience based in Dubai',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4.5 h-4.5 text-black"
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <line x1="9" y1="18" x2="15" y2="18" />
        </svg>
      ),
    },
  ]

  const pathways = [
    {
      id: '01',
      title: 'Risk Assessment',
      desc: 'We help you define clear goals and build winning strategies that drive measurable business growth.',
      icon: (
        <img
          src="/images/svg/tick-shield.svg"
          alt="Study at accredited colleges and universities."
          width={40}
          height={40}
        />
      ),
    },
    {
      id: '02',
      title: 'Talent Strategy',
      desc: 'We help you define clear goals and build winning strategies that drive measurable business growth.',
      icon: (
        <img
          src="/images/svg/plugIn.svg"
          alt="Study at accredited colleges and universities."
          width={40}
          height={40}
        />
      ),
    },
    {
      id: '03',
      title: 'Growth Planning',
      desc: 'We help you define clear goals and build winning strategies that drive measurable business growth.',
      icon: (
        <img
          src="/images/svg/bulb.svg"
          alt="Study at accredited colleges and universities."
          width={40}
          height={40}
        />
      ),
    },
    {
      id: '04',
      title: 'Performance Optimize',
      desc: 'We help you define clear goals and build winning strategies that drive measurable business growth.',
      icon: (
        <img
          src="/images/svg/rocket.svg"
          alt="Study at accredited colleges and universities."
          width={40}
          height={40}
        />
      ),
    },
    {
      id: '05',
      title: 'Business Analytics',
      desc: 'We help you define clear goals and build winning strategies that drive measurable business growth.',
      icon: (
        <img
          src="/images/svg/paper.svg"
          alt="Study at accredited colleges and universities."
          width={40}
          height={40}
        />
      ),
    },
  ]

  return (
    <div className="w-full pt-[70px] md:pt-[70px] flex flex-col items-center">
      {/* ── Section 1: Hero & Approved Visa Image ── */}
      <div className="w-full max-w-[1235px] px-4 md:px-0 mt-[-100px] flex flex-col items-center text-center gap-2">
        <span className="text-[11px] md:text-[16px] font-medium text-[#000000] tracking-widest uppercase">
          [Our Services]
        </span>
        <h1 className="text-[34px] sm:text-[44px] md:text-[72px] font-semibold text-[#171A1E] leading-[1.15] tracking-tight">
          Innovative Solutions <br />
          That Drive{' '}
          <span style={FONT_SERIF} className="italic font-semibold">
            Success
          </span>
        </h1>

        {/* Form Graphic banner */}
        <div className="relative w-full rounded-[12px] overflow-hidden aspect-[600/290] shadow-sm max-full mt-8 ">
          <Image
            src="/images/approved.webp"
            alt="Approved Visa Application Form"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 1000px"
            priority
          />
        </div>
      </div>

      {/* ── Section 2: Client Satisfaction & Metrics ── */}
      <div className="w-full max-w-[1235px] my-24 md:my-32 flex flex-col gap-12 px-4 md:px-0">
        {/* Headline & Sub-headline */}
        <div className="flex flex-col gap-4 text-center max-w-[750px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-medium text-[#171A1E] leading-[48px] tracking-normal">
            With a{' '}
            <span style={FONT_SERIF} className="italic font-medium">
              98%
            </span>{' '}
            client satisfaction rate, our consultants have helped clients build new lives in over 10
            countries
          </h2>
          <p className="text-[15px] md:text-[18px] text-[#6B6B69] max-w-[580px] mx-auto leading-relaxed">
            Our track record speaks for itself — from Dubai families relocating to Canada, to
            professionals securing Australian PR.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {/* ── Card 1: Visa Applications ── */}
          <div className="bg-white border border-[#E0E0E0]/30 rounded-[12px] p-6 flex flex-col items-start shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-[#EDEDEA] rounded-full mb-6">
              <img src="/images/svg/folder.svg" alt="Visa icon" className="w-6 h-6" />
            </div>
            <span className="text-[36px] md:text-[64px] font-medium text-[#171A1E] leading-tight md:leading-[80px] mb-3">
              5,000+
            </span>
            <p className="text-[13px] md:text-[16px] text-[#6B6B69] leading-[24px]">
              Visa applications successfully completed across all major destinations
            </p>
          </div>

          {/* ── Card 2: Client Satisfaction ── */}
          <div className="bg-white border border-[#E0E0E0]/30 rounded-[12px] p-6 flex flex-col items-start shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-[#EDEDEA] rounded-full mb-6">
              <img src="/images/svg/people.svg" alt="Satisfaction icon" className="w-6 h-6" />
            </div>
            <span className="text-[36px] md:text-[64px] font-medium text-[#171A1E] leading-tight md:leading-[80px] mb-3">
              98%
            </span>
            <p className="text-[13px] md:text-[16px] text-[#6B6B69] leading-[24px]">
              Client satisfaction rate across immigration and study abroad cases
            </p>
          </div>

          {/* ── Card 3: Destination Countries ── */}
          <div className="bg-white border border-[#E0E0E0]/30 rounded-[12px] p-6 flex flex-col items-start shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-[#EDEDEA] rounded-full mb-6">
              <img src="/images/svg/star.svg" alt="Countries icon" className="w-6 h-6" />
            </div>
            <span className="text-[36px] md:text-[64px] font-medium text-[#171A1E] leading-tight md:leading-[80px] mb-3">
              10+
            </span>
            <p className="text-[13px] md:text-[16px] text-[#6B6B69] leading-[24px]">
              Destination countries with active immigration pathways and expertise
            </p>
          </div>

          {/* ── Card 4: Years of Experience ── */}
          <div className="bg-white border border-[#E0E0E0]/30 rounded-[12px] p-6 flex flex-col items-start shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-[#EDEDEA] rounded-full mb-6">
              <img src="/images/svg/bulb.svg" alt="Experience icon" className="w-6 h-6" />
            </div>
            <span className="text-[36px] md:text-[64px] font-medium text-[#171A1E] leading-tight md:leading-[80px] mb-3">
              15+
            </span>
            <p className="text-[13px] md:text-[16px] text-[#6B6B69] leading-[24px]">
              Years of trusted immigration consultancy experience based in Dubai
            </p>
          </div>
        </div>
      </div>

      {/* ── Section 3: Immigration Pathways Grid ── */}
      <div className="w-full bg-[#ffffff] py-24 md:py-32 flex flex-col items-center ">
        <div className="w-full max-w-[1235px] px-6 md:px-0 flex flex-col gap-10">
          <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[11px] md:text-[16px] font-medium text-[#000000] ">
                [Core Services]
              </span>
              <h2 className="text-[28px] sm:text-[36px] md:text-[52px] font-medium text-[#171A1E] leading-[1.2] tracking-tight">
                Explore More{' '}
                <span style={FONT_SERIF} className="italic font-medium">
                  Services
                </span>
              </h2>
            </div>

            <Link
              href="/visa-types"
              className="group flex items-center gap-3 bg-[#0F1117] hover:bg-[#1C1F26] text-white rounded-full pl-5 pr-1 py-1 transition-all duration-200 w-fit"
            >
              <span className="text-[16px] font-medium tracking-wide">View All</span>
              <span className="flex items-center justify-center w-[48px] h-[48px] bg-white rounded-full transition-transform duration-200">
                <img
                  src="/images/svg/arrow.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-[48px] h-[48px] transition-transform duration-200 group-hover:rotate-45"
                />
              </span>
            </Link>
          </div>

          {/* 5 Card Grid layout (3 top, 2 bottom) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[1100px]">
            {pathways.map((svc) => (
              <div
                key={svc.id}
                className="group bg-[#F9F9F8] rounded-[12px] p-6.5 flex flex-col items-start gap-6"
              >
                <div className="flex items-center justify-center w-10 h-10">{svc.icon}</div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[18px] md:text-[32px] font-semibold text-[#171A1E] tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="text-[16px] text-[#6B6B69] leading-relaxed">{svc.desc}</p>
                </div>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-[16px] font-medium text-[#03030F]"
                >
                  Read More
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#03030F]/15 transition-all duration-300 group-hover:bg-[#03030F] group-hover:border-[#03030F]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5 text-[#03030F] transition-all duration-300 group-hover:text-white group-hover:-rotate-45"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section 4: Friendly Asked Questions ── */}
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

      {/* ── Section 5: CTA Banner (Work with Experts) ── */}
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
