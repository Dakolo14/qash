import Image from "next/image";
import { FaCheckCircle, FaSearch, FaChartLine, FaMoneyBillWave, FaRocket } from 'react-icons/fa';
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Qash Capital - Home",
  description: "Strategic advisory and structured funding for founders who want to build real, profitable businesses.",
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Section 1: Hero */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-4 py-16 sm:py-24 bg-[url('/home-banner-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight max-w-4xl">
            Structured Finance &amp; Growth Solutions for Ambitious Businesses
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl px-2 opacity-90">
            Qash Capital helps businesses access capital, optimize growth, and unlock strategic financial opportunities through tailored financing and advisory solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="/advisory" className="bg-red-800 hover:bg-red-900 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105">
              Book a Consultation
            </a>
            <a href="/apply" className="border border-white text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-red-800 shadow-md hover:shadow-lg transform hover:scale-105">
              Explore Solutions
            </a>
          </div>
        </div>
      </div>

      {/* Section 2: Why Qash Capital */}
      <section className="w-full bg-gray-50 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-8">
              Why Qash Capital
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Relationship-Driven Approach", desc: "We build lasting partnerships with our clients, understanding their business deeply and providing strategic support beyond just funding." },
              { title: "Flexible Financial Solutions", desc: "Every business is unique. We tailor our financing structures to match your specific needs, stage, and growth objectives." },
              { title: "Deep Understanding of the Nigerian Market", desc: "We navigate the complexities of the Nigerian business environment, providing solutions grounded in local reality and expertise." },
              { title: "Corporate Finance & Business Growth Expertise", desc: "Our team brings years of banking, corporate finance, and business advisory experience to every engagement." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Problem */}
      <section className="w-full bg-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-10">
            <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              The Reality
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Most businesses are working hard… but not structured to grow.
            </h2>
          </div>

          {/* Bento grid */}
          <div className="space-y-4">
            {/* Row 1: featured card + image */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-between" style={{ minHeight: '260px' }}>
                <div>
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-red-700 font-bold text-lg">!</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">No Financial Clarity</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    You&apos;re making decisions without a clear picture of your numbers. Without knowing your margins, cash flow, or true costs, every move is a guess.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden relative" style={{ minHeight: '260px' }}>
                <Image src="/financialclarity.jpg" alt="Business clarity" fill className="object-cover" />
              </div>
            </div>

            {/* Row 2: two equal cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-red-700 font-bold text-lg">!</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Poor Decision-Making</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Without strategy, growth becomes guesswork and costly mistakes pile up.</p>
                </div>
                <div className="h-52 relative overflow-hidden">
                  <Image src="/poordecision.jpg" alt="" fill className="object-cover opacity-100" />
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-red-700 font-bold text-lg">!</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Wrong Use of Capital</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Accessing funds without structure leads to more problems, not progress.</p>
                </div>
                <div className="h-52 relative overflow-hidden">
                  <Image src="/wronguse.jpg" alt="" fill className="object-cover opacity-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What We Do */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: '#000000', backgroundImage: "url('/noise-texture.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            We Don&apos;t Just Fund. We Build.
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            Three pillars that move your business from where it is to where it should be.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "💡", title: "Strategic Advisory", desc: "We help you see clearly — your numbers, your structure, your path forward." },
              { icon: "💰", title: "Capital Solutions", desc: "Structured funding for businesses ready to scale, not just survive." },
              { icon: "🤝", title: "Growth Partnership", desc: "We stay in your corner — from strategy to execution to expansion." },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a href="/advisory" className="border border-white text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-black shadow-md hover:shadow-lg transform hover:scale-105">
              Explore Advisory Services
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Who This Is For */}
      <section className="w-full bg-gray-50 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Who This Is For
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Built for a Specific Kind of Founder
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { emoji: "📈", title: "Growth-Stage SMEs", desc: "You&apos;ve validated your business and you&apos;re ready to scale. Now you need structure and capital to do it right." },
              { emoji: "👑", title: "Female Founders", desc: "Women building real businesses deserve access to the same capital, clarity, and strategic support as anyone else." },
              { emoji: "🏢", title: "Professionals Building Businesses", desc: "You have expertise and ambition. We give you the financial structure and backing to turn your skills into something scalable." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: '#1e1e1e' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Four Steps to Structured Growth
            </h2>
            <p className="text-white/60 mt-3 text-lg max-w-xl mx-auto">
              A clear process that takes your business from confusion to confidence.
            </p>
          </div>

          {/* Desktop: 3-col layout — Mobile: stacked */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

            {/* Left column: steps 1 & 2 */}
            <div className="flex flex-col gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex-1">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <FaSearch className="text-orange-600 text-xl" />
                </div>
                <p className="text-white text-sm leading-relaxed">
                  <span className="font-bold">Clarity Session</span> We start by understanding your business, your numbers, and your goals.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex-1">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <FaChartLine className="text-orange-600 text-xl" />
                </div>
                <p className="text-white text-sm leading-relaxed">
                  <span className="font-bold">Strategy</span> We build a clear roadmap — financial, structural, and operational.
                </p>
              </div>
            </div>

            {/* Center column: image */}
            <div className="hidden md:block rounded-2xl overflow-hidden relative" style={{ minHeight: '360px' }}>
              <Image
                src="/smile.jpg"
                alt="Qash Capital advisory"
                fill
                className="object-cover"
              />
            </div>

            {/* Right column: steps 3 & 4 */}
            <div className="flex flex-col gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex-1">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <FaMoneyBillWave className="text-orange-600 text-xl" />
                </div>
                <p className="text-white text-sm leading-relaxed">
                  <span className="font-bold">Capital Alignment</span> We match you with the right funding structure for your stage.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex-1">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <FaRocket className="text-orange-600 text-xl" />
                </div>
                <p className="text-white text-sm leading-relaxed">
                  <span className="font-bold">Execution Support</span> We stay involved, tracking progress and adjusting as you grow.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 7: Why Qash */}
      <section className="w-full bg-[#4b0d18] py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Why Qash Capital
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              We&apos;re Different By Design
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "We Think Before We Fund", desc: "Every naira we deploy is backed by analysis, strategy, and a clear plan for your business growth." },
              { title: "We Understand Nigeria", desc: "We know the terrain, the challenges, the opportunities, and what it takes to build here." },
              { title: "Capital + Intelligence", desc: "We don&apos;t just give you money. We give you the clarity and support to use it well." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <FaCheckCircle className="text-orange-400 text-2xl mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Soft Authority */}
      {/* <section className="w-full bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { stat: "10+", label: "Years of Banking & Finance Experience" },
              { stat: "50+", label: "Businesses Supported" },
              { stat: "₦500M+", label: "Capital Structured" },
              { stat: "100%", label: "Committed to Your Growth" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-bold text-red-800 mb-2">{item.stat}</div>
                <p className="text-gray-600 text-sm leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Section 9: CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cta-bg.jpg"
            alt="Qash Capital"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Let&apos;s Discuss Your Growth Goals</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Whether you are seeking financing, strategic advisory, or business support solutions, Qash Capital is ready to work with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/advisory" className="bg-white text-[#4b0d18] hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg transform hover:scale-105">
              Schedule a Consultation
            </a>
            <a href="/contact" className="border border-white text-white hover:bg-white hover:text-[#4b0d18] font-semibold py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg transform hover:scale-105">
              Contact Us
            </a>
          </div>
        </div>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
