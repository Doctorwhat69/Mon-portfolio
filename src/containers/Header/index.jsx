import { useState, useContext } from "react";
import { LanguageContext } from "../../Context/languageContext";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { languageData } = useContext(LanguageContext);

  return (
    <header className="z-10 sticky top-0 flex flex-row justify-between items-center p-5 bg-zinc-50 text-black border-b-2 border-zinc-200">
      <Link to="/">
        <h1 className="font-bold">Thomas Blanc</h1>
      </Link>
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
          <ScrollLink
            to="mesProjets"
            smooth={true}
            duration={50}
            className="hover:text-gray-400 transition duration-300 cursor-pointer"
          >
            {languageData?.header?.mesProjets || "Loading..."}
          </ScrollLink>
          <ScrollLink
            to="Skills"
            smooth={true}
            duration={50}
            className="hover:text-gray-400 transition duration-300 cursor-pointer"
          >
            {languageData?.header?.Skills || "Loading..."}
          </ScrollLink>
          <ScrollLink
            to="Contact"
            smooth={true}
            duration={50}
            className="hover:text-gray-400 transition duration-300 cursor-pointer"
          >
            {languageData?.header?.Contact || "Loading..."}
          </ScrollLink>
          <a
            href="https://drive.google.com/file/d/1-AyqvPWscf8DPaLIWlPxsFeQRi3NGKDq/view?usp=sharing"
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
