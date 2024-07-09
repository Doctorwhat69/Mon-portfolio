import Badge from "../../components/Badge";
import Title from "../../components/Title";
import { LanguageContext } from "../../Context/languageContext";
import { useContext } from "react";

function Contact() {
  const { languageData } = useContext(LanguageContext);

  return (
    <section id="Contact" className="flex flex-col p-4 bg-zinc-50 text-black">
      <Title titre={languageData?.Contact?.titre || "Loading..."} />
      <p className=" m-auto">
        {" "}
        {languageData?.Contact?.paragraphe || "Loading..."}
      </p>
      <a className=" m-auto font-bold" href="mailto:thoblanc.tb@gmail.com">
        thoblanc.tb@gmail.com
      </a>

      <div className=""><Badge /></div>
    </section>
  );
}

export default Contact;
