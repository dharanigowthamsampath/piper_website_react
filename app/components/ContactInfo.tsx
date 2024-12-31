import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
          <FaPhone className="w-4 h-4 text-green-600" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900">Phone</h3>
          <a
            href="tel:+919884680906"
            className="text-sm text-gray-600 hover:text-green-600 transition-colors"
          >
            +91 98846 80906
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
          <FaEnvelope className="w-4 h-4 text-green-600" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900">Email</h3>
          <a
            href="mailto:info@pipercadd.com"
            className="text-sm text-gray-600 hover:text-green-600 transition-colors"
          >
            info@pipercadd.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
          <FaMapMarkerAlt className="w-4 h-4 text-green-600" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900">Address</h3>
          <p className="text-sm text-gray-600">
            No.4/5, 1st Floor, Govindan Street,
            <br />
            Ayyavoo Colony, Aminjikarai,
            <br />
            Chennai - 600029.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
