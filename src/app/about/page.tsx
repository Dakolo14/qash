import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section for About Us */}
        <section className="relative bg-gradient-to-r from-[#4b0d18] to-orange-600 text-white py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Qash Capital</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
              Learn more about our journey, values, and the dedicated team behind our financial solutions.
            </p>
          </div>
        </section>

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
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-[#4b0d18] mb-12">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <Image src="/mission.png" alt="Our Mission" width={120} height={120} className="mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  To empower Nigerians with accessible, fair, and innovative financial solutions that foster economic growth and personal prosperity.
                </p>
              </div>
              <div>
                <Image src="/vision.png" alt="Our Vision" width={120} height={120} className="mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  To be the leading financial partner for every Nigerian, recognized for our integrity, innovation, and unwavering commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-[#4b0d18] mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Team Member 1 */}
              <div className="bg-gray-100 p-6 rounded-lg border-2 border-[#4b0d18] shadow-md">
                <Image src="/placeholder-team-member.png" alt="Bola Olajide" width={150} height={150} className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">Bola Olajide</h3>
                <p className="text-orange-600 mb-2">CEO & Founder</p>
                <p className="text-gray-600 text-sm">Bola has over 20 years of experience in the financial industry, leading successful ventures and driving innovation.</p>
              </div>
              {/* Team Member 2 */}
              <div className="bg-gray-100 p-6 rounded-lg border-2 border-[#4b0d18] shadow-md">
                <Image src="/placeholder-team-member.png" alt="Team Member Name" width={150} height={150} className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                <p className="text-orange-600 mb-2">Chief Operations Officer</p>
                <p className="text-gray-600 text-sm">Jane is responsible for streamlining operations and ensuring seamless service delivery to our clients.</p>
              </div>
              {/* Team Member 3 */}
              <div className="bg-gray-100 p-6 rounded-lg border-2 border-[#4b0d18] shadow-md">
                <Image src="/placeholder-team-member.png" alt="Team Member Name" width={150} height={150} className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">David Lee</h3>
                <p className="text-orange-600 mb-2">Head of Product</p>
                <p className="text-gray-600 text-sm">David leads our product development, focusing on creating user-centric and impactful financial solutions.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 