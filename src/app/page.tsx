import Image from "next/image";
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qash Capital - Home",
  description: "Unlock your financial potential with Qash Capital. Access flexible loans, smart savings, and expert financial services tailored to help you achieve your goals.",
};

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-4 bg-[url('/home-banner-image.png')] bg-cover bg-center">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Unlock Your Financial Potential with Qash Capital
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl">
            Access flexible loans, smart savings solutions, and expert financial
            services tailored to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/apply" className="bg-red-800 hover:bg-red-900 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105">
              Apply Now
            </a>
            <a href="/services" className="border border-white text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-red-800 shadow-md hover:shadow-lg transform hover:scale-105">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* About Section (from homepage) */}
      <section className="container mx-auto py-24 px-4 bg-white">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Container - Left Column */}
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md aspect-square rounded-3xl shadow-xl overflow-hidden relative">
        <Image
                  src="/about-image.png"
                  alt="Image representing Qash Capital's story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Content - Right Column */}
            <div className="md:w-1/2 lg:pr-12 text-center md:text-left">
              <span className="inline-block bg-orange-200 text-orange-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-red-800 mb-6 leading-tight">
                Proudly Nigerian, Globally Inspired
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in Lagos in 2025, Qash Capital transforms financial access for everyday
                Nigerians with deep local understanding and global standards. Our diverse team
                represents Nigeria's resilience and innovation, committed to providing flexible,
                fair financial services for all.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We believe financial inclusion is not just a privilege for the few, but a right for all
                Nigerians. Our solutions are tailored to address the unique challenges and
                opportunities in Nigeria's vibrant economy.
              </p>
              <a href="/services" className="bg-red-800 hover:bg-red-900 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105">
              Learn More
            </a>
            </div>
          </div>
        </section>

      {/* Services Section */}
      <section className="py-24 px-12"> {/* Outer section for vertical padding and overall background */}
        <div className="container mx-auto p-8 text-white text-center rounded-3xl shadow-xl bg-cover bg-center"> {/* Inner container for texture background and content */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Transform Finance Growth with Effective Services
          </h2>
          <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto opacity-80">
            Transform your finance growth with our highly effective consulting services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Service Item 1: Personal Loans */}
            <div className="flex flex-col items-center text-center">
              {/* Illustration Placeholder */}
              <div className="w-32 h-32 rounded-full flex items-center justify-center mb-4">
                <Image src="/personal loan.png" alt="Personal Loans Illustration" width={128} height={128} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Loans</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Quick access to funds from ₦50K to ₦5M with flexible repayment options.
              </p>
              <div className="flex justify-center">
                <a href="/services" className="text-blue-400 hover:underline font-semibold">Learn More</a>
              </div>
            </div>

            {/* Service Item 2: Business Loans */}
            <div className="flex flex-col items-center text-center">
              {/* Illustration Placeholder */}
              <div className="w-32 h-32 rounded-full flex items-center justify-center mb-4">
                <Image src="/business loan.png" alt="Business Loans Illustration" width={128} height={128} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Loans</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Financing solutions from ₦500K to ₦20M to help your business grow and thrive.
              </p>
              <div className="flex justify-center">
                <a href="/services" className="text-blue-400 hover:underline font-semibold">Learn More</a>
              </div>
            </div>

            {/* Service Item 3: Asset Finance */}
            <div className="flex flex-col items-center text-center">
              {/* Illustration Placeholder */}
              <div className="w-32 h-32 rounded-full flex items-center justify-center mb-4">
                <Image src="/asset finance.png" alt="Asset Finance Illustration" width={128} height={128} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Asset Finance</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Finance for vehicles and equipment with up to 80% of asset value.
              </p>
              <div className="flex justify-center">
                <a href="/services" className="text-blue-400 hover:underline font-semibold">Learn More</a>
              </div>
            </div>

            {/* Service Item 4: School Fees */}
            <div className="flex flex-col items-center text-center">
              {/* Illustration Placeholder */}
              <div className="w-32 h-32 rounded-full flex items-center justify-center mb-4">
                <Image src="/school fees.png" alt="School Fees Illustration" width={128} height={128} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">School Fees</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Cover educational expenses with payments spread over the academic year.
              </p>
              <div className="flex justify-center">
                <a href="/services" className="text-blue-400 hover:underline font-semibold">Learn More</a>
              </div>
            </div>

            {/* Service Item 5: Rent Finance */}
            <div className="flex flex-col items-center text-center">
              {/* Illustration Placeholder */}
              <div className="w-32 h-32 rounded-full flex items-center justify-center mb-4">
                <Image src="/rent finance.png" alt="Rent Finance Illustration" width={128} height={128} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rent Finance</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Finance up to 12 months of rent with affordable monthly repayments.
              </p>
              <div className="flex justify-center">
                <a href="/services" className="text-blue-400 hover:underline font-semibold">Learn More</a>
              </div>
            </div>

            {/* Service Item 6: Micro Savings */}
            <div className="flex flex-col items-center text-center">
              {/* Illustration Placeholder */}
              <div className="w-32 h-32 rounded-full flex items-center justify-center mb-4">
                <Image src="/micro savings.png" alt="Micro Savings Illustration" width={128} height={128} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Micro Savings</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Start saving with as little as ₦1,000 with competitive interest rates.
              </p>
              <div className="flex justify-center">
                <a href="/services" className="text-blue-400 hover:underline font-semibold">Learn More</a>
              </div>
            </div>
          </div>

          {/* View Services Button */}
          <a href="/services" className="border border-white text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-black shadow-md hover:shadow-lg transform hover:scale-105">
            View Services
          </a>

        </div>
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
                  Have questions? We're here to help. Reach out to us through any of these channels.
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

      <Footer />
    </>
  );
}
