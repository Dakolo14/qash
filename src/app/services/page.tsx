import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <>
    <Navbar />
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section for About Us */}
        <section className="relative bg-gradient-to-r from-[#4b0d18] to-orange-600 text-white py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
            Discover a range of financial solutions tailored to your needs.
            </p>
          </div>
        </section>

        {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#4b0d18] mb-12 text-center">
              Transform Finance Growth with Effective Services
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Transform your finance growth with our highly effective consulting services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Item 1: Personal Loans */}
              <div className="p-6 rounded-lg">
                <div className="w-32 h-32 mx-auto mb-4">
                  <Image src="/personal loan.png" alt="Personal Loans Illustration" width={128} height={128} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-center text-[#4b0d18] mb-2">Personal Loans</h3>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">
                  Quick access to funds from ₦50K to ₦5M with flexible repayment options.
                </p>
                <div className="flex justify-center">
                  <a href="/services" className="text-orange-600 hover:text-orange-700 font-semibold">Learn More</a>
                </div>
              </div>

              {/* Service Item 2: Business Loans */}
              <div className="p-6 rounded-lg">
                <div className="w-32 h-32 mx-auto mb-4">
                  <Image src="/business loan.png" alt="Business Loans Illustration" width={128} height={128} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-center text-[#4b0d18] mb-2">Business Loans</h3>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">
                  Financing solutions from ₦500K to ₦20M to help your business grow and thrive.
                </p>
                <div className="flex justify-center">
                  <a href="/services" className="text-orange-600 hover:text-orange-700 font-semibold">Learn More</a>
                </div>
              </div>

              {/* Service Item 3: Asset Finance */}
              <div className="p-6 rounded-lg">
                <div className="w-32 h-32 mx-auto mb-4">
                  <Image src="/asset finance.png" alt="Asset Finance Illustration" width={128} height={128} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-center text-[#4b0d18] mb-2">Asset Finance</h3>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">
                  Finance for vehicles and equipment with up to 80% of asset value.
                </p>
                <div className="flex justify-center">
                  <a href="/services" className="text-orange-600 hover:text-orange-700 font-semibold">Learn More</a>
                </div>
              </div>

              {/* Service Item 4: School Fees */}
              <div className="p-6 rounded-lg">
                <div className="w-32 h-32 mx-auto mb-4">
                  <Image src="/school fees.png" alt="School Fees Illustration" width={128} height={128} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-center text-[#4b0d18] mb-2">School Fees</h3>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">
                  Cover educational expenses with payments spread over the academic year.
                </p>
                <div className="flex justify-center">
                  <a href="/services" className="text-orange-600 hover:text-orange-700 font-semibold">Learn More</a>
                </div>
              </div>

              {/* Service Item 5: Rent Finance */}
              <div className="p-6 rounded-lg">
                <div className="w-32 h-32 mx-auto mb-4">
                  <Image src="/rent finance.png" alt="Rent Finance Illustration" width={128} height={128} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-center text-[#4b0d18] mb-2">Rent Finance</h3>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">
                  Finance up to 12 months of rent with affordable monthly repayments.
                </p>
                <div className="flex justify-center">
                  <a href="/services" className="text-orange-600 hover:text-orange-700 font-semibold">Learn More</a>
                </div>
              </div>

              {/* Service Item 6: Micro Savings */}
              <div className="p-6 rounded-lg">
                <div className="w-32 h-32 mx-auto mb-4">
                  <Image src="/micro savings.png" alt="Micro Savings Illustration" width={128} height={128} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-center text-[#4b0d18] mb-2">Micro Savings</h3>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">
                  Start saving with as little as ₦1,000 with competitive interest rates.
                </p>
                <div className="flex justify-center">
                  <a href="/services" className="text-orange-600 hover:text-orange-700 font-semibold">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="cta-bg.jpg"
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