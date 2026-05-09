'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";

export default function Funding() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    businessType: '',
    fundingAmount: '',
    fundingPurpose: '',
    monthlyRevenue: '',
    tradingPeriod: '',
    additionalInfo: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/apply-funding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        businessType: '',
        fundingAmount: '',
        fundingPurpose: '',
        monthlyRevenue: '',
        tradingPeriod: '',
        additionalInfo: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly at info@qashcapitalltd.com');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
              Funding
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight max-w-3xl mx-auto">
              Structured Funding for Businesses That Are Ready to Grow
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
              We only fund businesses that show clarity, structure, and growth potential.
            </p>
          </div>
        </section>

        {/* Pre-Funding Statement */}
        <section className="w-full bg-gray-50 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              More Than a Loan. It&apos;s a Partnership.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Before we deploy capital, we make sure your business is in a position to use it well. That means assessing your structure, cash flow, and growth plan — not just your application.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              If you&apos;re not quite ready, we&apos;ll tell you honestly and help you get there. That&apos;s what separates us from a lender.
            </p>
          </div>
        </section>

        {/* Funding Options */}
        <section className="w-full bg-white py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                Funding Options
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Capital for Every Stage of Growth
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Business Loans",
                  range: "₦500K – ₦50M",
                  desc: "Working capital and expansion financing for established SMEs ready to scale their operations.",
                },
                {
                  title: "Asset Finance",
                  range: "₦1M – ₦50M",
                  desc: "Acquire the equipment, vehicles, or machinery your business needs without depleting your cash reserves.",
                },
                {
                  title: "Vendor Financing",
                  range: "Custom",
                  desc: "Supply chain and vendor payment solutions to keep your business moving without cash flow interruptions.",
                },
                {
                  title: "Proof of Funds",
                  range: "As Required",
                  desc: "Structured documentation to support bids, tenders, and high-stakes business opportunities.",
                },
                {
                  title: "Rent Finance",
                  range: "₦500K – ₦5M",
                  desc: "Get the space your business needs without the full upfront cost — pay in manageable instalments.",
                },
                {
                  title: "Micro Savings & Credit",
                  range: "From ₦50K",
                  desc: "Entry-level credit and savings products designed for early-stage businesses and individuals building financial history.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col"
                >
                  <div className="text-sm font-bold text-orange-600 mb-2">{item.range}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Qualifies */}
        <section
          className="py-20 sm:py-24"
          style={{
            backgroundColor: "#000000",
            backgroundImage: "url('/noise-texture.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                Who Qualifies
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                What We Look For
              </h2>
              <p className="text-white/60 mt-4 text-lg">
                We fund businesses that show these signs of readiness.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                "A clear business model with identifiable revenue streams",
                "At least 6–12 months of trading history",
                "Evidence of financial management — even basic records",
                "A specific plan for how the capital will be deployed",
                "Openness to advisory and strategic input",
                "A commitment to repayment discipline",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <FaCheckCircle className="text-orange-400 text-lg mt-0.5 shrink-0" />
                  <p className="text-white/70 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="w-full bg-gray-50 py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
            <div className="text-center mb-12">
              <span className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                Apply Now
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Submit Your Funding Application
              </h2>
              <p className="text-gray-600 mt-4">Fill out the form below. We&apos;ll review your details and get back to you within 48 hours.</p>
            </div>

            {submitted && (
              <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-6 flex items-start gap-4">
                <FaCheckCircle className="text-green-600 text-2xl shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-1">Application Received!</h3>
                  <p className="text-green-800 text-sm">We&apos;ll review your application and contact you within 48 hours to discuss next steps.</p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-8 bg-red-50 border border-red-200 rounded-2xl p-6">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent"
                      placeholder="08012345678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Business Type</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    title="Select your business type"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent"
                  >
                    <option value="">Select your business type</option>
                    <option value="Retail">Retail & E-commerce</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Services">Services</option>
                    <option value="Technology">Technology</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Logistics">Logistics & Transportation</option>
                    <option value="Health">Health & Wellness</option>
                    <option value="Hospitality">Hospitality & Food</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Trading Period */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">How Long Has Your Business Been Operating?</label>
                  <select
                    name="tradingPeriod"
                    value={formData.tradingPeriod}
                    onChange={handleChange}
                    required
                    title="Select your trading period"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent"
                  >
                    <option value="">Select trading period</option>
                    <option value="Less than 6 months">Less than 6 months</option>
                    <option value="6 - 12 months">6 - 12 months</option>
                    <option value="1 - 2 years">1 - 2 years</option>
                    <option value="2 - 5 years">2 - 5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                </div>

                {/* Row 3: Revenue & Funding Amount */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Average Monthly Revenue</label>
                    <select
                      name="monthlyRevenue"
                      value={formData.monthlyRevenue}
                      onChange={handleChange}
                      required
                      title="Select monthly revenue range"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="Less than ₦100K">Less than ₦100K</option>
                      <option value="₦100K - ₦500K">₦100K - ₦500K</option>
                      <option value="₦500K - ₦1M">₦500K - ₦1M</option>
                      <option value="₦1M - ₦5M">₦1M - ₦5M</option>
                      <option value="₦5M+">₦5M+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">How Much Do You Need?</label>
                    <input
                      type="text"
                      name="fundingAmount"
                      value={formData.fundingAmount}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent"
                      placeholder="e.g., ₦2,000,000"
                    />
                  </div>
                </div>

                {/* Funding Purpose */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">What Will You Use the Funding For?</label>
                  <textarea
                    name="fundingPurpose"
                    value={formData.fundingPurpose}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent resize-none"
                    placeholder="E.g., inventory, equipment, expansion, working capital..."
                  />
                </div>

                {/* Additional Info */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Anything Else We Should Know?</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent resize-none"
                    placeholder="Any additional information that would help us evaluate your application..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#4b0d18] hover:bg-[#3a0a13] text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>

                <p className="text-gray-500 text-xs text-center">
                  We&apos;ll review your application and get back to you within 48 hours.
                </p>

              </form>
            </div>
          </div>
        </section>

        {/* CTA - Alternative */}
        <section className="w-full bg-white py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Sure if You&apos;re Ready?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Unsure about your eligibility? Book a strategy session first. We&apos;ll assess your situation and guide you on next steps.
            </p>
            <a
              href="/advisory"
              className="inline-block border border-[#4b0d18] text-[#4b0d18] hover:bg-[#4b0d18] hover:text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Book a Strategy Session
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-20 sm:py-24 text-white text-center" style={{ backgroundColor: "#4b0d18" }}>
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Ready to Access Capital?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Submit your application above. We&apos;ll review it and be in touch within 48 hours to discuss your funding options.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
