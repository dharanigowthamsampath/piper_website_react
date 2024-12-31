import Image from "next/image";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import ScheduleButton from "./ScheduleButton";

const features = [
  {
    icon: <FaGraduationCap className="w-6 h-6" />,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience",
  },
  {
    icon: <FaLaptopCode className="w-6 h-6" />,
    title: "Hands-on Training",
    description: "Practice with real-world projects and industry tools",
  },
];

const InstituteSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Mobile Header - Only shows on mobile */}
        <div className="md:hidden text-center space-y-4 mb-8">
          <span className="text-green-500 font-medium">
            About Our Institute
          </span>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Leading CAD Training Institute in Chennai
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl order-1 md:order-none">
            <Image
              src="/assets/img/engg1.webp"
              alt="PiperCADD Institute"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6 md:space-y-8 order-2 md:order-none">
            {/* Desktop Header - Hidden on mobile */}
            <div className="hidden md:block space-y-4">
              <span className="text-green-500 font-medium">
                About Our Institute
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Leading CAD Training Institute in Chennai
              </h2>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Piper CADD is a premier CAD training institute in Chennai,
              offering comprehensive courses in various CAD software including
              SP3D, PDMS, AVEVA E3D, AutoCAD Plant 3D, and more. Our expert
              instructors provide hands-on training with real-world projects,
              ensuring you gain practical experience alongside theoretical
              knowledge.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 md:p-6 bg-gray-50 rounded-xl shadow-sm 
                           hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 
                                flex items-center justify-center text-green-500"
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <ScheduleButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteSection;
