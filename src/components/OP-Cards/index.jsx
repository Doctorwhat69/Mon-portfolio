import { useContext, useState } from "react";
import { LanguageContext } from "../../Context/languageContext";
import Card from "../Projet-card";
import Tab from "../Tab";

function OpCards() {
  const { languageData } = useContext(LanguageContext);
  const [selectedType, setSelectedType] = useState("Tous");
  const projects = languageData.Other;

  if (!projects) {
    return <div>loading...</div>;
  }

  const filteredProjects =
    selectedType === "Tous"
      ? Object.values(projects)
      : Object.values(projects).filter(
          (project) => project.type === selectedType
        );

  return (
    <div className="container mx-auto px-4 py-8">
      <Tab onChange={(value) => setSelectedType(value)} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, key) => (
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
        ))}
      </div>
    </div>
  );
}

export default OpCards;
