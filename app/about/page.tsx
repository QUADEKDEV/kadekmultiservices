import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutCTA from "../components/AboutCTA";
import Aboutheader from "../components/Aboutheader";
import VideoSection from "../components/VideoSection";
import Testimonial from "../components/Testimonial";
import Team from "../components/Team";
import Phylosophy from "../components/Phylosophy";

export default function page() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <Aboutheader />
      <VideoSection />
      <Testimonial />
      <Phylosophy />
      <Team/>
      <AboutCTA/>
      <Footer />
    </div>
  );
}
