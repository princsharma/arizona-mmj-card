import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Patients from "./components/Patients";
import Badges from "./components/Badges";
import HowItWorks from "./components/HowItWorks";
import Expert from "./components/Expert";
import ConnectDoctor from "./components/ConnectDoctor";
import Conditions from "./components/Conditions";
import Benefits from "./components/Benefits";
import Renew from "./components/Renew";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Patients />
        <Badges />
        <HowItWorks />
        <Expert />
        <ConnectDoctor />
        <Conditions />
        <Benefits />
        <Renew />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
