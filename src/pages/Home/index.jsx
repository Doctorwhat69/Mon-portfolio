import Contact from "../../containers/Contact";
import Skills from "../../containers/Skills";
import Projects from "../../containers/Projects";
import Resume from "../../containers/Resume";
import { Element } from "react-scroll";

function Home() {
  return (
    <div className="md:pl-16 md:pr-16 bg-zinc-50">
      <Resume />
      <Element name="mesProjets">
        <Projects />
      </Element>
      <Element name="Skills">
        <Skills />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
    </div>
  );
}

export default Home;
