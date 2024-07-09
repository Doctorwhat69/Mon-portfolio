import { useContext } from "react";
import { LanguageContext } from "../../Context/languageContext";
import Card from "../Projet-card";
import Tab from "../Tab";

function OpCards() {
  const { languageData } = useContext(LanguageContext);
  const projects = languageData.Other;

  if (!languageData.Other) {
    return <div>loading...</div>;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <Tab />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(projects).map((key) => {
          const project = projects[key];

          return (
            <Card
              key={key}
              Name={project.titre}
              Description={project.description}
              Src={project.image}
              Alt={project.alt}
              Website={project.url}
              Github={project.github}
              Technologies={project.technologies}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OpCards;
