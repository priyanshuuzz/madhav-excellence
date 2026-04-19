import Hero from "../components/Hero";
import Programs from "../components/Programs";
import DemoForm from "../components/DemoForm";
import Footer from "../components/Footer";
import { Boards, About, Holistic, WhyUs, Testimonials, Counseling, FAQ, WAFab } from "../components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Boards />
      <About />
      <Holistic />
      <Programs />
      <WhyUs />
      <Testimonials />
      <Counseling />
      <DemoForm />
      <FAQ />
      <Footer />
      <WAFab />
    </>
  );
}
