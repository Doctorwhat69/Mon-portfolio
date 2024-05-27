import "./index.css";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Contact from "./containers/Contact";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";
import Resume from "./containers/Resume";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <div className="md:pl-16 md:pr-16 bg-zinc-50">
        <Resume />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
