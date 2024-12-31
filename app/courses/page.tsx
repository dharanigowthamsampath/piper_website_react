"use client";
import { useState } from "react";
import {
  FaDraftingCompass,
  FaBuilding,
  FaCube,
  FaCogs,
  FaIndustry,
  FaLayerGroup,
  FaBolt,
  FaCode,
  FaJava,
  FaPython,
  FaColumns,
  FaImage,
  FaVrCardboard,
  FaSun,
  FaMap,
  FaCalculator,
  FaPlug,
  FaMicrochip,
  FaDesktop,
  FaProjectDiagram,
} from "react-icons/fa";
import CourseCard from "@/app/components/CourseCard";
import CourseFilter from "@/app/components/CourseFilter";

const courses = {
  mechanical: [
    {
      icon: <FaDraftingCompass />,
      title: "AutoCAD Mechanical",
      description:
        "Master mechanical design and drafting with industry-standard AutoCAD Mechanical software.",
      features: [
        "Complete 2D Drawing Tools",
        "3D Modeling Fundamentals",
        "Industry Projects",
        "Certification Included",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/autocad-mechanical-course-in-chennai",
    },
    {
      icon: <FaCube />,
      title: "SolidWorks",
      description:
        "Learn 3D mechanical design, simulation, and product data management with SolidWorks.",
      features: [
        "3D Part Modeling",
        "Assembly Design",
        "Technical Documentation",
        "Product Development",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/solidworks-course-in-chennai",
    },
    {
      icon: <FaCogs />,
      title: "Creo",
      description:
        "Master parametric modeling and design optimization with PTC Creo.",
      features: [
        "Parametric Modeling",
        "Design Optimization",
        "Assembly Design",
        "Technical Documentation",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/creo-course-in-chennai",
    },
    {
      icon: <FaLayerGroup />,
      title: "Catia",
      description: "Learn advanced 3D modeling and surface design with CATIA.",
      features: [
        "Surface Modeling",
        "Assembly Design",
        "Product Engineering",
        "Manufacturing Tools",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/catia-course-in-chennai",
    },
    {
      icon: <FaBuilding />,
      title: "Revit MEP",
      description:
        "Master mechanical, electrical, and plumbing systems design with Revit MEP.",
      features: [
        "MEP Systems",
        "Coordination",
        "Documentation",
        "BIM Integration",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/revit-mep-course-in-chennai",
    },
    {
      icon: <FaCube />,
      title: "Fusion360",
      description:
        "Learn integrated CAD, CAM, and CAE with Autodesk Fusion 360.",
      features: [
        "3D Modeling",
        "CAM Programming",
        "Simulation",
        "Cloud Collaboration",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/fusion360-course-in-chennai",
    },
    {
      icon: <FaIndustry />,
      title: "AutoCAD Plant 3D",
      description: "Master plant design and modeling with AutoCAD Plant 3D.",
      features: [
        "Plant Layout",
        "Piping Design",
        "Equipment Modeling",
        "P&ID Integration",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/autocad-plant-3d-course-in-chennai",
    },
    {
      icon: <FaIndustry />,
      title: "Diploma in Plant Design Engineering",
      description:
        "Comprehensive program covering all aspects of plant design and engineering.",
      features: [
        "Plant Layout",
        "Piping Systems",
        "Equipment Design",
        "Project Management",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl:
        "/courses/diploma-in-plant-design-engineering-course-in-chennai",
    },
    {
      icon: <FaCube />,
      title: "SP3D",
      description:
        "Learn Smart Plant 3D for advanced plant design and modeling.",
      features: [
        "3D Plant Design",
        "Piping Layout",
        "Equipment Modeling",
        "Project Coordination",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/sp3d-course-in-chennai",
    },
    {
      icon: <FaCube />,
      title: "E3D",
      description:
        "Master AVEVA E3D for comprehensive plant design and engineering.",
      features: [
        "Plant Modeling",
        "Design Review",
        "Clash Detection",
        "Documentation",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/e3d-course-in-chennai",
    },
    {
      icon: <FaCube />,
      title: "NX CAD",
      description: "Learn advanced 3D design and modeling with Siemens NX.",
      features: [
        "3D Modeling",
        "Assembly Design",
        "Surface Design",
        "Documentation",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/nx-cad-course-in-chennai",
    },
    {
      icon: <FaCogs />,
      title: "CADWorx",
      description:
        "Master plant design and piping systems with CADWorx software suite.",
      features: [
        "Plant Design",
        "Piping Systems",
        "Equipment Modeling",
        "Isometric Generation",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/cadworx-course-in-chennai",
    },
  ],
  civil: [
    {
      icon: <FaDraftingCompass />,
      title: "AutoCAD 2D/3D",
      description:
        "Master architectural and civil drafting with AutoCAD 2D and 3D.",
      features: ["2D Drafting", "3D Modeling", "Documentation", "Standards"],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/autocad-2d-3d-course-in-chennai",
    },
    {
      icon: <FaBuilding />,
      title: "Revit Architecture",
      description:
        "Learn building design and documentation with Revit Architecture.",
      features: [
        "BIM Modeling",
        "Documentation",
        "Visualization",
        "Collaboration",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/revit-architecture-course-in-chennai",
    },
    {
      icon: <FaColumns />,
      title: "Revit Structure",
      description:
        "Master structural design and analysis with Revit Structure.",
      features: [
        "Structural Modeling",
        "Analysis",
        "Documentation",
        "Detailing",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/revit-structure-course-in-chennai",
    },
    {
      icon: <FaLayerGroup />,
      title: "Tekla Structure",
      description:
        "Learn advanced structural modeling and detailing with Tekla.",
      features: [
        "Steel Detailing",
        "Concrete Modeling",
        "Shop Drawings",
        "Fabrication",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/tekla-structure-course-in-chennai",
    },
    {
      icon: <FaCube />,
      title: "SketchUp",
      description: "Master 3D modeling and visualization with SketchUp.",
      features: ["3D Modeling", "Visualization", "Presentation", "Rendering"],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/sketchup-course-in-chennai",
    },
    {
      icon: <FaCube />,
      title: "3Ds MAX",
      description:
        "Create stunning architectural visualizations and animations.",
      features: ["3D Modeling", "Animation", "Rendering", "Visualization"],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/3ds-max-course-in-chennai",
    },
    {
      icon: <FaImage />,
      title: "Lumion",
      description:
        "Create photorealistic architectural renderings and animations.",
      features: [
        "Real-time Rendering",
        "Animation",
        "Materials",
        "Environments",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/lumion-course-in-chennai",
    },
    {
      icon: <FaVrCardboard />,
      title: "Enscape",
      description:
        "Master real-time rendering and virtual reality visualization.",
      features: ["Real-time Rendering", "VR", "Walkthrough", "Presentation"],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/enscape-course-in-chennai",
    },
    {
      icon: <FaSun />,
      title: "V-Ray",
      description: "Learn professional rendering and visualization with V-Ray.",
      features: [
        "Photo-realistic Rendering",
        "Materials",
        "Lighting",
        "Post-production",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/v-ray-course-in-chennai",
    },
    {
      icon: <FaMap />,
      title: "Civil 3D",
      description:
        "Master civil engineering design and documentation with Civil 3D.",
      features: ["Site Design", "Grading", "Road Design", "Documentation"],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/civil-3d-course-in-chennai",
    },
    {
      icon: <FaCalculator />,
      title: "STAAD Pro",
      description: "Learn structural analysis and design with STAAD Pro.",
      features: [
        "Structural Analysis",
        "Design",
        "Code Checking",
        "Documentation",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/staad-pro-course-in-chennai",
    },
  ],
  electrical: [
    {
      icon: <FaBolt />,
      title: "AutoCAD Electrical",
      description:
        "Master electrical design and documentation with AutoCAD Electrical.",
      features: [
        "Schematic Design",
        "Panel Layout",
        "Circuit Design",
        "Documentation",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/autocad-electrical-course-in-chennai",
    },
    {
      icon: <FaPlug />,
      title: "Revit MEP",
      description: "Learn electrical systems design with Revit MEP.",
      features: [
        "Electrical Systems",
        "Lighting",
        "Power Distribution",
        "Documentation",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/revit-mep-course-in-chennai",
    },
    {
      icon: <FaMicrochip />,
      title: "PLC",
      description:
        "Master Programmable Logic Controller programming and applications.",
      features: [
        "PLC Programming",
        "Automation",
        "Troubleshooting",
        "Integration",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/plc-course-in-chennai",
    },
    {
      icon: <FaDesktop />,
      title: "SCADA",
      description: "Learn Supervisory Control and Data Acquisition systems.",
      features: ["System Design", "Integration", "Monitoring", "Control"],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/scada-course-in-chennai",
    },
    {
      icon: <FaProjectDiagram />,
      title: "EPLAN",
      description: "Master electrical design and documentation with EPLAN.",
      features: [
        "Electrical Design",
        "Documentation",
        "Standards",
        "Automation",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/eplan-course-in-chennai",
    },
    {
      icon: <FaCalculator />,
      title: "MATLAB",
      description: "Learn technical computing and simulation with MATLAB.",
      features: ["Programming", "Simulation", "Analysis", "Visualization"],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/matlab-course-in-chennai",
    },
  ],
  it: [
    {
      icon: <FaJava />,
      title: "Java Core",
      description: "Master core Java programming concepts and applications.",
      features: ["Core Concepts", "OOP", "Data Structures", "Best Practices"],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/java-core-course-in-chennai",
    },
    {
      icon: <FaJava />,
      title: "Java Full Stack",
      description:
        "Become a complete Java developer with full stack capabilities.",
      features: ["Frontend", "Backend", "Database", "Web Services"],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/java-full-stack-course-in-chennai",
    },
    {
      icon: <FaCode />,
      title: "Web Designer",
      description: "Learn to create modern and responsive websites.",
      features: ["HTML/CSS", "JavaScript", "Responsive Design", "UI/UX"],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/web-designer-course-in-chennai",
    },
    {
      icon: <FaPython />,
      title: "Core Python",
      description: "Master Python programming fundamentals and applications.",
      features: [
        "Core Concepts",
        "Libraries",
        "Applications",
        "Best Practices",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      learnMoreUrl: "/courses/core-python-course-in-chennai",
    },
  ],
};

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const getFilteredCourses = () => {
    if (activeFilter === "all") {
      return Object.values(courses).flat();
    }
    return courses[activeFilter as keyof typeof courses] || [];
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Courses
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of CAD courses designed to help you
            master the skills needed for a successful career in design and
            engineering.
          </p>
        </div>
      </section>

      {/* Course Filter and Grid */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <CourseFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredCourses().map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
