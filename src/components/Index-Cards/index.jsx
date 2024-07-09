import Card from "../Projet-card";
import { LanguageContext } from "../../Context/languageContext";
import { useContext } from "react";

function Cards() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="lg:min-w-full box-border justify-center flex-col flex md:flex-row gap-12 p-4 whitespace-normal">
      <Card
        Src={languageData?.Projets?.projet1?.image || "Loading..."}
        Alt={languageData?.Projets?.projet1?.alt || "Loading..."}
        Description={
          languageData?.Projets?.projet1?.description || "Loading..."
        }
        Website={languageData?.Projets?.projet1?.url || "Loading..."}
        Name={languageData?.Projets?.projet1?.titre || "Loading..."}
        Github={languageData?.Projets?.projet1?.github || "Loading..."}
        Technologies={languageData?.Projets?.projet1?.technologies || []}
      />
      <Card
        Src={languageData?.Projets?.projet2?.image || "Loading..."}
        Alt={languageData?.Projets?.projet2?.alt || "Loading..."}
        Description={
          languageData?.Projets?.projet2?.description || "Loading..."
        }
        Name={languageData?.Projets?.projet2?.titre || "Loading..."}
        Website={languageData?.Projets?.projet2?.url || "Loading..."}
        Github={languageData?.Projets?.projet2?.github || "Loading..."}
        Technologies={languageData?.Projets?.projet2?.technologies || []}
      />
      <Card
        Src={languageData?.Projets?.projet3?.image || "Loading..."}
        Alt={languageData?.Projets?.projet3?.alt || "Loading..."}
        Website={languageData?.Projets?.projet3?.url || "Loading..."}
        Description={
          languageData?.Projets?.projet3?.description || "Loading..."
        }
        Github={languageData?.Projets?.projet3?.github || "Loading..."}
        Name={languageData?.Projets?.projet3?.titre || "Loading..."}
        Technologies={languageData?.Projets?.projet3?.technologies || []}
      />
    </div>
  );
}

export default Cards;
