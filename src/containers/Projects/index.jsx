import Cards from "../../components/Cards";
import Title from "../../components/Title";
import { LanguageContext } from "../../Context/languageContext";
import { useContext } from "react";

function Projects() {
  const { languageData } = useContext(LanguageContext);

  return (
    <section id="mesProjets" className="p-4 bg-zinc-50 text-black">
      <Title titre={languageData?.Projets?.titre || "Loading..."} />
      <Cards />
    </section>
  );
}

export default Projects;
