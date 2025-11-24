import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Courses } from "@/components/Courses";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Gallery } from "@/components/Gallery";
import { Certifications } from "@/components/Certifications";
import { TechTools } from "@/components/TechTools";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Courses />
      <About />
      <Team />
      <Gallery />
      <Certifications />
      <TechTools />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
