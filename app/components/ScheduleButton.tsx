"use client";

import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ScheduleButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/contact");
      }}
      className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full
                 hover:bg-green-700 transition-all duration-300 group shadow-lg hover:shadow-xl
                 hover:shadow-green-100 hover:-translate-y-0.5"
    >
      Schedule a Visit
      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
    </button>
  );
};

export default ScheduleButton;
