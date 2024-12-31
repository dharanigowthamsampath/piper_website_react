export interface KeyFeature {
  icon: string;
  text: string;
}

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface WhyChooseUs {
  title: string;
  description: string;
}

export interface CareerOpportunity {
  role: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactInfo {
  phones: string[];
  location: string;
}

export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  rating: number;
  totalRatings: number;
  totalStudents: number;
  description: string;
  keyFeatures: KeyFeature[];
  learningOutcomes: string[];
  courseModules: CourseModule[];
  whyChooseUs: WhyChooseUs[];
  careerOpportunities: CareerOpportunity[];
  faq: FAQ[];
  contactInfo: ContactInfo;
}

const courses: Course[] = [
  {
    id: "3ds-max",
    title: "3Ds MAX Course in Chennai",
    shortDescription:
      "Create stunning architectural visualizations and animations.",
    rating: 4.8,
    totalRatings: 2345,
    totalStudents: 15678,
    description:
      "Piper CADD offers a comprehensive 3ds Max Training Program, equipping learners with the skills to excel in 3D modeling, rendering, and animation. Taught by experienced industry professionals, this course emphasizes hands-on learning to master the creation of realistic environments, characters, and architectural visualizations. Participants will explore essential tools and techniques, including lighting, texturing, and advanced rendering workflows. Upon successful completion, you'll be prepared to design compelling 3D assets and tackle challenges in fields like gaming, film, and architectural visualization.",
    keyFeatures: [
      {
        icon: "fas fa-project-diagram",
        text: "Live Project Training",
      },
      {
        icon: "fas fa-briefcase",
        text: "100% Placement Support",
      },
      {
        icon: "fas fa-certificate",
        text: "Global Certification",
      },
      {
        icon: "fas fa-clock",
        text: "Flexible Timing",
      },
    ],
    learningOutcomes: [
      "Master 3ds Max fundamentals and advanced features for 3D modeling and animation",
      "Create realistic 3D environments, objects, and architectural visualizations",
      "Work with advanced rendering techniques to produce photo-realistic images",
      "Develop and animate characters for games, films, and VR applications",
      "Learn to use lighting, textures, and materials for immersive designs",
      "Utilize particle systems and effects for dynamic simulations",
      "Design complex architectural scenes and walkthroughs",
      "Integrate 3ds Max with other tools like Photoshop and V-Ray",
      "Optimize 3D models for performance and efficient rendering workflows",
      "Work on real-world projects for hands-on industry experience",
    ],
    courseModules: [
      {
        title: "Introduction to 3ds Max",
        topics: [
          "Getting familiar with the 3ds Max interface",
          "Understanding the basics of 3D modeling and rendering",
          "Exploring the key features and capabilities of 3ds Max",
        ],
      },
      {
        title: "3D Modeling Essentials",
        topics: [
          "Creating and modifying basic 3D shapes",
          "Understanding modifiers for complex designs",
          "Exploring polygon and spline modeling techniques",
        ],
      },
      {
        title: "Texturing and Materials",
        topics: [
          "Applying textures and creating realistic materials",
          "Understanding UV mapping for accurate texturing",
          "Utilizing material libraries for efficient workflows",
        ],
      },
      {
        title: "Lighting and Rendering",
        topics: [
          "Mastering lighting techniques for realism",
          "Exploring built-in and third-party rendering engines",
          "Adjusting rendering settings for optimal output",
        ],
      },
      {
        title: "Animation Basics",
        topics: [
          "Creating basic animations and keyframe setups",
          "Using the timeline and curve editor for smooth transitions",
          "Animating objects, cameras, and lights",
        ],
      },
      {
        title: "Advanced 3D Techniques",
        topics: [
          "Working with particle systems and dynamics",
          "Creating advanced effects with modifiers and tools",
          "Exploring environment and atmospheric effects",
        ],
      },
      {
        title: "Collaboration and Exporting",
        topics: [
          "Best practices for file management and collaboration",
          "Exporting 3D assets for various applications",
          "Integrating 3ds Max with other design tools",
        ],
      },
      {
        title: "Real-World Projects",
        topics: [
          "Completing a comprehensive 3D modeling project",
          "Applying techniques learned throughout the course",
          "Showcasing projects for portfolios and professional use",
        ],
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Trainers",
        description:
          "Learn from industry-certified professionals with extensive 3D design experience",
      },
      {
        title: "Hands-On Projects",
        description:
          "Work on real-world projects to master practical 3D modeling, animation, and rendering skills",
      },
      {
        title: "Comprehensive Curriculum",
        description:
          "Covers everything from basics to advanced techniques in 3D visualization",
      },
      {
        title: "Flexible Options",
        description:
          "Choose between online and in-person classes to suit your schedule",
      },
      {
        title: "Career Boost",
        description:
          "Stand out in the creative industry with globally recognized certification",
      },
      {
        title: "Post-Course Support",
        description:
          "Get assistance in creating a professional portfolio and preparing for job interviews",
      },
      {
        title: "Modern Facilities",
        description:
          "Access the latest 3ds Max tools and resources in a state-of-the-art learning environment",
      },
      {
        title: "Industry Focus",
        description:
          "Training designed to meet the demands of architecture, animation, and game development industries",
      },
    ],
    careerOpportunities: [
      {
        role: "3D Modeler",
        description:
          "Create high-quality 3D models for games, movies, and architectural visualizations",
      },
      {
        role: "Animation Specialist",
        description:
          "Develop dynamic animations for film, television, and digital platforms",
      },
      {
        role: "Architectural Visualizer",
        description:
          "Design realistic 3D renderings for interior and exterior spaces",
      },
      {
        role: "Game Designer",
        description:
          "Contribute to character design, environments, and assets in the gaming industry",
      },
      {
        role: "Product Designer",
        description:
          "Create detailed 3D prototypes and product models for manufacturing and marketing",
      },
      {
        role: "VFX Artist",
        description:
          "Craft stunning visual effects for movies, advertisements, and virtual experiences",
      },
    ],
    faq: [
      {
        question: "Who can enroll in this course?",
        answer:
          "This course is suitable for students, aspiring 3D artists, architects, and professionals looking to enhance their skills in 3D modeling, rendering, and animation",
      },
      {
        question: "Do I need prior experience with 3ds Max?",
        answer:
          "No prior experience is necessary. Our training starts with the basics and progresses to advanced techniques, ensuring learners of all levels can benefit",
      },
      {
        question: "What are the career prospects after completing this course?",
        answer:
          "Graduates can explore roles such as 3D Modeler, Visual Effects Artist, Architectural Visualizer, Game Designer, or Animator across diverse industries",
      },
      {
        question: "How can I join a batch?",
        answer:
          "Click on the 'Book a Free Demo' button or contact us directly to enroll. Our team will assist you with scheduling and batch options",
      },
      {
        question: "Will I receive placement assistance?",
        answer:
          "Absolutely! We provide placement support, portfolio building, and interview preparation to help you land roles in leading studios and firms",
      },
    ],
    contactInfo: {
      phones: ["+91 9514600042", "+91 9943622231"],
      location: "Chennai",
    },
  },
];

export function getCourse(id: string): Course | undefined {
  return courses.find((course) => course.id === id);
}

export function getAllCourses(): Course[] {
  return courses;
}
