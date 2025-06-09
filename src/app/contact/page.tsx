import { FaPhone, FaEnvelope } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#4b0d18] to-orange-600 text-white py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
              Get in touch with us for any questions or assistance you need.
            </p>
          </div>
          <Image
            src="/contact-hero.jpg"
            alt="Contact Us"
            width={1920}
            height={1080}
            className="w-full h-[400px] object-cover"
            priority
          />
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-[#4b0d18]">Contact Us</h2>
                  <p className="text-gray-600 text-lg">
                    Have questions? We&apos;re here to help. Reach out to us through any of these channels.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                        <FaPhone className="text-orange-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#4b0d18]">Phone</h3>
                        <p className="text-gray-600">09027740184</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                        <FaEnvelope className="text-orange-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#4b0d18]">Email</h3>
                        <p className="text-gray-600">info@qashcapital.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="p-8 rounded-lg">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#4b0d18] mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder:text-gray-400 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent focus:text-gray-700"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-[#4b0d18] mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent placeholder:text-gray-400 placeholder:text-sm focus:text-gray-700"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#4b0d18] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent placeholder:text-gray-400 placeholder:text-sm focus:text-gray-700"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#4b0d18] mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#4b0d18] mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent placeholder:text-gray-400 placeholder:text-sm focus:text-gray-700"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#4b0d18] hover:bg-[#6f1c2d] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 z-0">
            <img
              src="/cta-bg.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
                Take the first step towards achieving your financial goals with Qash Capital.
              </p>
              <a href="/apply" className="bg-white text-[#4b0d18] hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg transform hover:scale-105">
                Apply Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 