"use client";
import Image from "next/image";

const clients = [
  {
    name: "Client 1",
    logo: "/assets/img/clients/client1.png",
  },
  {
    name: "Client 2",
    logo: "/assets/img/clients/client2.png",
  },
  {
    name: "Client 3",
    logo: "/assets/img/clients/client3.png",
  },
  {
    name: "Client 4",
    logo: "/assets/img/clients/client4.png",
  },
  {
    name: "Client 5",
    logo: "/assets/img/clients/client5.png",
  },
  {
    name: "Client 6",
    logo: "/assets/img/clients/client6.png",
  },
  {
    name: "Client 7",
    logo: "/assets/img/clients/client7.png",
  },
  {
    name: "Client 8",
    logo: "/assets/img/clients/client8.png",
  },
  {
    name: "Client 9",
    logo: "/assets/img/clients/client9.png",
  },
  {
    name: "Client 11",
    logo: "/assets/img/clients/client11.webp",
  },
  {
    name: "Client 12",
    logo: "/assets/img/clients/client12.webp",
  },
];

const ClientLogos = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 text-sm font-medium rounded-full">
            Our Valued Partners
          </span>
          <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Our graduates are working with leading companies in the industry
          </p>
        </div>

        {/* Logo Scroll Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Logo Track */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll gap-8 py-8">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[180px] h-[100px] bg-white rounded-xl shadow-sm border border-gray-100 
                           p-6 flex items-center justify-center group hover:shadow-lg transition-all duration-300
                           hover:-translate-y-1"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
