import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0A1628] text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Columns Container */}
        <div className="flex flex-col md:grid md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo Column - Centered on mobile */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <Link href="/" className="block w-[140px]">
              <Image
                src="/assets/img/logo.png"
                alt="PiperCaDD Logo"
                width={140}
                height={56}
                className="w-full h-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile Accordion Style Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 md:col-span-4">
            {/* Get Connected */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center md:text-left">
                GET CONNECTED
              </h3>
              <ul className="space-y-3 text-center md:text-left">
                {[
                  { name: "Contact", href: "/contact" },
                  { name: "Dashboard", href: "/dashboard" },
                  { name: "Placements", href: "/placements" },
                  { name: "Student Portal", href: "/portal" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center md:text-left">
                RESOURCES
              </h3>
              <ul className="space-y-3 text-center md:text-left">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Blog", href: "/blog" },
                  { name: "Support", href: "/support" },
                  { name: "Documentation", href: "/docs" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center md:text-left">
                COURSES
              </h3>
              <ul className="space-y-3 text-center md:text-left">
                {[
                  "SP3D Training",
                  "PDMS Training",
                  "AVEVA E3D",
                  "AutoCAD Plant 3D",
                  "Revit Architecture",
                ].map((course) => (
                  <li key={course}>
                    <Link
                      href="/courses"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base"
                    >
                      {course}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center md:text-left">
                SOCIAL
              </h3>
              <ul className="space-y-3 text-center md:text-left">
                <li>
                  <a
                    href="https://www.facebook.com/people/Piper-CADD/61571177670059/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/piper_cadd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Stacked on mobile */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
          <div className="text-sm text-gray-400 text-center md:text-left order-2 md:order-1">
            ©{new Date().getFullYear()} PiperCaDD. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-400 order-1 md:order-2">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
