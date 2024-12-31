import ContactForm from "@/app/components/ContactForm";
import ContactInfo from "@/app/components/ContactInfo";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Contact Section - Increased padding */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Side - Contact Information */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Contact Us
                  </h1>
                  <p className="text-base text-gray-600">
                    Email, call, or complete the form to learn how PiperCADD can
                    help you start your career in CAD design.
                  </p>
                </div>

                <ContactInfo />
              </div>

              {/* Right Side - Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Only styling changes */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8">
              <span className="text-sm font-medium text-green-600">
                Our Location
              </span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Connecting Near and Far
              </h2>
            </div>

            {/* Map */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4410623774!2d80.21770797495818!3d13.074743987248224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e4f47cd8f9%3A0x8f5e7acd0da0dab!2sPiper%20CADD!5e0!3m2!1sen!2sin!4v1704390138975!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
