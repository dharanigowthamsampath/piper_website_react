import Hero from "./components/Hero";
import SpecializedCourses from "./components/SpecializedCourses";
import InstituteSection from "./components/InstituteSection";
import FeaturesSection from "./components/FeaturesSection";
import AchievementsSection from "./components/AchievementsSection";
import WhyLearnPiping from "./components/WhyLearnPiping";
import ReviewsSection from "./components/ReviewsSection";
import ClientLogos from "./components/ClientLogos";

export default function Home() {
  return (
    <main>
      <Hero />
      <SpecializedCourses />
      <InstituteSection />
      <FeaturesSection />
      <AchievementsSection />
      <WhyLearnPiping />
      <ReviewsSection />
      <ClientLogos />
    </main>
  );
}
