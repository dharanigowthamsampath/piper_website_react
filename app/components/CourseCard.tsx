"use client";
import { FaCheckCircle, FaClock, FaBook } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  duration: string;
  level: string;
  learnMoreUrl: string;
}

const CourseCard = ({
  icon,
  title,
  description,
  features,
  duration,
  level,
  learnMoreUrl,
}: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-white p-8 rounded-[20px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] 
      transition-all duration-400 border border-gray-100 overflow-hidden
      hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(76,175,80,0.15)]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top gradient bar */}
      <div
        className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-green-500 to-green-600 
        transform origin-left transition-transform duration-400 ${
          isHovered ? "scale-x-100" : "scale-x-0"
        }`}
      />

      {/* Background gradient overlay */}
      <div
        className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-green-50/20 to-transparent 
        transition-opacity duration-400 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Icon container */}
      <div className="relative mb-6">
        <div
          className={`w-[80px] h-[80px] mx-auto bg-green-50 rounded-full flex items-center justify-center 
          transition-all duration-400 ${
            isHovered ? "bg-green-500 rotate-y-360" : ""
          }`}
        >
          {/* Dashed borders */}
          <div className="absolute w-[90px] h-[90px] border-2 border-dashed border-green-500/30 rounded-full animate-spin-slow" />
          <div className="absolute w-[100px] h-[100px] border-2 border-dashed border-green-500/15 rounded-full animate-spin-slower reverse" />

          {/* Icon */}
          <span
            className={`text-2xl transition-all duration-400 relative z-10 
            ${isHovered ? "text-white scale-110" : "text-green-500"}`}
          >
            {icon}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4 relative pb-3">
          {title}
          <span
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[40px] h-[2px] 
            bg-green-500 rounded-[2px] transition-all duration-300 
            ${isHovered ? "w-[60px]" : ""}`}
          />
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Course Info */}
        <div className="flex items-center justify-center gap-4 mb-6 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <FaClock className="text-green-500" />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <FaBook className="text-green-500" />
            {level}
          </span>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-2 mt-6 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full 
              transition-all duration-300 hover:translate-x-2 hover:bg-green-500 group"
            >
              <FaCheckCircle className="text-sm text-green-500 group-hover:text-white" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-white">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <Link
            href={learnMoreUrl}
            className="flex-1 px-4 py-2 bg-white border border-green-500 text-green-500 
            rounded-lg hover:bg-green-50 transition-colors duration-300 text-sm font-medium"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg 
            hover:bg-green-600 transition-colors duration-300 text-sm font-medium"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
