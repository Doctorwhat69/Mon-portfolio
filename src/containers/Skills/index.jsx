import Title from "../../components/Title";
import SkillsCards from "../../components/SkillsCards";
import { LanguageContext } from "../../Context/languageContext";
import { useContext } from "react";

function Skills() {
  const { languageData } = useContext(LanguageContext);

  return (
    <section id="Skills" className="p-4 bg-zinc-50 text-black">
      <Title titre={languageData?.Skills?.titre || "Loading..."} />
      <SkillsCards />
    </section>
  );
}

export default Skills;
