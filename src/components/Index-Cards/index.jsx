import Card from "../Projet-card";
import { LanguageContext } from "../../Context/languageContext";
import { useContext } from "react";

function Cards() {
  const { languageData } = useContext(LanguageContext);
  const projets = [
    languageData?.Projets?.projet1,
    languageData?.Projets?.projet2,
    languageData?.Projets?.projet3,
  ];

  return (
    <div className="lg:min-w-full box-border justify-center flex-col flex md:flex-row gap-12 p-4 whitespace-normal">
      {projets.map((projet, index) => (
        <Card
          key={index}
          className="flex-1 w-1/3"
          Src={projet?.image || "Loading..."}
          Alt={projet?.alt || "Loading..."}
          Description={projet?.description || "Loading..."}
          Website={projet?.url || "Loading..."}
          Name={projet?.titre || "Loading..."}
          Github={projet?.github || "Loading..."}
          Technologies={projet?.technologies || []}
        />
      ))}
    </div>
  );
}

export default Cards;
