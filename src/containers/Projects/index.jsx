import { Button } from "../../components/Button";
import Cards from "../../components/Index-Cards";
import Title from "../../components/Title";
import { LanguageContext } from "../../Context/languageContext";
import { useContext } from "react";

function Projects() {
  const { languageData } = useContext(LanguageContext);

  return (
    <section id="mesProjets" className="p-4 bg-zinc-50 text-black">
      <Title titre={languageData?.Projets?.titre || "Loading..."} />
      <Cards />
      <Button Name="Voir tous mes projets" Url="/projects" />
    </section>
  );
}

export default Projects;
