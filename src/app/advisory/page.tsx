'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";

export default function BookAdvisory() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    businessDescription: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
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
      const response = await fetch('/api/book-advisory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        businessDescription: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly at info@qashcapital.com');
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
              Book a Call
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight max-w-3xl mx-auto">
              Let&apos;s Talk About Your Business
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
              A focused 60-minute clarity session to understand your challenges and chart a path forward.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="w-full bg-gray-50 py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
            {submitted && (
              <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-6 flex items-start gap-4">
                <FaCheckCircle className="text-green-600 text-2xl shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-1">Request Received!</h3>
                  <p className="text-green-800 text-sm">We&apos;ll review your details and send you a confirmation with available time slots within 24 hours.</p>
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

                {/* Name */}
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

                {/* Email */}
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

                {/* Phone */}
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

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>

                {/* Business Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">What Does Your Business Do?</label>
                  <textarea
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent resize-none"
                    placeholder="Tell us about your business, industry, and current stage..."
                  />
                </div>

                {/* Two Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      title="Select your preferred date"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Preferred Time</label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      title="Select your preferred time"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent"
                    >
                      <option value="">Select a time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Anything Else?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b0d18] focus:border-transparent resize-none"
                    placeholder="Let us know what specific challenges or questions you'd like to discuss..."
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
                    'Book Your Session'
                  )}
                </button>

                <p className="text-gray-500 text-xs text-center">
                  We&apos;ll get back to you within 24 hours to confirm your booking and discuss next steps.
                </p>

              </form>
            </div>

            {/* Alternative Contact */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Prefer to reach out directly?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@qashcapital.com"
                  className="text-[#4b0d18] hover:underline font-semibold"
                >
                  Email us
                </a>
                <span className="text-gray-400">or</span>
                <a
                  href="https://wa.me/2348070454584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4b0d18] hover:underline font-semibold"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* What to Expect */}
        <section className="w-full bg-white py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">What to Expect</h2>
            <div className="space-y-8">
              {[
                {
                  number: "1",
                  title: "We Listen",
                  desc: "We dig into your current situation, challenges, and goals. No judgment, just genuine curiosity.",
                },
                {
                  number: "2",
                  title: "We Analyze",
                  desc: "Using our expertise, we identify the core issues holding you back and the leverage points for growth.",
                },
                {
                  number: "3",
                  title: "We Recommend",
                  desc: "You leave with a clear, actionable roadmap — specific steps tailored to your business and situation.",
                },
                {
                  number: "4",
                  title: "Next Steps",
                  desc: "We discuss how we can support you further, whether it's ongoing advisory, funding prep, or structuring.",
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4b0d18] text-white font-bold text-lg shrink-0">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-20 sm:py-24 text-white text-center" style={{ backgroundColor: "#4b0d18" }}>
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Ready to Get Clarity?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Fill out the form above or reach out directly. We&apos;re here to help you move your business forward.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
