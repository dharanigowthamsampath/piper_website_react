import Link from "next/link";
import { FaIndustry, FaBuilding, FaCogs, FaArrowRight } from "react-icons/fa";

const courseData = [
  {
    icon: <FaIndustry className="w-12 h-12" />,
    title: "AutoCAD Plant 3D",
    description:
      "Complete plant design and modeling solution for process plants",
    href: "/courses/mechanical/autocad-plant-3d",
  },
  {
    icon: <FaBuilding className="w-12 h-12" />,
    title: "Tekla Structures",
    description: "Advanced structural BIM software for construction modeling",
    href: "/courses/civil/tekla-structures",
  },
  {
    icon: <FaCogs className="w-12 h-12" />,
    title: "CADWorx",
    description: "Plant design suite for process plant industries",
    href: "/courses/mechanical/cadworx",
  },
];

const SpecializedCourses = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-green-500 font-medium">Advanced Training</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Specialized Industry Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Master industry-leading software with our specialized courses
            designed for professional excellence
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center group hover:-translate-y-4 transition-all duration-300
                        shadow-sm hover:shadow-xl hover:shadow-green-100 relative"
            >
              {/* Top Border Gradient */}
              <div
                className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-green-500 to-green-600 
                            transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />

              {/* Icon */}
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-500/30 animate-spin-slow" />
                <div
                  className="w-full h-full rounded-full bg-green-50 flex items-center justify-center
                              group-hover:bg-green-500 transition-colors duration-300"
                >
                  <div className="text-green-500 group-hover:text-white transition-colors duration-300">
                    {course.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-green-500 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-8">{course.description}</p>

              {/* Button */}
              <Link
                href={course.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                          bg-green-500 text-white font-medium hover:bg-transparent hover:text-green-500
                          border-2 border-green-500 transition-all duration-300 group/btn"
              >
                Learn More{" "}
                <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full
                      text-green-500 font-semibold border-2 border-green-500 hover:bg-green-500 
                      hover:text-white transition-all duration-300 group/all"
          >
            View All Courses{" "}
            <FaArrowRight className="group-hover/all:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecializedCourses;
