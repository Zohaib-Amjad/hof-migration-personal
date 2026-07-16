'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function VisaTypesPage() {
  const FONT_SERIF = { fontFamily: "'Playfair Display', Georgia, serif" }
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  const solutions = [
    {
      title: 'Student Visa',
      desc: 'Explore globally recognized education options with expert support for university admissions and visa processes. We help students lay a solid foundation for their future.',
      image: '/images/blueBG.webp',
    },
    {
      title: 'Skilled Work Visa',
      desc: 'Advance your career by seeking job opportunities abroad. We assist qualified professionals in finding the right work visa options and crafting successful applications.',
      image: '/images/creative.webp',
    },
    {
      title: 'Business & Investor Visa',
      desc: 'Grow your business internationally or invest in new markets with customized immigration solutions for entrepreneurs and investors.',
      image: '/images/screen1.webp',
    },
    {
      title: 'Family Sponsorship',
      desc: 'Reunite with your family through our sponsorship programs. We guide you through the requirements and documentation with care.',
      image: '/images/verticle.webp',
      tintBlue: true,
    },
    {
      title: 'Permanent Residency',
      desc: 'Ensure your future with permanent residency options that provide stability, career growth, and access to quality healthcare and education.',
      image: '/images/watch.webp',
    },
    {
      title: 'Other Visa Options',
      desc: 'Need a specialized immigration route? Our consultants offer personalized advice for various visa categories based on your goals and eligibility.',
      image: '/images/handLap.webp',
    },
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
      {/* ── Section 1: Hero ── */}
      <div className="w-full relative min-h-[100vh] md:min-h-[100vh] flex items-center justify-start overflow-hidden mt-[-200px] md:mt-[-90px] ">
        <Image
          src="/images/visa.webp"
          alt="Trusted Partner for Global Immigration Success"
          fill
          priority
          className="object-cover object-center z-0"
        />

        <div className="max-w-[1235px] mx-auto w-full px-6 md:px-0 z-20 flex flex-col items-start gap-4 text-white">
          <span className="text-[11px] md:text-[16px] mt-32 md:mt-20 font-medium tracking-widest text-[#FFFFFF] uppercase">
            visa services
          </span>
          <h1 className="text-[36px] sm:text-[48px] md:text-[72px] font-semibold leading-[1.1] md:leading-[84px] tracking-tight max-w-[800px] mt-2">
            Find the Right Visa <br />
            for Your{' '}
            <span style={FONT_SERIF} className="italic font-semibold">
              Future
            </span>
          </h1>
          <p className="text-[14px] md:text-[20px] text-[#FFFFFF] leading-relaxed max-w-[720px] mt-2">
            Whether you're planning to study abroad, advance your career, reunite with your family,
            or establish a new life overseas, HOF Migration provides expert guidance to help you
            choose the right visa pathway. Our experienced consultants simplify complex immigration
            processes, ensuring every application is prepared with confidence and care.
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

      {/* ── Section 2: Explore Visa Solutions ── */}
      <div className="w-full max-w-[1235px] mt-24 md:mt-32 px-4 md:px-0 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-[28px] sm:text-[36px] md:text-[64px] font-medium text-[#03030F] leading-tight md:leading-[80px] tracking-tight">
            Explore Visa Solutions <br />
            That Match{' '}
            <span style={FONT_SERIF} className="italic font-medium">
              Your Goals
            </span>
          </h2>
          <p className="text-[16px] text-[#6B6B69] max-w-[700px] leading-relaxed mt-2">
            Every immigration journey is unique. Browse our visa services to discover the pathway
            that best aligns with your personal, educational, or professional aspirations.
          </p>
        </div>

        {/* 6 Grid cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full mt-4">
          {solutions.map((svc, idx) => (
            <div
              key={idx}
              className="relative rounded-[12px] overflow-hidden aspect-[4/3.2] sm:aspect-[5.5/3.2] shadow-md border border-[#E0E0E0]/30 flex items-end group"
            >
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-300 z-0"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {svc.tintBlue && (
                <div className="absolute inset-0 bg-[#0066cc]/15 mix-blend-overlay z-10 pointer-events-none" />
              )}
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />

              {/* Inside white floating card details info */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-8 md:right-45 bg-white rounded-[8px] p-4 md:p-5 flex flex-col items-start gap-2.5 z-20 shadow-lg border border-[#E0E0E0]/10">
                <h3 className="text-[18px] md:text-[24px] font-medium text-[#03030F]">
                  {svc.title}
                </h3>
                <p className="text-[13px] md:text-[16px] text-[#6B6B69] leading-normal md:leading-[22px]">
                  {svc.desc}
                </p>
                {idx === 0 && (
                  <Link
                    href="/contact"
                    className="group flex items-center justify-between bg-black text-white rounded-full pl-4 pr-1 py-1 transition-all duration-200 mt-1 w-fit"
                  >
                    <span className="text-[16px] font-medium tracking-wide mr-2">Learn More</span>
                    <span className="flex items-center justify-center w-[32px] h-[32px] bg-white rounded-full transition-transform duration-200">
                      <img
                        src="/images/svg/arrow.svg"
                        alt=""
                        aria-hidden="true"
                        className="w-[48px] h-[48px] transition-transform duration-200 group-hover:rotate-45"
                      />
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 3: Immigration Pathways Grid ── */}
      <div className="w-full bg-[#ffffff] py-24 md:py-32 flex flex-col items-center ">
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
              href="/services"
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

      {/* ── Section 4: Testimonials ── */}
      <div className="w-full bg-[#ffffff] py-20 md:py-28 flex justify-center">
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
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-none pb-4 w-full"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {/* Card 1 */}
            <div
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px]"
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
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px]"
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
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px]"
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
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px]"
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
              className="flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[260px]"
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

      {/* ── Section 5: Friendly Asked Questions ── */}
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

      {/* ── Section 6: CTA Banner ── */}
      {/* ── Section 6: CTA Banner (Work with Experts) ── */}
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
