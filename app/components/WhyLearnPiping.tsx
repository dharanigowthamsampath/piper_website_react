import Link from "next/link";
import {
  FaStream,
  FaShieldAlt,
  FaChartLine,
  FaClipboardCheck,
  FaCogs,
  FaLaptopCode,
  FaProjectDiagram,
  FaArrowRight,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaStream className="w-8 h-8" />,
    title: "Efficient Flow of Materials",
    description:
      "Piping systems are the backbone of industrial operations, enabling the efficient transport of liquids, gases, and other materials between processes.",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Safety and Reliability",
    description:
      "A well-designed piping system ensures safe operations by preventing leaks, over-pressurization, and material failures, thereby protecting workers, the environment, and infrastructure.",
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Cost Optimization",
    description:
      "Proper piping design minimizes material wastage, reduces installation costs, and ensures efficient use of space, saving significant costs during construction and maintenance.",
  },
  {
    icon: <FaClipboardCheck className="w-8 h-8" />,
    title: "Compliance with Standards",
    description:
      "Industries must adhere to international codes and standards, such as ASME or ANSI, for safety and operational efficiency. Piping design ensures compliance with these critical regulations.",
  },
  {
    icon: <FaCogs className="w-8 h-8" />,
    title: "Durability and Longevity",
    description:
      "Effective design accounts for factors like pressure, temperature, and corrosion, ensuring the durability and longevity of the system, even under harsh conditions.",
  },
  {
    icon: <FaLaptopCode className="w-8 h-8" />,
    title: "Integration with Technology",
    description:
      "Modern piping design involves advanced software tools like AutoCAD, PDMS, and SP3D, which enhance precision, reduce errors, and improve overall project efficiency.",
  },
  {
    icon: <FaProjectDiagram className="w-8 h-8" />,
    title: "Support for Complex Projects",
    description:
      "Large-scale industrial projects require intricate piping systems to handle multiple processes. Good design ensures these systems work seamlessly and meet project requirements.",
  },
];

const WhyLearnPiping = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-green-500 font-medium">Career Growth</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Learn Piping Design?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the advantages of mastering piping design and its impact on
            industrial operations
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 md:gap-6 p-6 bg-white rounded-2xl group
                         hover:-translate-y-2 transition-all duration-300
                         border border-gray-100 hover:shadow-xl hover:shadow-green-100"
            >
              <div className="relative flex-shrink-0">
                <div
                  className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center
                              group-hover:bg-green-500 transition-all duration-300 relative"
                >
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-500/30 animate-spin-slow" />
                  <div className="text-green-500 group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-500 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white
                     rounded-full hover:bg-transparent hover:text-green-500 border-2 border-green-500
                     transition-all duration-300 group font-semibold text-lg
                     hover:-translate-y-1 hover:shadow-xl hover:shadow-green-100"
          >
            Start Your Journey
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyLearnPiping;
