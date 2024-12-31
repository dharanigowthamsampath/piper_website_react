import {
  FaUserGraduate,
  FaBuilding,
  FaAward,
  FaChalkboardTeacher,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaUserGraduate className="w-10 h-10" />,
    number: "100+",
    title: "Trained Professionals",
    description: "Successfully placed in leading companies",
  },
  {
    icon: <FaBuilding className="w-10 h-10" />,
    number: "50+",
    title: "Industry Partners",
    description: "Collaborating for success",
  },
  {
    icon: <FaAward className="w-10 h-10" />,
    number: "95%",
    title: "Placement Rate",
    description: "Career success guaranteed",
  },
  {
    icon: <FaChalkboardTeacher className="w-10 h-10" />,
    number: "15+",
    title: "Expert Trainers",
    description: "Industry professionals",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-green-500 font-medium">Our Success Story</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Key Achievements
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center group hover:-translate-y-4 transition-all duration-300
                        border border-gray-100 hover:shadow-xl hover:shadow-green-100 relative"
            >
              {/* Top Border Gradient */}
              <div
                className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-green-500 to-green-600 
                            transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />

              {/* Icon */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-500/30 animate-spin-slow" />
                <div
                  className="w-full h-full rounded-full bg-green-50 flex items-center justify-center
                              group-hover:bg-green-500 transition-colors duration-300"
                >
                  <div className="text-green-500 group-hover:text-white transition-colors duration-300">
                    {achievement.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div
                  className="text-4xl font-bold bg-gradient-to-r from-green-500 to-green-600 
                              bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
                >
                  {achievement.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-500 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
