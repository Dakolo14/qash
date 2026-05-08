import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Qash Capital",
  description: "Built for founders who want more than just money.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800">

        {/* Hero */}
        <section
          className="relative text-white pt-32 pb-24 text-center"
          style={{ backgroundColor: "#4b0d18" }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight max-w-3xl mx-auto">
              Built for Founders Who Want More Than Just Money
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
              We started Qash Capital because we saw a gap — ambitious Nigerian businesses with real potential, getting no real support.
            </p>
          </div>
        </section>

        {/* The Gap We Saw */}
        <section className="w-full bg-white py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
              <div className="md:w-1/2 flex justify-center">
                <div className="w-full max-w-md aspect-square rounded-3xl shadow-xl overflow-hidden relative">
                  <Image
                    src="/about-image.png"
                    alt="Qash Capital story"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <span className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  Why We Exist
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  The Gap in the Market
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  After years inside the banking and finance system, we saw the same story repeat itself: business owners who were working hard, had real revenue, and genuine ambition — but couldn&apos;t access meaningful capital or strategic support.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Not because they weren&apos;t good enough. But because no one was helping them present their business in the right way. No one was sitting across the table from them and saying — here&apos;s what you need to fix, here&apos;s what you need to say, and here&apos;s how to get funded.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We built Qash Capital to be that partner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="w-full bg-gray-50 py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                Our Background
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Experience You Can Actually Trust
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Built from the Inside</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Our team brings over 10 years of direct experience in banking, credit analysis, business advisory, and financial structuring. We&apos;ve worked inside the institutions. We know how lenders think — and how to help businesses speak their language.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rooted in Nigeria</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We understand the Nigerian business environment — its constraints, its opportunities, and the resilience it takes to build here. Our advice is never generic. It&apos;s grounded in reality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Focused on Outcomes</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We don&apos;t measure success by how many clients we sign. We measure it by how many businesses we help grow, get funded, and build something that lasts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic, Not Just Transactional</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Every interaction with Qash Capital is designed to build something. Whether it&apos;s your financial understanding, your business structure, or your access to capital — we&apos;re always moving you forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section
          className="py-20 sm:py-24"
          style={{
            backgroundColor: "#000000",
            backgroundImage: "url('/noise-texture.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 leading-tight">
              Clarity. Structure. Capital.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "Clarity",
                  desc: "Every good business decision starts with understanding your numbers, your market, and your options. We build that clarity first — before anything else.",
                },
                {
                  title: "Structure",
                  desc: "Without the right foundation — legal, financial, and operational — growth creates chaos. We help you build the structure that makes scale possible.",
                },
                {
                  title: "Capital",
                  desc: "Money is the tool, not the goal. When your business has clarity and structure, capital becomes something you can access, use wisely, and grow from.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        {/* <section className="w-full bg-white py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              {[
                { stat: "10+", label: "Years in Banking & Finance" },
                { stat: "50+", label: "Businesses Supported" },
                { stat: "₦500M+", label: "Capital Structured" },
                { stat: "100%", label: "Committed to Your Growth" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-4xl font-bold text-[#4b0d18] mb-2">{item.stat}</div>
                  <p className="text-gray-600 text-sm leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <section className="w-full py-20 sm:py-24 text-white text-center" style={{ backgroundColor: "#4b0d18" }}>
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Whether you need strategic advisory, funding, or both — start with a conversation.
            </p>
            <a
              href="/contact"
              className="bg-white text-[#4b0d18] hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg transform hover:scale-105 inline-block"
            >
              Work With Us
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
