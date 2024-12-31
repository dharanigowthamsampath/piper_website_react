import { notFound } from "next/navigation";
import { FaClock, FaBook } from "react-icons/fa";

// Function to convert URL slug to title case
function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CoursePage({ params }: PageProps) {
  const resolvedParams = await params;
  if (!resolvedParams?.slug) {
    notFound();
  }

  const courseTitle = slugToTitle(resolvedParams.slug);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Course Header */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {courseTitle}
            </h1>
            <div className="flex items-center justify-center gap-6 text-gray-600">
              <span className="flex items-center gap-2">
                <FaClock className="text-green-500" />
                <span>3 Months</span>
              </span>
              <span className="flex items-center gap-2">
                <FaBook className="text-green-500" />
                <span>Beginner to Advanced</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Course Overview
              </h2>
              <p className="text-gray-600">
                This comprehensive course is designed to provide you with
                in-depth knowledge and practical skills in {courseTitle}.
                Whether you're a beginner or looking to advance your skills,
                this course offers a structured learning path to help you
                achieve your goals.
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What You'll Learn
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-50 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </span>
                  <span className="text-gray-600">
                    Understanding the fundamentals and core concepts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-50 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </span>
                  <span className="text-gray-600">
                    Practical application through hands-on projects
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-50 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </span>
                  <span className="text-gray-600">
                    Industry-standard best practices and workflows
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-50 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </span>
                  <span className="text-gray-600">
                    Real-world project experience and portfolio development
                  </span>
                </li>
              </ul>
            </div>

            {/* Course Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Course Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Expert Instruction
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn from industry professionals with years of experience
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hands-on Projects
                  </h3>
                  <p className="text-sm text-gray-600">
                    Apply your learning through practical projects
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Industry Certification
                  </h3>
                  <p className="text-sm text-gray-600">
                    Receive recognized certification upon completion
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Career Support
                  </h3>
                  <p className="text-sm text-gray-600">
                    Get guidance for your career development
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 font-medium"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
