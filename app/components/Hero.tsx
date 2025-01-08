"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const Hero = () => {
  const words = ["Designing", "Analysis", "Engineering", "Coding"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  const tick = useCallback(() => {
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      setText((prev) => prev.substring(0, prev.length - 1));
      setDelta(100);
    } else {
      setText((prev) => currentWord.substring(0, prev.length + 1));
      setDelta(150);
    }

    if (!isDeleting && text === currentWord) {
      setDelta(500);
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      setDelta(500);
    }
  }, [currentWordIndex, isDeleting, text, words]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [delta, tick]);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Start Your{" "}
              <span className="inline-block min-w-[200px] text-green-600">
                {text}
                <span className="animate-pulse">|</span>
              </span>{" "}
              Journey Today
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Learn from expert instructors and master the skills needed for a
              successful career in technical design and engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/courses"
                className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-center"
              >
                Explore Courses
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border border-green-500 text-green-500 rounded-md hover:bg-green-50 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] order-1 md:order-2">
            <Image
              src="/assets/img/hero.webp"
              alt="Technical Education"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
