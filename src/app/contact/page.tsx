import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { FaEnvelope, FaWhatsapp, FaCalendarAlt, FaFileAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact | Qash Capital",
  description: "Book a strategy session, apply for funding, or get in touch.",
};

export default function Contact() {
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
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight max-w-3xl mx-auto">
              Let&apos;s Talk About Your Business
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
              Pick the option that fits where you are. We&apos;ll take it from there.
            </p>
          </div>
        </section>

        {/* Three Options */}
        <section className="w-full bg-gray-50 py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

              {/* Option 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col text-center">
                <div className="w-16 h-16 rounded-full bg-[#4b0d18] flex items-center justify-center mx-auto mb-6">
                  <FaCalendarAlt className="text-white text-2xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Book a Strategy Session</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                  Start here if you want clarity on your business — financially, structurally, or strategically. A focused session that gives you a clear path forward.
                </p>
                <a
                  href="/advisory"
                  className="bg-[#4b0d18] hover:bg-[#3a0a13] text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-md hover:shadow-lg transform hover:scale-105 inline-block"
                >
                  Book a Session
                </a>
              </div>

              {/* Option 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col text-center">
                <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center mx-auto mb-6">
                  <FaFileAlt className="text-white text-2xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Apply for Funding</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                  Ready to access capital? Tell us about your business and what you need the funding for. We&apos;ll review it and come back to you within 48 hours.
                </p>
                <a
                  href="/apply"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-md hover:shadow-lg transform hover:scale-105 inline-block"
                >
                  Apply Now
                </a>
              </div>

              {/* Option 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col text-center">
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-6">
                  <FaWhatsapp className="text-white text-2xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Chat With Us</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                  Have a quick question or not sure where to start? Reach out directly via WhatsApp or email and someone from our team will respond promptly.
                </p>
                <a
                  href="https://wa.me/2348070454584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-md hover:shadow-lg transform hover:scale-105 inline-block"
                >
                  Chat on WhatsApp
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Direct Contact */}
        <section className="w-full bg-white py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Or Reach Us Directly</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:08070454584"
                className="flex items-center gap-3 justify-center text-gray-700 hover:text-[#4b0d18] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#4b0d18]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <span className="font-medium">08070454584</span>
              </a>
              <a
                href="mailto:info@qashcapital.com"
                className="flex items-center gap-3 justify-center text-gray-700 hover:text-[#4b0d18] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-[#4b0d18] text-lg" />
                </div>
                <span className="font-medium">info@qashcapital.com</span>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
