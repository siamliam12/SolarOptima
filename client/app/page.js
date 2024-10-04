import HeroSection from "@/components/Home/HeroSection/HeroSection";
import Navbar from "@/components/Home/Navbar/Navbar";
import "./page.css";
import ProblemSection from "@/components/Home/ProblemSection/ProblemSection";
import Features from "@/components/Home/FeatureSection/FeatureSection";
import Footer from "@/components/Home/Footer/Footer";

export default function Home() {
  const stars = Array.from({ length: 100 }, (_, i) => (
    <div
      key={i}
      className="star"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    ></div>
  ));

  return (
    <>
      <div className="landing-page-hero-bg-container">
        {stars}
        <div className="landing-page-hero-bg-circle"></div>
        <div className="landing-page-hero-bg-child">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <ProblemSection />
      <Features />
      <Footer />
    </>
  );
}
