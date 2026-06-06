import { About } from "../components/common/About";
import { Contact } from "../components/common/Contact";
import { Experience } from "../components/common/Experience";
import { HeroBanner } from "../components/common/Navbar/HeroBanner";
import { Projects } from "../components/common/Projects";
import { Services } from "../components/common/Services";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Services />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
