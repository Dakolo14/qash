import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qash Capital - Terms and Conditions",
  description: "Understand the terms and conditions for using Qash Capital's financial services.",
};

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#4b0d18] to-orange-600 text-white py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
              Please read our terms of service carefully.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-[#4b0d18] mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Qash Capital. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>

              <h2 className="text-3xl font-bold text-[#4b0d18] mb-4">2. Use of Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are provided for informational and financial transaction purposes. You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the services.
              </p>

              <h2 className="text-3xl font-bold text-[#4b0d18] mb-4">3. Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by this reference. Please review the Privacy Policy to understand our practices.
              </p>
              
              <h2 className="text-3xl font-bold text-[#4b0d18] mb-4">4. Disclaimers</h2>
              <p className="text-gray-700 leading-relaxed">
                The information and services on this website are provided &quot;as is&quot; without any representations or warranties, express or implied. Qash Capital makes no representations or warranties in relation to this website or the information and materials provided on this website.
              </p>

              <h2 className="text-3xl font-bold text-[#4b0d18] mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Qash Capital will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website: for any indirect, special or consequential loss; or for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.
              </p>

              <h2 className="text-3xl font-bold text-[#4b0d18] mb-4">6. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Qash Capital may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions on this website.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 