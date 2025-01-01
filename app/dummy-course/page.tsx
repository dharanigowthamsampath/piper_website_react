"use client";

import { FaStar, FaUsers, FaChevronDown } from "react-icons/fa";
import courses from "../data/all-courses.json";
import { useState } from "react";

// Accordion Component
function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <button
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <FaChevronDown
          className={`text-gray-500 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-200 ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-6 bg-white border-t border-gray-100">{children}</div>
      </div>
    </div>
  );
}

export default function DummyCoursePage() {
  const course = courses.courses.find((c) => c.id === "3ds-max");

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Course Header */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              {course.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {course.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {course.shortDescription}
            </p>
            <div className="flex items-center justify-center gap-8 text-gray-600 flex-wrap">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <FaStar className="text-yellow-500" />
                <span className="font-medium">
                  {course.rating} ({course.totalRatings} ratings)
                </span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <FaUsers className="text-green-500" />
                <span className="font-medium">
                  {course.totalStudents.toLocaleString()} students
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Course Overview
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Course Content Accordion */}
              <div className="space-y-4">
                <Accordion title="Course Modules" defaultOpen={true}>
                  <div className="space-y-4">
                    {course.courseModules.map((module, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                            {index + 1}
                          </span>
                          {module.title}
                        </h4>
                        <ul className="space-y-2 ml-8">
                          {module.topics.map((topic, topicIndex) => (
                            <li
                              key={topicIndex}
                              className="text-gray-600 flex items-start gap-2"
                            >
                              <span className="text-green-500">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Accordion>

                <Accordion title="What You'll Learn">
                  <ul className="grid md:grid-cols-2 gap-4">
                    {course.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-green-50 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        </span>
                        <span className="text-gray-600">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </Accordion>

                <Accordion title="Career Opportunities">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {course.careerOpportunities.map((career, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {career.role}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {career.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Accordion>

                <Accordion title="FAQ">
                  <div className="space-y-4">
                    {course.faq.map((item, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {item.question}
                        </h4>
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </Accordion>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Course Details Card */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Course Details
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <i className="fas fa-clock text-green-500"></i>
                      <span className="text-gray-600">
                        Duration: {course.duration}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-calendar text-green-500"></i>
                      <span className="text-gray-600">{course.schedule}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-graduation-cap text-green-500"></i>
                      <span className="text-gray-600">
                        {course.mode.join(" / ")} Classes Available
                      </span>
                    </li>
                    {course.certification && (
                      <li className="flex items-center gap-3">
                        <i className="fas fa-certificate text-green-500"></i>
                        <span className="text-gray-600">
                          Certification Included
                        </span>
                      </li>
                    )}
                    {course.placementAssistance && (
                      <li className="flex items-center gap-3">
                        <i className="fas fa-briefcase text-green-500"></i>
                        <span className="text-gray-600">
                          Placement Assistance
                        </span>
                      </li>
                    )}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a
                      href="/contact"
                      className="block w-full py-3 px-4 bg-green-500 text-white text-center rounded-lg hover:bg-green-600 transition-colors duration-300 font-medium"
                    >
                      Book a Free Demo
                    </a>
                  </div>
                </div>

                {/* Key Features Card */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {course.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <i className={`fas ${feature.icon} text-green-500`}></i>
                        <span className="text-gray-600">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
