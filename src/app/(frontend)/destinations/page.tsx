'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function DestinationsPage() {
  const FONT_SERIF = { fontFamily: "'Playfair Display', Georgia, serif" }
  const [openFaq, setOpenFaq] = useState('02')
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  const glanceItems = [
    { title: 'Capital', desc: 'Washington, D.C.' },
    { title: 'Population', desc: '330+ Million' },
    { title: 'Currency', desc: 'US Dollar' },
    { title: 'Language', desc: 'English' },
    { title: 'Popular Pathways', desc: 'Student | Work \nBusiness | Family' },
  ]

  const pathways = [
    {
      id: '01',
      title: 'Student Visa',
      desc: 'Study at accredited colleges and universities.',
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
      title: 'Employment Visa',
      desc: 'Work with leading global employers.',
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
      title: 'Family Sponsorship',
      desc: 'Reunite with eligible family members.',
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
      title: 'Business & Investment',
      desc: 'Expand your business internationally.',
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
      title: 'PR',
      desc: 'Explore long-term settlement opportunities.',
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

  const processSteps = [
    {
      id: '01',
      title: 'Consultation',
      description:
        'Every journey starts with understanding your ambitions, qualifications, and future plans.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5.5 h-5.5 text-black"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      id: '02',
      title: 'Build Your Strategy',
      description:
        'Our consultants identify the most suitable immigration pathway based on your profile.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5.5 h-5.5 text-black"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      id: '03',
      title: 'Prepare with Confidence',
      description:
        'We assist with documentation, compliance, and application preparation to minimize delays and maximize accuracy.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5.5 h-5.5 text-black"
        >
          <path d="M21 2c-1.5 0-3 .5-4.5 1.5C14.5 5 13 7.5 12 10c-1 .5-2.5 1.5-3.5 2.5a6 6 0 0 0-1.5 3.5c0 .5.5 1.5 1.5 1.5.5 0 .5-.5 1-.5 1 0 1.5.5 1.5 1.5 0 .5-.5.5-.5 1 0 .5 1 .5 1.5.5a6 6 0 0 0 3.5-1.5c1-1 2-2.5 2.5-3.5 2.5-1 5-2.5 6.5-4.5C21.5 5 21 3.5 21 2z" />
        </svg>
      ),
    },
    {
      id: '04',
      title: 'Submit with Assurance',
      description:
        'Every application undergoes careful review before submission to meet all official requirements.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5.5 h-5.5 text-black"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 8 8 12 12 16" />
        </svg>
      ),
    },
    {
      id: '05',
      title: 'Continue the Journey',
      description:
        'From visa approval to settlement guidance, we remain committed to your success beyond the application process.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5.5 h-5.5 text-black"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
  ]

  const testimonials = [
    {
      quote:
        'Their strategic insight and hands-on approach helped us streamline operations and unlock new growth opportunities. We saw measurable results within months.',
      author: 'Cameron Williamson',
      role: 'Stocking associate',
      image: '/images/Serene Portrait of a Young Woman.png',
    },
    {
      quote:
        "Their consultants didn't just offer advice—they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.",
      author: 'Theresa Webb',
      role: 'Medical assistant',
      image: '/images/Serene Portrait of a Young Woman (1).png',
    },
    {
      quote:
        'From the first meeting, they were invested in our success. Their structured process and sharp strategy helped us turn a struggling department into a high-performing unit and refocus our entire operation on what truly matters.',
      author: 'Arlene McCoy',
      role: 'Janitor',
      image: '/images/Contemplative Sunrise Portrait.png',
    },
    {
      quote:
        "They provided clarity where we had confusion, and structure where we had chaos. It's been one of the best investments we've made as a company.",
      author: 'Jane Cooper',
      role: 'Mechanic',
      image: '/images/Serene Portrait of a Young Woman (2).png',
    },
  ]

  const faqs = [
    {
      id: '01',
      question: 'How quickly can we see results?',
      answer:
        'Immigration timeline results depend heavily on the specific visa type and destination country. Some skilled and study visas process within 2-4 months, while permanent residency options may take longer depending on government schedule Backlogs.',
    },
    {
      id: '02',
      question: 'What makes your approach different?',
      answer:
        "We combine data-driven diagnostics with hands-on execution support — we don't just deliver reports, we embed with your team to implement solutions. Plus, our has a 90% success rate.",
    },
    {
      id: '03',
      question: 'Do you work with startups or established businesses?',
      answer:
        'We cater to both individual applicants and corporate entities. Whether you are a business looking to sponsor skilled talent or a startup team establishing overseas, we offer scalable legal solutions.',
    },
    {
      id: '04',
      question: 'What industries do you specialize in?',
      answer:
        'Our professional placement and business visa specialties cover IT/Software development, Healthcare, Engineering, Finance, Education, and Entrepreneurial investments.',
    },
    {
      id: '05',
      question: 'How do you measure success of a consulting engagement?',
      answer:
        'We track success by key metrics: application accuracy rate, quick document audit clearance, overall visa approval rates, and post-arrival client settlement surveys.',
    },
  ]

  return (
    <div className="w-full flex flex-col items-center">
      {/* ── Section 1: Hero (Introduction banner highlighting immigration opportunities in destinations like the USA) ── */}
      <div className="w-full relative min-h-[100vh] md:min-h-[100vh] flex items-center justify-start overflow-hidden mt-[-250px] md:mt-[-90px] ">
        <Image
          src="/images/hand.webp"
          alt="Study, Work & Settle in the United States"
          fill
          priority
          className="object-cover z-0"
        />

        <div className="max-w-[1235px] mx-auto w-full px-6 md:px-0 z-20 flex flex-col items-start gap-4 text-white">
          <span className="text-[11px] md:text-[16px] mt-48 md:mt-20 font-medium tracking-widest text-[#FFFFFF] uppercase">
            destination
          </span>
          <h1 className="text-[36px] sm:text-[48px] md:text-[72px] font-semibold leading-[1.1] md:leading-[84px] tracking-tight max-w-[800px] mt-2">
            Study, Work & <br />
            Settle in the{' '}
            <span style={FONT_SERIF} className="italic font-semibold">
              United <br /> States
            </span>
          </h1>
          <p className="text-[14px] md:text-[20px] text-[#FFFFFF] leading-relaxed max-w-[720px] mt-2">
            Discover opportunities to study at world-renowned universities, advance your career,
            invest in your future, or reunite with your family. Our immigration specialists provide
            personalized guidance to help you choose the right pathway for the United States.
          </p>

          <Link
            href="/contact"
            className="group flex items-center justify-between bg-white hover:bg-[#EDEDEA] text-black rounded-full pl-6 pr-1 py-1 gap-3 transition-all duration-200 w-fit shrink-0 mt-4"
          >
            <span className="text-[16px] font-medium tracking-wide">Book Free Consultation</span>
            <span className="flex items-center justify-center w-[48px] h-[48px] bg-black rounded-full text-white transition-transform duration-200">
              <img src="/images/svg/white-arrow.svg" alt="" className="transition-transform duration-200 group-hover:rotate-45" />
            </span>
          </Link>
        </div>
      </div>

      {/* ── Section 2: United States at a Glance (Overview metrics of the destination: capital, population, currency, language) ── */}
      <div className="w-full bg-[#F9F9F8] py-10 md:py-15 flex flex-col items-center">
        <div className="w-full max-w-[1235px] px-6 md:px-0 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-full md:w-[30%] text-center md:text-left">
            <h2 className="text-[28px] sm:text-[36px] md:text-[52px] font-medium text-[#171A1E] leading-tight md:leading-[1.25] tracking-tight">
              United States <br />
              at a{' '}
              <span style={FONT_SERIF} className="italic font-medium">
                Glance
              </span>
            </h2>
          </div>

          {/* 5 Column Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 w-full md:w-[70%]">
            {glanceItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start gap-3">
                <div className="flex items-center justify-center w-13 h-13 bg-[#F3F3F3] rounded-full">
                  <img src="images/svg/plugIn.svg" className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] md:text-[20px] font-medium text-[#03030F]">
                    {item.title}
                  </span>
                  <span className="text-[14px] md:text-[18px] font-regular text-[#6B6B69] mt-1 whitespace-pre-line leading-snug">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section 3: Why Choose the USA (Detailing benefits of relocating, world-class education, and quality of life) ── */}
      <div className="w-full bg-[#ffffff] py-15 md:py-30 flex flex-col items-center">
        <div className="w-full max-w-[1235px] px-4 md:px-0 flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Column: Image */}
          <div className="w-full lg:w-[50%] relative rounded-[12px] overflow-hidden aspect-[6/7] shadow-md max-w-[340px] lg:max-w-none">
            <Image
              src="/images/light-build.webp"
              alt="New York Skyline Night View"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 380px"
            />
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-[50%] flex flex-col items-start lg:self-stretch lg:justify-between">
            <div className="flex flex-col items-start">
              <h2 className="text-[28px] sm:text-[36px] md:text-[64px] font-medium text-[#171A1E] leading-[1.2] tracking-tight mb-4">
                Why Choose the <br />
                <span style={FONT_SERIF} className="italic font-medium">
                  USA
                </span>
              </h2>
              <p className="text-[18px] text-[#6B6B69] leading-[26px] mb-8 lg:mb-6">
                Choosing the USA means embracing innovation and opportunity. With a robust economy
                and a culture that encourages creativity, the USA stands as a global leader.
              </p>
            </div>

            <ul className="flex flex-col gap-6.5 w-full mb-8 lg:mb-0">
              {[
                {
                  title: 'World-Class Education',
                  desc: 'Access globally recognized universities and diverse academic programs that prepare students for international careers.',
                },
                {
                  title: 'Career Opportunities',
                  desc: "Explore one of the world's largest job markets across technology, healthcare, engineering, finance, and more.",
                },
                {
                  title: 'High Quality of Life',
                  desc: 'Experience cultural diversity, innovation, modern infrastructure, and opportunities for long-term personal and professional growth.',
                },
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  {idx === 2 ? (
                    <img src="images/svg/rocket.svg" className="w-6 h-6 mt-3" />
                  ) : (
                    <img src="images/svg/thunder.svg" className="w-6 h-6 mt-3" />
                  )}

                  <div className="flex flex-col gap-0.5">
                    <span className="text-[20px] font-medium text-[#03030F]">{bullet.title}</span>
                    <p className="text-[16px] text-[#6B6B69] leading-[24px]">{bullet.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="group flex items-center gap-3.5 bg-[#0F1117] hover:bg-[#1C1F26] text-white rounded-full pl-6 pr-1 py-1 transition-all duration-200 w-fit"
            >
              <span className="text-[16px] font-medium tracking-wide">Get Started</span>
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

      {/* ── Section 4: Immigration Pathways Grid (Cards outlining pathways: student visa, employment, business, PR) ── */}
      <div className="w-full bg-[#ffffff] py-15 md:py-30 flex flex-col items-center ">
        <div className="w-full max-w-[1235px] px-6 md:px-0 flex flex-col gap-10">
          <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col items-start gap-1">
              <h2 className="text-[28px] sm:text-[36px] md:text-[52px] font-medium text-[#171A1E] leading-[1.2] tracking-tight">
                Immigration{' '}
                <span style={FONT_SERIF} className="italic font-medium">
                  Pathways
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
                className="group bg-[#F9F9F8] rounded-[12px] p-6.5 flex flex-col items-start gap-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
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

      {/* ── Section 5: Why Apply with HOF Migration (Showcasing office presence, track record, and consultation strengths) ── */}
      <div className="w-full max-w-[1235px] mt-16 md:mt-0 px-6 md:px-0 py-15 md:py-30 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-[28px] sm:text-[36px] md:text-[64px] font-medium text-[#171A1E] leading-[1.2] tracking-tight">
            Why Apply with{' '}
            <span style={FONT_SERIF} className="italic font-medium">
              HOF Migration
            </span>
          </h2>
          <p className="text-[16px] text-[#6B6B69] max-w-[800px] leading-relaxed mt-2">
            For over two decades, HOF Migration has been helping individuals and families navigate
            complex immigration pathways with confidence. Our team combines legal expertise,
            personalized guidance, and a client-first approach to make every immigration journey
            smooth and successful.
          </p>
          <p className="text-[16px] text-[#6B6B69] max-w-[800px] leading-relaxed">
            Whether pursuing education, permanent residency, work opportunities, or family
            sponsorship, we believe every client deserves honest advice and dedicated support.
          </p>
        </div>

        {/* Large Banner Image with overlay card */}
        <div className="relative w-full overflow-hidden aspect-[16/9] shadow-md mt-4 min-h-[320px]">
          <Image
            src="/images/about-lounge.png"
            alt="HOF Migration Office Interaction"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Overlay Box */}
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white rounded-[12px] px-5 pr-5 md:pr-25 py-6 shadow-lg max-w-[340px] flex flex-col gap-3.5 z-10 border border-[#E0E0E0]/30">
            <img src="/images/svg/pin-black.svg" className="object-cover object-center w-5 h-5" />

            <ul className="flex flex-col gap-2.5">
              {[
                'Licensed Consultants',
                'Personalized Strategy',
                'Documentation Support',
                'Transparent Process',
                'End-to-End Assistance',
              ].map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-[16px] font-regular text-[#03030F]"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Section 6: Immigration Process timeline (Chronological step roadmap outlining path to relocation success) ── */}
      <div className="w-full max-w-[1235px] py-15 md:py-30 px-4 md:px-0 flex flex-col lg:flex-row justify-between items-stretch gap-12">
        {/* Left Column */}
        <div className="w-full lg:w-[40%] flex flex-col items-start justify-start">
          <span className="text-[11px] md:text-[16px] font-medium text-[#000000] tracking-normal">
            [Our Process]
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[64px] font-medium text-[#03030F] leading-tight md:leading-[80px] tracking-tight mt-1 mb-6">
            Step-by-Step <br />
            to Business <br />
            <span style={FONT_SERIF} className="italic font-medium">
              Growth
            </span>
          </h2>
          <p className="text-[18px] text-[#6B6B69] leading-relaxed">
            How We Turn Strategy Into Measurable Success
          </p>
        </div>

        {/* Right Column: Timeline & Step Cards */}
        <div className="w-full lg:w-[51%] flex flex-col gap-6 relative">
          {processSteps.map((step, idx) => (
            <div key={step.id} className="flex items-center gap-6 w-full relative z-10">
              {/* Line segment connecting bullets (starts at center of 01, ends at center of 05, meeting perfectly) */}
              <div
                className={`absolute left-[24px] w-0.5 bg-[#000000] z-0 pointer-events-none hidden lg:block ${
                  idx === 0
                    ? 'top-1/2 bottom-[-24px]'
                    : idx === processSteps.length - 1
                      ? 'top-0 bottom-1/2'
                      : 'top-0 bottom-[-24px]'
                }`}
              />

              {/* Bullet */}
              <div
                className={`hidden lg:flex items-center justify-center w-12 h-12 rounded-full font-medium text-[18px] select-none shrink-0 transition-all z-10 ${
                  idx === 0
                    ? 'bg-black  border-black text-white'
                    : 'bg-white  border-[#E0E0E0] text-[#000000]'
                }`}
              >
                {step.id}
              </div>

              {/* Card */}
              <div className="flex-1 bg-white border border-[#E0E0E0]/30 rounded-[12px] p-6 md:p-8 flex items-start gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#EAEAFF] rounded-full shrink-0">
                    {step.icon}
                  </div>
                  <h3 className="text-[16px] md:text-[24px] font-medium text-[#171A1E] mt-5">
                    {step.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#6B6B69] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 7: Proven by What Our Clients Say (Testimonials sharing client relocation feedback) ── */}
      <div className="w-full bg-[#ffffff] py-15 md:py-30 flex justify-center">
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
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-none pt-4 pb-4 w-full"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {/* Card 1 */}
            <div
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px] transition-all duration-300 hover:-translate-y-1.5"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="bg-[#F9F9F8] rounded-[12px] py-6 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-6">
                <img src="/images/svg/quote.svg" alt="" className="text-[#171A1E] w-8 h-auto" />
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
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px] transition-all duration-300 hover:-translate-y-1.5"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="bg-[#F9F9F8] rounded-[12px] py-6 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-6">
                <img src="/images/svg/quote.svg" alt="" className="text-[#171A1E] w-8 h-auto" />
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
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px] transition-all duration-300 hover:-translate-y-1.5"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="bg-[#F9F9F8] rounded-[12px] py-6 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-6">
                <img src="/images/svg/quote.svg" alt="" className="text-[#171A1E] w-8 h-auto" />
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
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px] transition-all duration-300 hover:-translate-y-1.5"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="bg-[#F9F9F8] rounded-[12px] py-6 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-6">
                <img src="/images/svg/quote.svg" alt="" className="text-[#171A1E] w-8 h-auto" />
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
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px] transition-all duration-300 hover:-translate-y-1.5"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="bg-[#F9F9F8] rounded-[12px] py-6 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-6">
                <img src="/images/svg/quote.svg" alt="" className="text-[#171A1E] w-8 h-auto" />
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

      {/* ── Section 8: Friendly Asked Questions (Accordion answers addressing timelines, results, and criteria) ── */}
      <div className="w-full bg-[#F9F9F8] py-15 md:py-30 flex justify-center ">
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
                      className={`flex items-center justify-center w-7 h-7 rounded-full shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#DDDDFB]'
                          : 'bg-black group-hover:bg-[#1C1F26]'
                      }`}
                    >
                      <img
                        src={isOpen ? '/images/svg/minus.svg' : '/images/svg/plus.svg'}
                        alt={isOpen ? 'minus' : 'plus'}
                        className="w-4 h-4 object-contain"
                      />
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

      {/* ── Section 9: Work with Experts to Build Your Grow (Final CTA banner with link to contact page and eligibility features) ── */}
      <div className="w-full max-w-[1235px] px-4 py-15 md:py-30 md:px-[30px] bg-[#ffffff]">
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
