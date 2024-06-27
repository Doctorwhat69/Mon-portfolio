import { useState, useContext } from "react";
import { LanguageContext } from "../../Context/languageContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { languageData } = useContext(LanguageContext);

  return (
    <header className="z-10 sticky top-0 flex flex-row justify-between items-center p-5 bg-zinc-50 text-black border-b-2 border-zinc-200">
      <a href="/Mon-portfolio/">
        <h1 className="font-bold">Thomas Blanc</h1>
      </a>
      <nav className="flex items-center">
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`flex-col md:flex-row md:flex ${
            isOpen ? "flex" : "hidden"
          } gap-4`}
        >
          <a
            href="#mesProjets"
            className="hover:text-gray-400 transition duration-300"
          >
            {languageData?.header?.mesProjets || "Loading..."}
          </a>
          <a
            href="#Skills"
            className="hover:text-gray-400 transition duration-300"
          >
            {languageData?.header?.Skills || "Loading..."}
          </a>
          <a
            href="#Contact"
            className="hover:text-gray-400 transition duration-300 "
          >
            {languageData?.header?.Contact || "Loading..."}
          </a>
          <a
            href="https://drive.google.com/file/d/1LeaOMKdlYKdhTKGdP7nFoCrq0z3E8KNV/view?usp=sharing"
            className="hover:text-gray-400 transition-colors duration-300"
            target="_blank"
            rel="noreferrer noopener"
          >
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
