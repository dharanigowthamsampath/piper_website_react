import { FaUserTie, FaLaptopCode, FaCertificate } from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie className="w-8 h-8" />,
    title: "Expert Faculty",
    description:
      "Learn from industry professionals with years of practical experience in CAD design.",
  },
  {
    icon: <FaLaptopCode className="w-8 h-8" />,
    title: "Modern Lab Facility",
    description:
      "State-of-the-art computer labs equipped with the latest software and hardware.",
  },
  {
    icon: <FaCertificate className="w-8 h-8" />,
    title: "Certification",
    description:
      "Receive industry-recognized certification upon successful course completion.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-green-500 font-medium">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Excellence in CAD Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master industry-leading software with our specialized courses
            designed for professional excellence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl text-center group
                         hover:-translate-y-2 transition-all duration-300
                         border border-gray-100 hover:shadow-xl hover:shadow-green-100"
            >
              <div
                className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center
                            mx-auto mb-6 text-green-500 group-hover:scale-110 transition-transform duration-300"
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-green-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
