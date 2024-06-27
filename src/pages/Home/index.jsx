import Contact from "../../containers/Contact";
import Skills from "../../containers/Skills";
import Projects from "../../containers/Projects";
import Resume from "../../containers/Resume";

function Home() {
  return (
    <div className="md:pl-16 md:pr-16 bg-zinc-50">
      <Resume />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default Home;
