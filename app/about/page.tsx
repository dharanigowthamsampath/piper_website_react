import {
  FaEye,
  FaBullseye,
  FaCheckCircle,
  FaStar,
  FaHandsHelping,
  FaLightbulb,
  FaUsers,
  FaChalkboardTeacher,
  FaLaptop,
  FaBook,
  FaBriefcase,
  FaCertificate,
  FaProjectDiagram,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Page Header */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Piper CADD
          </h1>
          <p className="text-lg text-gray-600">
            Empowering Future Designers with Industry-Leading CAD Education
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-green-600">
              Our Story
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Excellence in Technical Education
            </h2>
            <div className="mt-8 space-y-4 text-gray-600">
              <p>
                Piper CADD is a leading technical training institute dedicated
                to providing high-quality education in Computer-Aided Design
                (CAD) and related technologies. With a focus on practical,
                industry-relevant training, we have established ourselves as a
                trusted name in technical education.
              </p>
              <p>
                Our institute combines cutting-edge technology with experienced
                faculty to deliver comprehensive training programs that prepare
                students for successful careers in various industries, including
                mechanical, civil, and electrical engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                <FaEye className="text-xl text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-6">
                To be the premier institute for technical education, recognized
                globally for excellence in training and producing skilled
                professionals who drive innovation in the industry.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">Excellence in Education</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">Global Recognition</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">Innovation Leadership</span>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                <FaBullseye className="text-xl text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6">
                To provide industry-leading technical education that empowers
                individuals with practical skills and knowledge, enabling them
                to excel in their professional careers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">
                    Practical Skill Development
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">
                    Industry-Aligned Training
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">Career Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-green-600">
              What We Stand For
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaStar />,
                title: "Excellence",
                description:
                  "Commitment to delivering the highest quality education and training.",
              },
              {
                icon: <FaHandsHelping />,
                title: "Student Success",
                description:
                  "Dedicated to helping every student achieve their career goals.",
              },
              {
                icon: <FaLightbulb />,
                title: "Innovation",
                description:
                  "Continuously updating our curriculum with the latest industry trends.",
              },
              {
                icon: <FaUsers />,
                title: "Community",
                description:
                  "Building a supportive learning environment for all students.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl text-green-600">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-green-600">
              Our Strengths
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Why Choose PiperCaDD
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChalkboardTeacher />,
                title: "Expert Faculty",
                description:
                  "Learn from industry professionals with extensive practical experience.",
              },
              {
                icon: <FaLaptop />,
                title: "Modern Infrastructure",
                description:
                  "State-of-the-art computer labs with the latest software and hardware.",
              },
              {
                icon: <FaBook />,
                title: "Complete Program",
                description:
                  "Industry-aligned courses covering both theoretical and practical aspects.",
              },
              {
                icon: <FaBriefcase />,
                title: "Placement Support",
                description:
                  "Dedicated placement assistance and industry connections.",
              },
              {
                icon: <FaCertificate />,
                title: "Certification",
                description:
                  "Industry-recognized certifications upon course completion.",
              },
              {
                icon: <FaProjectDiagram />,
                title: "Practical Projects",
                description:
                  "Hands-on experience with real-world industry projects.",
              },
            ].map((strength, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl text-green-600">
                    {strength.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {strength.title}
                </h3>
                <p className="text-gray-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
