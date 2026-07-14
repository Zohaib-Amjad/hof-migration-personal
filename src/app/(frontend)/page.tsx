'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const FONT_SERIF = { fontFamily: "'Playfair Display', Georgia, serif" }

  const [activeService, setActiveService] = useState(0) // Default to index 0 (Skilled Migration — Canada & Australia)
  const [activePartnerTab, setActivePartnerTab] = useState<
    'collaboration' | 'expertise' | 'tailored'
  >('collaboration')
  const [activeFaq, setActiveFaq] = useState<number | null>(0) // Default to index 0 ("How quickly can we see results?")
  const carouselRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  const servicesSection = [
    {
      num: '[01]',
      title: 'Skilled Migration — Canada & Australia',
      desc: 'Professional guidance for General Skilled Migration to Canada (Express Entry) and Australia (Subclass 189/190/491). We help you maximize your points and secure Permanent Residency.',
      bullets: [
        'Express Entry & SkillSelect Profile Management',
        'State Nomination & Provincial Nominee Programs (PNP)',
        'Skills Assessment & Educational Credential Assessment (ECA)',
      ],
      image: '/images/walking.png',
    },
    {
      num: '[02]',
      title: 'Study Abroad & Student Visas',
      desc: 'Unlock global educational opportunities with student visa applications and university admissions guidance for top destinations worldwide.',
      bullets: [
        'University & College Course Selection',
        'Study Permit & Student Visa Applications',
        'Post-Graduation Work Permit (PGWP) Strategy',
      ],
      image: '/images/Man Working Indoors 1.png',
    },
    {
      num: '[03]',
      title: 'Family Sponsorship & Reunification',
      desc: 'Bring your loved ones together. Expert legal assistance for spouse, partner, child, and parent sponsorship programs.',
      bullets: [
        'Spousal & Common-Law Partner Sponsorship',
        'Parent & Grandparent Super Visas',
        'Family Reunification Appeal Support',
      ],
      image: '/images/Team Member Image.png',
    },
    {
      num: '[04]',
      title: 'USA EB-2 NIW & Investor Visas',
      desc: 'Expert guidance for US National Interest Waiver self-petitions, investor visa pathways, and student visa applications for the United States.',
      bullets: [
        'EB-2 National Interest Waiver Petitions',
        'E-2 Investor & L-1 Transfer Visas',
        'USA Student Visa (F-1) Applications',
      ],
      image: '/images/team-working.webp',
    },
    {
      num: '[05]',
      title: 'Europe Golden Visa & Visitor Visas',
      desc: 'Residency by investment and visitor visa support for European destinations. Secure travel freedom and residency for your family.',
      bullets: [
        'Golden Visa Programs (Portugal, Spain, Greece)',
        'Schengen Visitor & Business Visa Applications',
        'Passive Income & Digital Nomad Visas',
      ],
      image: '/images/about-lounge.png',
    },
  ]

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialsRef.current) {
      const scrollAmount = 300
      testimonialsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="w-full  md:pt-[60px]  flex flex-col items-center">
      {/* ── Main Hero Card ── */}
      <div className="w-full max-w-[1235px] px-4 md:px-0 rounded-[24px] md:rounded-[12px] flex flex-col gap-10 md:gap-14 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        {/* ── Top Grid Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Pill */}
            <div className="flex items-center gap-2 bg-[#0F1117] text-white rounded-full p-[9px] text-[14px] font-medium tracking-wide shadow-sm">
              <span className="flex items-center justify-center w-4 h-4 bg-white/20 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-2.5 h-2.5 text-white"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>ICCRC & MARA Certified</span>
            </div>

            {/* Headline */}
            <h1 className="mt-[12px] text-[40px] sm:text-[60px] md:text-[72px] font-semibold text-[#171A1E] leading-tight md:leading-[84px] tracking-tight">
              Your Journey Abroad
              <br className="hidden md:block" /> Starts With{' '}
              <span style={FONT_SERIF} className="italic font-normal">
                The Right
              </span>
              <br className="hidden md:block" />{' '}
              <span style={FONT_SERIF} className="italic font-normal">
                Guidance
              </span>
            </h1>

            {/* Description */}
            <p className="mt-[16px] text-[18px] md:text-[20px] text-[#6B6B69] max-w-[700px] leading-relaxed">
              Expert strategic consulting to drive sustainable growth, operational innovation, and
              lasting business transformation
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="mt-[28px] group flex items-center gap-3.5 bg-[#0F1117] hover:bg-[#1C1F26] text-white rounded-full pl-6 pr-2 py-2 transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] hover:scale-[1.01]"
            >
              <span className="text-[16px] font-medium tracking-wide">Book Free Consultation</span>
              <span className="flex items-center justify-center w-[30px] h-[30px] bg-white rounded-full transition-transform duration-200">
                <img
                  src="/images/svg/arrow.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-[48px] h-[48px] transition-transform duration-200 group-hover:rotate-45"
                />
              </span>
            </Link>
          </div>

          {/* Right Column: Stats & operational info */}
          <div className="lg:col-span-4 flex flex-col gap-10 md:gap-12 lg:pt-12">
            {/* Success Ratio Section */}
            <div className="relative pt-6 px-6 pb-2 w-full flex flex-col items-start">
              {/* Cap border */}
              <div className="absolute top-0 left-0 right-0 h-[24px] border-t-[3px] border-x-[1.5px] border-[#171A1E] rounded-t-[20px] pointer-events-none" />

              <h3 className="text-[18px] md:text-[32px] font-semibold text-[#6B6B69] tracking-tight mb-2">
                Success{' '}
                <span style={FONT_SERIF} className="italic font-normal text-[#03030F]">
                  Ratio
                </span>
              </h3>

              <div className="text-[72px] md:text-[84px] font-semibold text-[#171A1E] leading-[0.95] tracking-tight mb-3">
                97%
              </div>

              <span className="text-[18px] text-[#6B6B69] font-normal">In the Previous year</span>
            </div>

            {/* Operational Efficiency Section */}
            <div className="px-6 flex flex-col items-start w-full">
              <h3 className="text-[18px] md:text-[24px] font-medium text-[#171A1E] tracking-tight mb-3">
                Operational Efficiency
              </h3>
              <p className="text-[14px] md:text-[16px] text-[#6B6B69] leading-relaxed max-w-[420px]">
                We assist companies in optimizing their workflows, minimizing waste, and enhancing
                efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom Image Section ── */}
        <div className="w-full relative rounded-[16px] md:rounded-[12px] overflow-hidden aspect-[1232/650] shadow-md">
          <Image
            src="/images/hero-man1.png"
            alt="Your Journey Abroad Starts With The Right Guidance"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1235px) 100vw, 1235px"
            priority
          />
        </div>
      </div>

      {/* ── Section 2: Certified Expertise & Personalised Care ── */}
      <div className="w-full max-w-[1235px] mt-16 md:mt-30 md:my-[60px] flex flex-col gap-10 md:gap-14 px-4 md:px-0">
        {/* Headline */}
        <h2 className="text-[28px] sm:text-[36px] md:text-[36px] font-inter font-medium text-[#171A1E] leading-tight md:leading-[48px] tracking-normal max-w-[800px]">
          Since 2010, we've guided thousands of families to build their futures abroad combining{' '}
          <span className="text-[#535352]">certified expertise with</span>{' '}
          <span className="text-[#535352]">personalised care.</span>
        </h2>

        {/* 3-Column Content Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-8 w-full">
          {/* Left Column: Description & Metric */}
          <div className="w-full lg:w-[32%] flex flex-col gap-6">
            <p className="text-[14px] md:text-[16px] font-normal text-[#6B6B69] leading-relaxed">
              At HOF Migration, we help individuals navigate the complexity of global immigration.
              Our ICCRC and MARA certified consultants deliver end-to-end guidance — from
              eligibility assessment to visa approval — with complete transparency at every step.
            </p>
            <p className="text-[14px] md:text-[16px] text-[#6B6B69] leading-relaxed">
              We are the GCC's trusted immigration consultancy, proudly serving clients across the
              UAE and internationally.
            </p>

            {/* Metric (5,000+) */}
            <div className="flex items-stretch gap-4 mt-4">
              <div className="w-[3px] bg-[#171A1E] rounded-full" />
              <div className="flex flex-col">
                <span className="text-[48px] md:text-[72px] font-semibold text-[#171A1E] leading-[84px]">
                  5,000+
                </span>
                <span className="text-[16px] text-[#6B6B69] font-medium mt-2">
                  Successful Visa Approvals
                </span>
              </div>
            </div>
          </div>

          {/* Center Column: Image */}
          <div className="w-full lg:w-[38%] flex justify-center">
            <div className="w-full relative rounded-[12px] overflow-hidden aspect-[4/4] shadow-sm">
              <Image
                src="/images/walking.png"
                alt="People walking on crosswalk"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          {/* Right Column: Bullet list & Call to Action */}
          <div className="w-full lg:w-[25%] flex flex-col gap-6 pl-6  self-end">
            {/* List Box */}
            <div className="w-full bg-[#ffffff] rounded-[12px] pt-6 pb-6 pl-5 pr-5 shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
              <ul className="flex flex-col gap-0 text-[14px] md:text-[18px] text-[#171A1E] font-regular leading-normal">
                <li className="flex items-start gap-2">
                  <span className="text-black select-none ">•</span>
                  <span>Licensed Immigration Experts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black select-none">•</span>
                  <span>Personalized Immigration Strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black select-none ">•</span>
                  <span>Transparent, No-Surprise Process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black select-none ">•</span>
                  <span>End-to-End Case Management</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="group flex items-center gap-3.5 bg-[#0F1117] hover:bg-[#1C1F26] text-white rounded-full pl-6 pr-1 py-1 transition-all duration-200 shadow-md hover:scale-[1.01] w-full lg:w-auto justify-between lg:justify-between"
            >
              <span className="text-[16px] font-medium tracking-normal">Book a Free Call</span>
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
        </div>
      </div>

      {/* ── Section 3: Client Satisfaction & Metrics ── */}
      <div className="w-full max-w-[1235px] md:my-[60px] flex flex-col gap-12 px-4 md:px-0">
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
          <p className="text-[15px] md:text-[16px] text-[#6B6B69] max-w-[580px] mx-auto leading-relaxed">
            Our track record speaks for itself — from Dubai families relocating to Canada, to
            professionals securing Australian PR.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {/* ── Card 1: Visa Applications ── */}
          <div className="bg-white border border-[#E0E0E0]/30 rounded-[20px] p-6 flex flex-col items-start shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
            {/* 🔁 ICON SLOT — replace src with your own SVG file path, e.g. /images/icons/visa.svg */}
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
          <div className="bg-white border border-[#E0E0E0]/30 rounded-[20px] p-6 flex flex-col items-start shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
            {/* 🔁 ICON SLOT — replace src with your own SVG file path, e.g. /images/icons/satisfaction.svg */}
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
          <div className="bg-white border border-[#E0E0E0]/30 rounded-[20px] p-6 flex flex-col items-start shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
            {/* 🔁 ICON SLOT — replace src with your own SVG file path, e.g. /images/icons/countries.svg */}
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
          <div className="bg-white border border-[#E0E0E0]/30 rounded-[20px] p-6 flex flex-col items-start shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
            {/* 🔁 ICON SLOT — replace src with your own SVG file path, e.g. /images/icons/experience.svg */}
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

      {/* ── Section 4: Immigration & Education Solutions ── */}
      <div className="w-full bg-[#ffffff] py-20 md:py-28 flex justify-center mt-24 md:mt-32">
        <div className="w-full max-w-[1235px] px-4 md:px-0">
          {/* Header Grid */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-medium text-[#171A1E] leading-tight md:leading-[80px] tracking-normal max-w-[700px]">
              Immigration & Education <br />
              <span style={FONT_SERIF} className="italic font-normal">
                Solutions
              </span>
            </h2>
            <Link
              href="/services"
              className="group flex items-center gap-3 bg-[#0F1117] hover:bg-[#1C1F26] text-white rounded-full pl-6 pr-1 py-1 transition-all duration-200 shadow-sm w-fit"
            >
              <span className="text-[16px] font-medium tracking-wide">See All Service</span>
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

          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Accordion list */}
            <div className="lg:col-span-7 flex flex-col border-t border-[#D9D9DB]">
              {servicesSection.map((svc, idx) => {
                const isActive = activeService === idx
                return (
                  <div key={idx} className="border-b border-[#D9D9DB]">
                    <button
                      onClick={() => setActiveService(idx)}
                      className="w-full flex items-center gap-4 py-6 text-left outline-none transition-colors duration-200 group cursor-pointer"
                    >
                      <span className="text-[16px] md:text-[28px] text-[#171A1E] font-medium transition-colors duration-250 group-hover:text-[#8A8A88] shrink-0">
                        {svc.num}
                      </span>
                      <span className="text-[18px] md:text-[28px] font-medium text-[#171A1E] leading-tight">
                        {svc.title}
                      </span>
                    </button>
                    {/* Expanded block */}
                    <div
                      className={`overflow-hidden transition-all duration-350 ease-in-out ${
                        isActive ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-0 md:pl-17 flex flex-col gap-6 ">
                        <p className="text-[14px] md:text-[16px] font-regular text-[#6B6B69] max-w-[400px] leading-[22px]">
                          {svc.desc}
                        </p>
                        <ul className="flex flex-col gap-1">
                          {svc.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-center gap-3 text-[16px] text-[#171A1E] font-medium leading-[24px]"
                            >
                              <span className="flex items-center justify-center w-5 h-5 rounded-full text-black select-none shrink-0 text-[12px] font-semibold">
                                <img src="/images/svg/tick.svg" alt="dot" className="w-3 h-3" />
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/services"
                          className="group flex items-center gap-3 bg-[#0F1117] hover:bg-[#1C1F26] text-white rounded-full pl-6 pr-1 py-1 transition-all duration-200 w-fit"
                        >
                          <span className="text-[16px] font-medium tracking-wide">
                            Explore Service
                          </span>
                          <span className="flex items-center justify-center w-[32px] h-[32px] bg-white rounded-full transition-transform duration-200">
                            <img
                              src="/images/svg/arrow.svg"
                              alt=""
                              aria-hidden="true"
                              className="w-[48px] h-[48px] transition-transform duration-200 group-hover:rotate-45"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Column: Image display */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="w-full relative rounded-[24px] overflow-hidden aspect-[4/4.2] shadow-sm bg-[#EDEDEA] transition-all duration-300">
                <Image
                  src={servicesSection[activeService].image}
                  alt={servicesSection[activeService].title}
                  fill
                  className="object-cover object-center transition-all duration-500 ease-in-out"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 5: The Trust Behind Our Partnership ── */}
      <div className="w-full bg-[#F9F9F8] py-10 md:py-28 flex justify-center mt-24 md:mt-32">
        <div className="w-full max-w-[1235px] px-4 md:px-0 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
          {/* Left Column: Image with overlay text */}
          <div className="lg:col-span-5 w-full relative aspect-[4/4.5] rounded-[24px] overflow-hidden shadow-sm group">
            <Image
              src="/images/personLap.webp"
              alt="The Trust Behind Our Partnership"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            {/* Dark gradient overlay from top (transparent) to bottom (dark) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/10 to-transparent z-10" />

            {/* Overlay content placed directly on the gradient */}
            <div className="absolute inset-x-8 bottom-8 text-white flex flex-col gap-4 z-20">
              <h4 className="text-[28px] md:text-[36px] font-bold tracking-tight leading-tight">
                Know What's Possible
              </h4>
              <p className="text-[14px] md:text-[16px] text-white/90 leading-relaxed max-w-[420px]">
                Find your eligible visa pathways with a free eligibility check — no commitment.
              </p>
              <Link
                href="/contact"
                className="group flex items-center justify-between bg-white hover:bg-[#EDEDEA] text-black rounded-full pl-6 pr-2 py-2 transition-all duration-200 mt-2 max-w-[220px]"
              >
                <span className="text-[15px] font-medium tracking-wide">Get In Touch</span>
                <span className="flex items-center justify-center w-[36px] h-[36px] bg-black rounded-full transition-transform duration-200">
                  <img
                    src="/images/svg/white-arrow.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-[14px] h-[14px] brightness-0 invert transition-transform duration-200 group-hover:rotate-45"
                  />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Text & horizontal tabs */}
          <div className="lg:col-span-7 flex flex-col justify-between items-start w-full py-0">
            {/* Title and paragraph grouped */}
            <div className="flex flex-col items-start gap-6">
              <h2 className="text-[32px] sm:text-[40px] md:text-[64px] font-semibold text-[#171A1E] leading-[1.1] tracking-tight">
                The Trust Behind <br />
                Our{' '}
                <span style={FONT_SERIF} className="italic font-semibold">
                  Partnership
                </span>
              </h2>
              <p className="text-[15px] md:text-[18px] text-[#6B6B69] leading-[26px] max-w-[620px]">
                At HOF Migration, our relationship goes beyond filing paperwork. We become your
                strategic partner — guiding you through one of the most important decisions of your
                life with certified expertise and genuine care.
              </p>
            </div>

            {/* Horizontal tabs & description grouped */}
            <div className="flex flex-col gap-4 w-full">
              {/* Horizontal tabs */}
              <div className="flex flex-wrap justify-start gap-x-5 gap-y-2 sm:gap-10 border-b border-[#E0E0E0] w-full pb-2">
                <button
                  onClick={() => setActivePartnerTab('collaboration')}
                  className={`pb-2.5 text-[14px] sm:text-[15px] md:text-[18px] font-regular focus:font-medium active:font-medium transition-all relative outline-none cursor-pointer flex items-center gap-2 ${
                    activePartnerTab === 'collaboration'
                      ? 'text-black'
                      : 'text-[#8A8A88] hover:text-[#171A1E]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${activePartnerTab === 'collaboration' ? 'bg-black' : 'bg-transparent'}`}
                  />
                  Deep Collaboration
                </button>
                <button
                  onClick={() => setActivePartnerTab('expertise')}
                  className={`pb-2.5 text-[14px] sm:text-[15px] md:text-[18px] font-regular focus:font-medium active:font-medium transition-all relative outline-none cursor-pointer flex items-center gap-2 ${
                    activePartnerTab === 'expertise'
                      ? 'text-black'
                      : 'text-[#8A8A88] hover:text-[#171A1E]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${activePartnerTab === 'expertise' ? 'bg-black' : 'bg-transparent'}`}
                  />
                  Expertise
                </button>
                <button
                  onClick={() => setActivePartnerTab('tailored')}
                  className={`pb-2.5 text-[14px] sm:text-[15px] md:text-[18px] font-regular focus:font-medium active:font-medium transition-all relative outline-none cursor-pointer flex items-center gap-2 ${
                    activePartnerTab === 'tailored'
                      ? 'text-black'
                      : 'text-[#8A8A88] hover:text-[#171A1E]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${activePartnerTab === 'tailored' ? 'bg-black' : 'bg-transparent'}`}
                  />
                  Tailored Solutions
                </button>
              </div>

              {/* Dynamic description underneath */}
              <div className="min-h-[90px] pt-4 text-[14px] md:text-[16px] text-[#6B6B69] leading-relaxed max-w-[620px]">
                {activePartnerTab === 'collaboration' && (
                  <p className="animate-fade-in">
                    We immerse ourselves in your goals, circumstances, and timeline — treating your
                    case with the same care we'd give our own family. Every decision is made
                    together with full transparency and honesty.
                  </p>
                )}
                {activePartnerTab === 'expertise' && (
                  <p className="animate-fade-in">
                    Our certified MARA & ICCRC consultants stay ahead of changing immigration laws,
                    ensuring your application is built on absolute compliance, precise
                    documentation, and proven pathways to success.
                  </p>
                )}
                {activePartnerTab === 'tailored' && (
                  <p className="animate-fade-in">
                    No two immigration journeys are the same. We design custom visa strategies
                    aligned perfectly with your professional credentials, business goals, family
                    needs, and long-term settlement plans.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 6: Your Immigration Journey Made Simple ── */}
      <div className="w-full bg-[#ffffff] py-20 md:py-28 flex justify-center mt-24 md:mt-32">
        <div className="w-full max-w-[1235px] px-4 md:px-0 flex flex-col gap-12 items-center">
          <h2 className="text-[32px] sm:text-[40px] md:text-[64px] font-semibold text-[#171A1E] leading-tight text-center tracking-tight max-w-[800px]">
            Your Immigration <br />
            Journey{' '}
            <span style={FONT_SERIF} className="italic font-semibold">
              Made Simple
            </span>
          </h2>

          {/* Staggered cascading step-by-step layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 w-full mt-6 items-start">
            {/* COLUMN 1 */}
            <div className="flex flex-col gap-6 lg:gap-50">
              {/* Step 1 */}
              <div className="bg-[#F9F9F8] rounded-[12px] py-8 px-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
                <div
                  className="flex items-center justify-center w-12 h-12 bg-white
                border border-[#D9D9DB] rounded-full mb-12"
                >
                  <img src="/images/svg/pan.svg" alt="" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-[18px] md:text-[24px] font-semibold text-[#171A1E] mb-3">
                  Free Eligibility Assessment
                </h3>
                <p className="text-[13px] md:text-[16px] text-[#6B6B69] leading-relaxed">
                  We evaluate your education, work experience, language scores, and goals to
                  identify the pathways available to you — no commitment needed.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-[#F9F9F8] rounded-[12px] py-8 px-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 lg:mt-8">
                <div
                  className="flex items-center justify-center w-12 h-12 bg-white
                border border-[#D9D9DB] rounded-full mb-12"
                >
                  <img src="/images/svg/pan.svg" alt="" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-[18px] md:text-[24px] font-semibold text-[#171A1E] mb-3">
                  Application Submission
                </h3>
                <p className="text-[13px] md:text-[16px] text-[#6B6B69] leading-relaxed">
                  We file your complete, professionally prepared application and represent you
                  throughout the processing period with your immigration authority.
                </p>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col gap-6 lg:gap-50 lg:pt-25">
              {/* Step 2 */}
              <div className="bg-[#F9F9F8] rounded-[12px] py-8 px-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
                <div
                  className="flex items-center justify-center w-12 h-12 bg-white
                border border-[#D9D9DB] rounded-full mb-12"
                >
                  <img src="/images/svg/plugIn.svg" alt="" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-[18px] md:text-[24px] font-semibold text-[#171A1E] mb-3">
                  Consultation & Strategy
                </h3>
                <p className="text-[13px] md:text-[16px] text-[#6B6B69] leading-relaxed">
                  Your dedicated consultant builds a personalised immigration roadmap tailored to
                  your specific profile, timeline, and destination country.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-[#F9F9F8] rounded-[12px] py-8 px-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 lg:mt-8">
                <div
                  className="flex items-center justify-center w-12 h-12 bg-white
                border border-[#D9D9DB] rounded-full mb-12"
                >
                  <img src="/images/svg/plugIn.svg" alt="" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-[18px] md:text-[24px] font-semibold text-[#171A1E] mb-3">
                  Visa Outcome & Beyond
                </h3>
                <p className="text-[13px] md:text-[16px] text-[#6B6B69] leading-relaxed">
                  We guide you through final requirements, post-approval steps, and pre-departure
                  preparation — and celebrate your visa grant with you.
                </p>
              </div>
            </div>

            {/* COLUMN 3 */}
            <div className="flex flex-col gap-6 lg:gap-16 lg:pt-50">
              {/* Step 3 */}
              <div className="bg-[#F9F9F8] rounded-[12px] py-8 px-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
                <div
                  className="flex items-center justify-center w-12 h-12 bg-white
                border border-[#D9D9DB] rounded-full mb-12"
                >
                  <img src="/images/svg/rocket.svg" alt="" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-[18px] md:text-[24px] font-semibold text-[#171A1E] mb-3">
                  Documentation
                </h3>
                <p className="text-[13px] md:text-[16px] text-[#6B6B69] leading-relaxed">
                  We prepare, verify, and compile every required document to government standards —
                  no incomplete or rejected files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 7: How We Helped Clients Achieve Their Future (Success Stories Carousel) ── */}
      <div className="w-full bg-[#F9F9F8] py-20 md:py-28 flex justify-center mt-24 md:mt-32">
        <div className="w-full max-w-[1235px] px-4 md:px-0 flex flex-col gap-12">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 w-full">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#171A1E] leading-[1.1] tracking-tight">
              How We Helped Clients <br />
              Achieve{' '}
              <span style={FONT_SERIF} className="italic font-normal">
                Their Future
              </span>
            </h2>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => scrollCarousel('left')}
                className="flex items-center justify-center w-12 h-12 rounded-full hover:text-white bg-[#EDEDEA] hover:bg-[#d6d6d6] transition-all duration-200 outline-none cursor-pointer text-black font-medium"
              >
                <img src="/images/svg/left-arrow.svg" alt="" className="w-5 h-5 object-contain" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="flex items-center justify-center w-12 h-12 rounded-full hover:text-white bg-[#EDEDEA] hover:bg-[#d6d6d6] transition-all duration-200 outline-none cursor-pointer text-black font-medium"
              >
                <img src="/images/svg/right-arrow.svg" alt="" className="w-5 h-5 object-contain" />
              </button>
            </div>
          </div>

          {/* Carousel Slider */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-none pb-4 w-full"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {/* Card 1 */}
            <div
              className="w-[85vw] sm:w-[360px] md:w-[380px] lg:w-[332px] aspect-[3.8/5] sm:aspect-[4/5] rounded-[12px] overflow-hidden relative shadow-sm shrink-0 bg-[#EDEDEA] flex flex-col justify-end p-4 border border-[#E0E0E0]/20"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Image
                src="/images/walking.webp"
                alt="Scaling Operations"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* White overlay info box */}
              <div className="relative bg-white rounded-[20px] p-5 flex flex-col gap-4 shadow-md w-full z-10">
                <h3 className="text-[16px] md:text-[20px] font-medium text-[#171A1E] leading-snug md:leading-[28px]">
                  Scaling Operations for your Sustainable Growth
                </h3>
                <p className="text-[14px] text-[#6B6B69] leading-[22px] line-clamp-2">
                  Through a thorough operational audit, we identified inefficiencies, renegotiated
                  vendor...
                </p>
                <Link
                  href="/case-studies"
                  className="group flex items-center justify-between bg-black hover:bg-[#1C1F26] text-white rounded-full pl-5 pr-1 py-1 transition-all duration-200 mt-2 max-w-[140px]"
                >
                  <span className="text-[16px] font-medium tracking-wide">Read More</span>
                  <span className="flex items-center justify-center w-[22px] h-[22px] bg-white rounded-full text-black transition-transform duration-200">
                    <img src="images/svg/arrow.svg" alt="" className="transition-transform duration-200 group-hover:rotate-45" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="w-[85vw] sm:w-[360px] md:w-[380px] lg:w-[332px] aspect-[3.8/5] sm:aspect-[4/5] rounded-[12px] overflow-hidden relative shadow-sm shrink-0 bg-[#EDEDEA] flex flex-col justify-end p-4 border border-[#E0E0E0]/20"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Image
                src="/images/proud.webp"
                alt="Canada Express Entry"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* White overlay info box */}
              <div className="relative bg-white rounded-[12px] p-5 flex flex-col gap-4 shadow-md w-full z-10">
                <span className="flex items-center gap-1.5 w-fit bg-[#4BB543] text-[#ffffff] px-2 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider">
                  <img src="images/svg/circle-tick.svg" alt="" />
                  PR Approved
                </span>
                <h3 className="text-[15px] md:text-[18px] font-medium text-[#171A1E] leading-snug md:leading-[28px]">
                  Canada Express Entry — Software Engineer & Family Relocate from Dubai
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="w-[85vw] sm:w-[360px] md:w-[380px] lg:w-[332px] aspect-[3.8/5] sm:aspect-[4/5] rounded-[12px] overflow-hidden relative shadow-sm shrink-0 bg-[#EDEDEA] flex flex-col justify-end p-4 border border-[#E0E0E0]/20"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Image
                src="/images/intoLap.webp"
                alt="Australia Skilled Migration"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* White overlay info box */}
              <div className="relative bg-white rounded-[20px] p-5 flex flex-col gap-4 shadow-md w-full z-10">
                <span className="flex items-center gap-1.5 w-fit bg-[#4BB543] text-[#ffffff] px-2 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider">
                  <img src="images/svg/circle-tick.svg" alt="" />
                  PR Approved
                </span>
                <h3 className="text-[15px] md:text-[18px] font-medium text-[#171A1E] leading-snug md:leading-[28px]">
                  Australia Skilled Migration — Registered Nurse Secures Permanent Residency
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="w-[85vw] sm:w-[360px] md:w-[380px] lg:w-[332px] aspect-[3.8/5] sm:aspect-[4/5] rounded-[12px] overflow-hidden relative shadow-sm shrink-0 bg-[#EDEDEA] flex flex-col justify-end p-4 border border-[#E0E0E0]/20"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Image
                src="/images/smile.webp"
                alt="UK Student Visa"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* White overlay info box */}
              <div className="relative bg-white rounded-[20px] p-5 flex flex-col gap-4 shadow-md w-full z-10">
                <span className="flex items-center gap-1.5 w-fit bg-[#4BB543] text-[#ffffff] px-2 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider">
                  <img src="images/svg/circle-tick.svg" alt="" />
                  Visa Approved
                </span>
                <h3 className="text-[15px] md:text-[18px] font-medium text-[#171A1E] leading-snug md:leading-[28px]">
                  UK Student Visa — Candidate Admitted to London Business School
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 8: Proven by What Our Clients Say (Testimonials) ── */}
      <div className="w-full bg-[#ffffff] py-20 md:py-28 flex justify-center mt-24 md:mt-32">
        <div className="w-full max-w-[1235px] px-4 md:px-0 flex flex-col gap-12 ">
          <h2 className="text-[32px] sm:text-[40px] md:text-[64px] font-medium text-[#171A1E] leading-[1.1] tracking-tight text-center">
            Proven by What <br />
            Our Clients{' '}
            <span style={FONT_SERIF} className="italic font-medium">
              Say
            </span>
          </h2>

          {/* Carousel Slider */}
          <div
            ref={testimonialsRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-none pb-4 w-full"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {/* Card 1 */}
            <div
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="bg-[#F9F9F8] rounded-[12px] py-6 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-6">
                <img src="images/svg/quote.svg" alt="" className="text-[#171A1E] w-8 h-auto" />
                <p className="text-[13px] md:text-[18px] font-medium text-[#171A1E] leading-[26px]">
                  "Their strategic insight and hands-on approach helped us streamline operations and
                  unlock new growth opportunities. We saw measurable results within months."
                </p>
              </div>
              <div className="flex items-center gap-3 px-2">
                <div className="w-12 h-12 relative border-3 border-[black] rounded-full overflow-hidden shrink-0 bg-[#EDEDEA]">
                  <Image
                    src="/images/blue.webp"
                    alt="Cameron Williamson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[18px] font-medium text-[#171A1E]">Cameron Williamson</span>
                  <span className="text-[14px] text-[#8A8A88]">Stocking associate</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="bg-[#F9F9F8] rounded-[12px] py-6 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-6">
                <img src="images/svg/quote.svg" alt="" className="text-[#171A1E] w-8 h-auto" />
                <p className="text-[13px] md:text-[18px] font-medium text-[#171A1E] leading-[26px]">
                  "Their consultants didn't just offer advice—they rolled up their sleeves and
                  worked alongside us to solve complex challenges and deliver real results."
                </p>
              </div>
              <div className="flex items-center gap-3 px-2">
                <div className="w-12 h-12 relative border-3 border-[black] rounded-full overflow-hidden shrink-0 bg-[#EDEDEA]">
                  <Image
                    src="/images/woman.webp"
                    alt="Theresa Webb"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[18px] font-medium text-[#171A1E]">Theresa Webb</span>
                  <span className="text-[14px] text-[#8A8A88]">Medical assistant</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="bg-[#F9F9F8] rounded-[12px] py-6 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-6">
                <img src="images/svg/quote.svg" alt="" className="text-[#171A1E] w-8 h-auto" />
                <p className="text-[13px] md:text-[18px] font-medium text-[#171A1E] leading-[26px]">
                  "From the first meeting, they were invested in our success. Their structured
                  process and sharp strategy helped us turn a struggling department into a
                  high-performing unit."
                </p>
              </div>
              <div className="flex items-center gap-3 px-2">
                <div className="w-12 h-12 relative border-3 border-[black] rounded-full overflow-hidden shrink-0 bg-[#EDEDEA]">
                  <Image src="/images/bald.webp" alt="Arlene McCoy" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[18px] font-medium text-[#171A1E]">Arlene McCoy</span>
                  <span className="text-[14px] text-[#8A8A88]">Janitor</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="bg-[#F9F9F8] rounded-[12px] py-6 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-6">
                <img src="images/svg/quote.svg" alt="" className="text-[#171A1E] w-8 h-auto" />
                <p className="text-[13px] md:text-[18px] font-medium text-[#171A1E] leading-[26px]">
                  "They provided clarity where we had confusion, and structure where we had chaos.
                  It's been one of the best investments we've made as a company."
                </p>
              </div>
              <div className="flex items-center gap-3 px-2">
                <div className="w-12 h-12 relative border-3 border-[black] rounded-full overflow-hidden shrink-0 bg-[#EDEDEA]">
                  <Image src="/images/light.webp" alt="Jane Cooper" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[18px] font-medium text-[#171A1E]">Jane Cooper</span>
                  <span className="text-[14px] text-[#8A8A88]">Mechanic</span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="bg-[#F9F9F8] rounded-[12px] py-6 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-6">
                <img src="images/svg/quote.svg" alt="" className="text-[#171A1E] w-8 h-auto" />
                <p className="text-[13px] md:text-[18px] font-medium text-[#171A1E] leading-[26px]">
                  "One of the best consultation services we've ever had. Clear roadmap, extremely
                  helpful customer service, and consistent case updates."
                </p>
              </div>
              <div className="flex items-center gap-3 px-2">
                <div className="w-12 h-12 relative border-3 border-[black] rounded-full overflow-hidden shrink-0 bg-[#EDEDEA]">
                  <Image src="/images/cap.webp" alt="Eleanor Pena" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[18px] font-medium text-[#171A1E]">Eleanor Pena</span>
                  <span className="text-[14px] text-[#8A8A88]">Coordinator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 9: Complex Immigration Challenges ── */}
      <div className="w-full bg-[#ffffff] py-20 md:py-28 flex justify-center ">
        <div className="w-full max-w-[1235px] px-4 md:px-0 flex flex-col gap-12 items-center">
          <h2 className="text-[32px] sm:text-[40px] md:text-[64px] font-medium text-[#171A1E] leading-tight md:leading-[80px] text-center tracking-tight">
            Complex{' '}
            <span style={FONT_SERIF} className="italic font-medium">
              Immigration <br />
              Challenges
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 w-full mt-6">
            {/* Left Column: Team collaboration photo */}
            <div className="lg:col-span-6 w-full relative aspect-[4/3.2] rounded-[12px] overflow-hidden shadow-sm bg-[#EDEDEA] flex flex-col justify-end p-8">
              <Image
                src="/images/creative.webp"
                alt="Creative Team Brainstorming"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              {/* Dark gradient overlay at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <h3
                style={FONT_SERIF}
                className="relative z-10 text-[24px] sm:text-[32px] font-normal italic text-white leading-tight"
              >
                Your Future Starts Here
              </h3>
            </div>

            {/* Right Column: Dark Consultation Schedule card */}
            <div className="lg:col-span-4 bg-[#0F1117] rounded-[12px] p-4 md:py-6 md:px-5 text-white flex flex-col gap-6 shadow-xl relative justify-between">
              <div className="flex flex-col gap-5">
                <img src="images/svg/pin.svg" alt="" className="w-8 h-auto" />

                <h3 className="text-[22px] md:text-[24px] font-medium tracking-tight">
                  Schedule a Consultation
                </h3>
                <p className="text-[13px] md:text-[16px] text-[#ffffff] leading-relaxed">
                  Our immigration experts are available during the hours below and happy to
                  accommodate custom appointment times as needed.
                </p>

                {/* Schedule list */}
                <div className="flex flex-col gap-10 pt-6 mt-2 text-[18px]">
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-[#ffffff]">Sunday – Thursday</span>
                    <span className="font-regular">09:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-[#ffffff]">Saturday</span>
                    <span className="font-regular">10:00 – 16:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#ffffff]">Friday</span>
                    <span className="font-regular text-white/90 italic">By Appointment</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="group flex items-center justify-between bg-white hover:bg-[#EDEDEA] text-black rounded-full pl-6 pr-1 py-1 transition-all duration-200 mt-6 max-w-[230px]"
              >
                <span className="text-[16px] font-medium tracking-wide">Get Appointment</span>
                <span className="flex items-center justify-center w-[48px] h-[48px] bg-[#0F1117] rounded-full text-white transition-transform duration-200 animate-bounce-slow">
                  <img src="images/svg/white-arrow.svg" alt="" className="transition-transform duration-200 group-hover:rotate-45" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 10: Friendly Asked Questions ── */}
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
                  <img src="images/svg/arrow.svg" alt="" className="transition-transform duration-200 group-hover:rotate-45" />
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

      {/* ── Section 11: Immigration Insights That Drive Success ── */}
      <div className="w-full bg-[#F9F9F8] py-20 md:py-28 flex justify-center ">
        <div className="w-full max-w-[1235px] px-4 md:px-0 flex flex-col gap-12">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 w-full">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#171A1E] leading-[1.1] tracking-tight">
              Immigration Insights That <br />
              Drive{' '}
              <span style={FONT_SERIF} className="italic font-normal">
                Success
              </span>
            </h2>
            <Link
              href="/blog"
              className="group flex items-center gap-3 bg-[#0F1117] hover:bg-[#1C1F26] text-white rounded-full pl-6 pr-2 py-2.5 transition-all duration-200 shadow-sm w-fit"
            >
              <span className="text-[14px] font-medium tracking-wide">View More Blogs</span>
              <span className="flex items-center justify-center w-[28px] h-[28px] bg-white rounded-full text-[#0F1117] transition-transform duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-45"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </Link>
          </div>

          {/* 4-Column Grid of Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-4">
            {[
              {
                title: 'The growth plan a playbook toolkit for future',
                desc: 'The Growth Plan is your strategic toolkit designed to help future-proof your...',
                image: '/images/four.webp',
                aspect: 'aspect-square',
              },
              {
                title: 'The strategic edge insights an Hub Pro consultation',
                desc: 'We help you identify growth opportunities, refine your strategy...',
                image: '/images/tab.webp',
                aspect: 'aspect-[3/4]',
              },
              {
                title: 'The insight engine interact brief reports',
                desc: 'Get concise, actionable takeaways in moments—built to help you move...',
                image: '/images/shadow.webp',
                aspect: 'aspect-[3/2]',
              },
              {
                title: 'The leadership briefe that a explain series guide',
                desc: 'Each edition breaks down complex ideas into actionable insights, helping...',
                image: '/images/smile-call.webp',
                aspect: 'aspect-[3/4]',
              },
            ].map((blog, idx) => (
              <div key={idx} className="flex flex-col items-start gap-4 group">
                <div
                  className={`w-full relative ${blog.aspect} rounded-[12px] overflow-hidden bg-[#EDEDEA] shadow-sm`}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <h3 className="text-[18px] md:text-[20px] font-medium text-[#171A1E] leading-[28px] mt-1 group-hover:text-black line-clamp-2 min-h-[56px]">
                  {blog.title}
                </h3>
                <p className="text-[14px] text-[#535352] leading-[20px] font-regular line-clamp-2">
                  {blog.desc}
                </p>
                <Link
                  href="/blog"
                  className="group flex items-center justify-start hover:underline text-black font-medium text-[16px] gap-2 mt-1"
                >
                  <span>Read More</span>
                  <span className="flex items-center justify-center w-8 h-8 bg-black rounded-full text-white shrink-0 transition-transform duration-200">
                    <img src="images/svg/white-arrow.svg" alt="" className="w-2 h-2 transition-transform duration-200 group-hover:rotate-45" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section 12: Work with Experts to Build Your Grow (CTA Banner) ── */}
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
                  src="images/svg/circle-with-tick.svg"
                  className="w-[14px] h-[14px] mt-1 shrink-0"
                  alt=""
                />
                <span>Book a Free Consultation — No Commitment Required</span>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="images/svg/circle-with-tick.svg"
                  className="w-[14px] h-[14px] mt-1 shrink-0"
                  alt=""
                />
                <span>Discover Your Eligible Visa Pathways</span>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="images/svg/circle-with-tick.svg"
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
