import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qash Capital - Privacy Policy",
  description: "Learn about how Qash Capital collects, uses, and protects your personal data.",
};

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#4b0d18] to-orange-600 text-white py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
              Your privacy is important to us. Read our policy to understand how we handle your data.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-[#4b0d18] mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed">
                We collect personal information that you voluntarily provide to us when you register on the services, express an interest in obtaining information about us or our products and services, when you participate in activities on the services, or otherwise when you contact us.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The personal information that we collect depends on the context of your interactions with us and the services, the choices you make and the products and features you use. The personal information we collect may include the following:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Names</li>
                <li>Phone numbers</li>
                <li>Email addresses</li>
                <li>Mailing addresses</li>
                <li>Debit/credit card numbers</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#4b0d18] mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We use personal information collected via our services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>To facilitate account creation and logon process.</li>
                <li>To post testimonials with your consent.</li>
                <li>To deliver and facilitate delivery of services to the user.</li>
                <li>To respond to user inquiries/offer support to users.</li>
                <li>To send you marketing and promotional communications.</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#4b0d18] mb-4">3. Sharing Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li><span className="font-semibold">Consent:</span> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                <li><span className="font-semibold">Legitimate Interests:</span> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                <li><span className="font-semibold">Performance of a Contract:</span> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
                <li><span className="font-semibold">Legal Obligations:</span> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#4b0d18] mb-4">4. Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right to (i) request access and obtain a copy of your personal information, (ii) request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 