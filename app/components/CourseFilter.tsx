"use client";

interface CourseFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const CourseFilter = ({ activeFilter, onFilterChange }: CourseFilterProps) => {
  const filters = [
    { id: "all", label: "All Courses" },
    { id: "mechanical", label: "Mechanical" },
    { id: "civil", label: "Civil" },
    { id: "electrical", label: "Electrical" },
    { id: "it", label: "IT" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300
            ${
              activeFilter === filter.id
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default CourseFilter;
