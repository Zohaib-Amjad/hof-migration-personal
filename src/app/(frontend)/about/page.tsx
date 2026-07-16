'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const FONT_SERIF = { fontFamily: "'Playfair Display', Georgia, serif" }
  const [openChoose, setOpenChoose] = useState('01')

  const chooseItems = [
    {
      id: '01',
      title: 'Personalized Immigration Strategies',
      description:
        "No two immigration journeys are the same. Every recommendation is tailored to each client's profile, goals, and long-term aspirations.",
    },
    {
      id: '02',
      title: 'Licensed & Experienced Professionals',
      description:
        'Our consultants hold certifications from ICCRC and MARA, ensuring compliance and accurate filing across all major destination countries.',
    },
    {
      id: '03',
      title: 'Transparent Communication',
      description:
        'We provide regular case updates and clear cost breakdowns with no hidden fees, keeping you fully informed at every stage.',
    },
    {
      id: '04',
      title: 'End-to-End Support',
      description:
        'From early assessment and documentation compilation to final visa filing and pre-departure briefings, we handle it all.',
    },
    {
      id: '05',
      title: '[05] Always Evolving',
      description:
        'We constantly update our knowledge on changing immigration policies and regulations to give you the most accurate, up-to-date advice.',
    },
  ]

  const processSteps = [
    {
      id: '01',
      title: 'Discover Your Goals',
      description:
        'Every journey starts with understanding your ambitions, qualifications, and future plans.',
      icon: <img src="/images/svg/pan.svg" className="w-7 h-7" />,
    },
    {
      id: '02',
      title: 'Build Your Strategy',
      description:
        'Our consultants identify the most suitable immigration pathway based on your profile.',
      icon: <img src="/images/svg/plugIn.svg" className="w-7 h-7" />,
    },
    {
      id: '03',
      title: 'Prepare with Confidence',
      description:
        'We assist with documentation, compliance, and application preparation to minimize delays and maximize accuracy.',
      icon: <img src="/images/svg/rocket.svg" className="w-7 h-7" />,
    },
    {
      id: '04',
      title: 'Submit with Assurance',
      description:
        'Every application undergoes careful review before submission to meet all official requirements.',
      icon: <img src="/images/svg/rocket.svg" className="w-7 h-7" />,
    },
    {
      id: '05',
      title: 'Continue the Journey',
      description:
        'From visa approval to settlement guidance, we remain committed to your success beyond the application process.',
      icon: <img src="/images/svg/rocket.svg" className="w-7 h-7" />,
    },
  ]

  const team = [
    {
      name: 'David Chen',
      role: 'Consultant',
      image: '/images/smilee.webp',
      social: 'x',
      socialUrl: 'https://x.com/HOFmigration',
    },
    {
      name: 'Jacob Jones',
      role: 'Project Manager',
      image: '/images/sleep.webp',
      social: 'x',
      socialUrl: 'https://x.com/HOFmigration',
    },
    {
      name: 'Jenny Wilson',
      role: 'Project Coordinator',
      image: '/images/handsome.webp',
      social: 'x',
      socialUrl: 'https://x.com/HOFmigration',
    },
    {
      name: 'Theresa Webb',
      role: 'Operations Analyst',
      image: '/images/simple.webp',
      social: 'linkedin',
      socialUrl: 'https://www.linkedin.com/company/68774040/admin/dashboard/',
    },
    {
      name: 'Ronald Richards',
      role: 'Client Success Manager',
      image: '/images/ai.webp',
      social: 'x',
      socialUrl: 'https://x.com/HOFmigration',
    },
    {
      name: 'Cody Fisher',
      role: 'Financial Strategy Advisor',
      image: '/images/old.webp',
      social: 'linkedin',
      socialUrl: 'https://www.linkedin.com/company/68774040/admin/dashboard/',
    },
  ]

  return (
    <div className="w-full  flex flex-col items-center">
      {/* ── Section 1: Hero (Introduction banner with title and background image) ── */}
      <div className="w-full relative min-h-[80vh] md:min-h-[100vh] flex items-center justify-start overflow-hidden mt-[-200px] md:mt-[-90px] ">
        <Image
          src="/images/cards.webp"
          alt="Trusted Partner for Global Immigration Success"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div className="max-w-[1235px] mx-auto w-full z-20 flex flex-col items-start gap-4 text-white px-6 md:px-0">
          <span className="text-[11px] md:text-[16px] mt-48 md:mt-80 font-medium tracking-widest text-[#FFFFFF]">
            Trusted Global Immigration Consultants
          </span>
          <h1 className="text-[36px] sm:text-[48px] md:text-[72px] font-semibold leading-tight md:leading-[84px] tracking-tight max-w-[720px] mt-2">
            Your Trusted Partner <br />
            for Global{' '}
            <span style={FONT_SERIF} className="italic font-semibold">
              Immigration Success
            </span>
          </h1>
        </div>
      </div>

      {/* ── Section 2: Recognized Logos (List of accreditation and trust icons like CICC and MARA) ── */}
      <div className="w-full max-w-[1235px] py-15 md:py-20 flex flex-col items-center gap-8 px-4 md:px-0">
        <h2 className="text-[20px] md:text-[20px] font-medium text-[#03030F] text-center tracking-tight">
          Trusted & Recognized By
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 w-full mt-2">
          <div className="relative h-12 w-32 md:h-16 md:w-44">
            <Image src="/images/image 5.webp" alt="CICC" fill className="object-contain" />
          </div>
          <div className="relative h-12 w-32 md:h-16 md:w-44">
            <Image src="/images/image 6.webp" alt="MARA" fill className="object-contain" />
          </div>
          <div className="relative h-12 w-32 md:h-16 md:w-44">
            <Image
              src="/images/image 7.webp"
              alt="Global Partners"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-12 w-44 md:h-16 md:w-56">
            <Image src="/images/image 9.webp" alt="ICIC" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* ── Section 3: Guiding Ambitions (Detailed introduction of HOF Migration with mission features cards) ── */}
      <div className="w-full max-w-[1235px] py-15 md:py-30 px-4 md:px-0 flex flex-col gap-10">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 w-full">
          <div className="flex flex-col items-start">
            <span className="text-[12px] md:text-[16px] font-medium text-[#000000] tracking-normal uppercase">
              ABOUT HOF MIGRATION
            </span>
            <h2 className="text-[32px] sm:text-[44px] md:text-[64px] font-medium text-[#171A1E] leading-tight md:leading-[80px] tracking-tight mt-2">
              Guiding Ambitions. Creating <br />
              Global{' '}
              <span style={FONT_SERIF} className="italic font-medium">
                Opportunities.
              </span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="group flex items-center justify-between bg-black hover:bg-[#1C1F26] text-white rounded-full pl-6 pr-1 py-1 gap-3 transition-all duration-200 w-fit shrink-0 mb-1"
          >
            <span className="text-[16px] font-medium tracking-wide">Book Consultation</span>
            <span className="flex items-center justify-center w-[48px] h-[48px] bg-white rounded-full text-black transition-transform duration-200">
              <img src="/images/svg/white-arrow.svg" alt="" className="brightness-0 transition-transform duration-200 group-hover:rotate-45" />
            </span>
          </Link>
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 w-full mt-4">
          {/* Left Column: Paragraphs & Cards */}
          <div className="w-full lg:w-[58%] flex flex-col items-start gap-6">
            <p className="text-[18px] md:text-[28px] font-regular text-[#171A1E] leading-[36px] mr-0 lg:mr-16">
              HOF Migration believes everyone deserves honest advice and professional support when
              seeking opportunities abroad. We know immigration is more than just a visa—it's a
              pivotal decision that impacts careers and families.
            </p>
            <p className="text-[14px] md:text-[16px] text-[#6B6B69] leading-[24px] mr-0 lg:mr-16">
              Over the years, we've helped students, skilled professionals, entrepreneurs, and
              families successfully navigate complex immigration pathways across Canada, Australia,
              the United Kingdom, the United States, Europe, and beyond. Every success story
              reflects our commitment to excellence, integrity, and personalized service.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-4">
              {[
                {
                  icon: <img src="/images/svg/folder.svg" alt="" />,
                  title: 'Strategic Planning',
                  desc: 'Defining goals and strategies for sustainable',
                },
                {
                  icon: <img src="/images/svg/thunder.svg" alt="" />,
                  title: 'Strategic Planning',
                  desc: 'Defining goals and strategies for sustainable',
                },
                {
                  icon: <img src="/images/svg/bulb.svg" alt="" />,
                  title: 'Strategic Planning',
                  desc: 'Defining goals and strategies for sustainable',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#ffffff] border border-[#E0E0E0]/30 rounded-[12px] px-5 py-6 flex flex-col items-start gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.01)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
                >
                  <div className="flex items-center justify-center w-15 h-15 bg-[#F3F3F3] rounded-full">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[20px] font-medium text-[#171A1E] mt-7">{item.title}</h4>
                    <p className="text-[16px] text-[#6B6B69] leading-relaxed mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-[38%] relative rounded-[24px] overflow-hidden min-h-[400px] lg:min-h-[588px] shadow-sm max-w-[490px] lg:max-w-none self-stretch">
            <Image
              src="/images/smile.webp"
              alt="Dignified HOF Consultant"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 450px"
            />
          </div>
        </div>
      </div>

      {/* ── Section 4: Our Story (Narrative history and overview of HOF Migration values with team meeting photo) ── */}
      <div className="w-full max-w-[1235px] py-15 md:py-30 px-4 md:px-0 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center text-center gap-3">
          <span className="text-[11px] md:text-[16px] font-medium text-[#000000] tracking-widest uppercase">
            OUR STORY
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[64px] font-medium text-[#171A1E] leading-tight md:leading-[80px] tracking-tight">
            Building Dreams Through Trusted <br />
            <span style={FONT_SERIF} className="italic font-normal">
              Immigration Expertise
            </span>
          </h2>
          <p className="text-[16px] text-[#6B6B69] max-w-[800px] leading-[24px] mt-2">
            For over two decades, HOF Migration has been helping individuals and families navigate
            complex immigration pathways with confidence. Our team combines legal expertise,
            personalized guidance, and a client-first approach to make every immigration journey
            smooth and successful.
          </p>
          <p className="text-[16px] text-[#6B6B69] max-w-[800px] leading-[24px]">
            Whether pursuing education, permanent residency, work opportunities, or family
            sponsorship, we believe every client deserves honest advice and dedicated support.
          </p>
        </div>

        {/* Large Banner Image with overlay card */}
        <div className="relative w-full overflow-hidden mt-4 aspect-[4/5] sm:aspect-auto sm:h-[650px] rounded-[12px]">
          <Image
            src="/images/meeting.webp"
            alt="HOF Migration Office Interaction"
            fill
            className="object-cover object-center"
          />
          {/* Overlay Box */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white rounded-[20px] px-5 py-6 shadow-lg sm:max-w-[304px] flex flex-col gap-3.5 z-10 border border-[#E0E0E0]/30">
            <img src="/images/svg/pin-black.svg" className="object-cover object-center w-5 h-5" />

            <ul className="flex flex-col gap-2.5">
              {[
                'Personalized Immigration Strategy',
                'Licensed Immigration Experts',
                'End-to-End Support',
                'Global Opportunities',
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

      {/* ── Section 5: Our Mission & Vision (Strategic vision details, mission lists, and team focus display) ── */}
      <div className="w-full max-w-[1235px] py-15 md:py-30 px-4 md:px-0 flex flex-col gap-20 md:gap-24">
        {/* Mission Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-16">
          {/* Left Text */}
          <div className="w-full lg:w-[45%] flex flex-col items-start">
            <span className="text-[11px] md:text-[16px] font-medium text-[#000000] tracking-widest uppercase">
              Our Mission
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[64px] font-medium text-[#03030F] leading-[1.15] tracking-tight mt-1 mb-4">
              Empowering <br />
              People Globally <br />
              <span style={FONT_SERIF} className="italic font-medium">
                Opportunities
              </span>
            </h2>
            <p className="text-[16px] text-[#6B6B69] leading-relaxed mb-6">
              Our mission is to simplify complex immigration processes while delivering ethical,
              transparent, and personalized solutions. We strive to help every client move forward
              with confidence by providing accurate guidance, strategic planning, and exceptional
              service throughout their immigration journey.
            </p>

            <ul className="flex flex-col gap-3 mb-6">
              {[
                'Deliver results-driven strategies aligned with your goals',
                'Empower organizations to grow and lead in a changing market',
                'Foster partnerships built on trust and measurable impact',
              ].map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[16px] font-medium text-[#03030F]"
                >
                  <img src="images/svg/tick.svg" className="w-3.5 h-3.5 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="group flex items-center gap-3.5 bg-[#0F1117] hover:bg-[#1C1F26] text-white rounded-full pl-6 pr-1 py-1 transition-all duration-200 w-fit"
            >
              <span className="text-[16px] font-medium tracking-wide">Get Started</span>
              <span className="flex items-center justify-center w-[48px] h-[48px] bg-white rounded-full transition-transform duration-200">
                <img src="/images/svg/arrow.svg" className="w-[48px] h-[48px] transition-transform duration-200 group-hover:rotate-45" />
              </span>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[50%] relative rounded-[24px] overflow-hidden aspect-[4/4] shadow-sm max-w-[460px] lg:max-w-none">
            <Image
              src="/images/gray.webp"
              alt="HOF Mission grayscaled workspace"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 460px"
            />
          </div>
        </div>

        {/* Vision Row */}
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-10 md:gap-20">
          {/* Right Text */}
          <div className="w-full lg:w-[53%] flex flex-col items-start gap-6">
            <span className="text-[11px] md:text-[16px] font-medium text-[#000000] tracking-widest uppercase">
              [Our Vision]
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[64px] font-medium text-[#03030F] leading-[1.15] tracking-tight mt-1 mb-4">
              Global <br />
              Immigration Trust <br />
              <span style={FONT_SERIF} className="italic font-normal">
                Partner
              </span>
            </h2>
            <p className="text-[16px] text-[#6B6B69] leading-relaxed mb-6">
              We envision a future where individuals and families can confidently pursue
              international opportunities without uncertainty. Through continuous innovation,
              professional excellence, and client-focused service, we aim to become one of the most
              trusted names in global immigration and education consulting.
            </p>

            <ul className="flex flex-col gap-3 mb-6">
              {[
                'Innovate continuously to stay ahead in a changing market',
                'Empower businesses to lead with confidence and clarity',
                'Build sustainable growth through forward-thinking strategies',
              ].map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[16px] font-medium text-[#03030F]"
                >
                  <img src="images/svg/tick.svg" className="w-3.5 h-3.5 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="group flex items-center gap-3.5 bg-[#0F1117] hover:bg-[#1C1F26] text-white rounded-full pl-6 pr-1 py-1 transition-all duration-200 w-fit"
            >
              <span className="text-[16px] font-medium tracking-wide">Get Started</span>
              <span className="flex items-center justify-center w-[48px] h-[48px] bg-white rounded-full transition-transform duration-200">
                <img src="/images/svg/arrow.svg" className="w-[48px] h-[48px] transition-transform duration-200 group-hover:rotate-45" />
              </span>
            </Link>
          </div>

          {/* Left Image */}
          <div className="w-full lg:w-[45%] relative rounded-[24px] overflow-hidden aspect-[4/5] shadow-sm max-w-[400px] lg:max-w-none">
            <Image
              src="/images/coat.webp"
              alt="HOF Vision standing suit portrait"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </div>

      {/* ── Section 6: Why Clients Choose HOF (Interactive accordions detailing custom strategies and professional licensure) ── */}
      <div className="w-full max-w-[1235px] py-15 md:py-30 px-4 md:px-0 flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Column: Heading & Accordions */}
        <div className="w-full lg:w-[50%] flex flex-col">
          <span className="text-[11px] md:text-[16px] font-medium text-[#000000] tracking-normal ">
            What Sets Us Apart
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[64px] font-medium text-[#03030F] leading-tight md:leading-[80px] tracking-tight mt-1 mb-6">
            Why Clients Choose <br />
            HOF{' '}
            <span style={FONT_SERIF} className="italic font-normal">
              Migration
            </span>
          </h2>

          <div className="flex flex-col">
            {chooseItems.map((item) => {
              const isOpen = openChoose === item.id
              return (
                <div key={item.id} className="w-full border-b border-[#CFD1DA] py-4.5">
                  <button
                    onClick={() => setOpenChoose(isOpen ? '' : item.id)}
                    className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer group py-2"
                  >
                    <span className="text-[15px] md:text-[28px] font-medium text-[#03030F] group-hover:text-black transition-colors pr-4">
                      {item.title}
                    </span>
                    <span
                      className={`flex items-center justify-center w-[36px] h-[36px] rounded-full transition-all duration-200 shrink-0 ${
                        isOpen ? 'bg-[#E8F0FE]' : 'bg-black'
                      }`}
                    >
                      {isOpen && (
                        <img
                          src="/images/svg/right-arrow.svg"
                          alt=""
                          className="w-[14px] h-[14px]"
                        />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-3 pb-2 opacity-100 transition-all duration-300">
                      <p className="text-[13px] md:text-[16px] text-[#6B6B69] leading-relaxed max-w-[500px]">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Mission Text & Crosswalk Image */}
        <div className="w-full lg:w-[40%] flex flex-col mt-6 lg:mt-20 self-end">
          <p className="text-[18px] text-[#6B6B69] leading-[26px] mb-6">
            At HOF migration, our mission is to empower businesses with strategic solutions that
            drive growth, efficiency, and transformation.
          </p>
          <div className="relative rounded-[12px] overflow-hidden aspect-[4/4] shadow-sm w-full">
            <Image
              src="/images/zebra.webp"
              alt="Consultant walking across crosswalk"
              fill
              className="object-cover object-center "
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>
      </div>

      {/* ── Section 7: Step-by-Step to Business Growth (A timeline mapping out our strategy from goals consultation to execution) ── */}
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

      {/* ── Section 8: Meet the Team (Grid of profiles of key consultants, coordinators, and directors) ── */}
      <div className="w-full bg-[#ffffff] py-15 md:py-30 flex flex-col items-center">
        <div className="w-full max-w-[1235px] px-4 md:px-0 flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-3">
            <span className="text-[11px] md:text-[16px] font-medium text-[#000000] tracking-widest uppercase">
              [Team Member]
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[64px] font-medium text-[#171A1E] leading-tight md:leading-[80px] tracking-tight">
              Meet the Beautiful <br />
              team behind{' '}
              <span style={FONT_SERIF} className="italic font-medium">
                optimo
              </span>
            </h2>
          </div>

          {/* Grid layout for 6 members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-14 w-full mt-4">
            {team.map((member, idx) => (
              <a
                key={idx}
                href={member.socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-[12px] overflow-hidden aspect-[5/6] shadow-sm border border-[#E0E0E0]/30 group block cursor-pointer"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {/* Bottom Card block info */}
                <div className="absolute bottom-4 left-4 right-4 md:left-8 md:right-8 bg-[#0A0D14] rounded-[8px] p-4 flex justify-between items-center text-white border border-white/5 shadow-md">
                  <div className="flex flex-col">
                    <span className="text-[18px] md:text-[20px] font-semibold">{member.name}</span>
                    <span className="text-[14px] md:text-[16px] text-[#F9F9F8]">{member.role}</span>
                  </div>

                  {/* Social Icon */}
                  <span className="flex items-center justify-center w-8 h-8 bg-white rounded-[12px] hover:bg-white/90 transition-all">
                    {member.social === 'x' ? (
                      <img src="/images/svg/x.svg" alt="X" className="w-3.5 h-3.5" />
                    ) : (
                      <img src="/images/svg/in.svg" alt="LinkedIn" className="w-3.5 h-3.5" />
                    )}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section 9: Work with Experts to Build Your Grow (Final CTA banner with links to get started and a feature list) ── */}
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
