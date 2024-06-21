import { LanguageContext } from "../../Context/languageContext";
import { useContext } from "react";

function Footer() {
  const { languageData } = useContext(LanguageContext);

  return (
    <footer className="bg-zinc-50 text-black py-6 shadow-inner">
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row px-5">
        <p className="text-sm text-center md:text-right">
          {languageData?.Footer?.description || "Loading..."}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
