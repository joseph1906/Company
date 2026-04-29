import Navbar from "@/assets/components/site/NavBar";
import Hero from "@/assets/components/site/Hero";
import Services from "@/assets/components/site/Services";
import About from "@/assets/components/site/About";
import Process from "@/assets/components/site/Process";
import Contact from "@/assets/components/site/Contact";
import Footer from "@/assets/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
