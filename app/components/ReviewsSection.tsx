"use client";
import { useState } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Image from "next/image";

const reviews = [
  {
    text: "I recently completed the SP3D course at Piper CADD Institute, and it was a great experience. The training was clear and hands-on, with expert instructors who made complex topics easy to understand. Their placement support was excellent, helping me secure a job in a top company.",
    name: "Mahesh Kumar",
    role: "SP3D Graduate",
    rating: 5,
    image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg",
  },
  {
    text: "Their hands-on training in AVEVA E3D and AutoCAD Plant 3D, led by expert instructors, made learning easy and effective. The placement support was outstanding - I landed a job quickly after completing the course.",
    name: "Arjun C",
    role: "AVEVA E3D Graduate",
    rating: 5,
    image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg",
  },
  {
    text: "The comprehensive curriculum and expert instructors made my learning experience invaluable. The practical approach to teaching helped me understand complex concepts easily. Highly recommend for anyone seeking to advance their skills!",
    name: "DOMINIC JERIN",
    role: "Revit Architecture Graduate",
    rating: 4.5,
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
  },
  {
    text: "Thank you, PiperCADD Institute, for offering exceptional training and providing excellent placement opportunities. The comprehensive curriculum and expert instructors made my learning experience invaluable.",
    name: "Albin Bright",
    role: "SP3D Graduate",
    rating: 4.5,
    image: "https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg",
  },
  {
    text: "PiperCADD CAD Training Institute exceeded my expectations! They provide the best training on AVEVA E3D, with highly skilled instructors who offer in-depth knowledge and hands-on practice. The course is well-structured and practical.",
    name: "JIVIN R",
    role: "AVEVA E3D Graduate",
    rating: 4.5,
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
  },
];

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="w-4 h-4" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="w-4 h-4" />);
    }
    return stars;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            What Our Students Say
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Hear from our successful graduates about their learning experience
          </p>
        </div>

        {/* Reviews Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Review Card */}
          <div className="relative">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentReview
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute inset-0 translate-x-8"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative z-10">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <FaQuoteLeft className="text-white w-4 h-4" />
                  </div>

                  <div className="grid md:grid-cols-[1fr,300px] gap-8 items-center">
                    {/* Review Content */}
                    <div className="space-y-6">
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {review.text}
                      </p>

                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1 text-yellow-400">
                          {renderStars(review.rating)}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          {review.name}
                        </h4>
                        <p className="text-green-600 font-medium">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    {/* Student Image */}
                    <div className="relative h-[200px] md:h-[300px] rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevReview}
              className="group flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <FaChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Previous</span>
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                    ${
                      index === currentReview
                        ? "bg-green-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="group flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <span className="font-medium">Next</span>
              <FaChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
