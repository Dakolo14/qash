import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ApplyNow() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#4b0d18] to-orange-600 text-white py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Apply for a Loan</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
              Fill out the form below to apply for a loan and select your desired service.
            </p>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-[#4b0d18] mb-8 text-center">Your Application</h2>
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-[#4b0d18] mb-2">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4b0d18] mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#4b0d18] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-[#4b0d18] mb-2">Address</label>
                    <input
                      type="text"
                      id="address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent"
                      placeholder="Enter your address"
                    />
                  </div>
                </div>

                {/* Loan Information */}
                <div>
                  <label htmlFor="loanAmount" className="block text-sm font-medium text-[#4b0d18] mb-2">Desired Loan Amount</label>
                  <input
                    type="number"
                    id="loanAmount"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent"
                    placeholder="e.g., 500000 (Naira)"
                  />
                </div>
                
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-[#4b0d18] mb-2">Select Service</label>
                  <select
                    id="serviceType"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent bg-white"
                  >
                    <option value="">Choose a service</option>
                    <option value="personal-loan">Personal Loan</option>
                    <option value="business-loan">Business Loan</option>
                    <option value="sme-financing">SME Financing</option>
                    <option value="other">Other Financial Service</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4b0d18] mb-2">Additional Message (Optional)</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent"
                    placeholder="Tell us more about your needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4b0d18] hover:bg-[#6f1c2d] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 