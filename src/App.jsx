import About from "./components/About";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import DreamProperty from "./components/dreamProperty";
import FAQ from "./components/FAQ";
import Features from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <DreamProperty></DreamProperty>
      <About></About>
      <CTA></CTA>
      <FAQ></FAQ>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
