import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [languageData, setLanguageData] = useState({});

  useEffect(() => {
    fetchLanguageData();
  }, []);

  useEffect(() => {
    fetchLanguageData();
  }, [language]);

  const fetchLanguageData = () => {
    const dataUrl = `locales/${language}.json`;
    fetch(dataUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setLanguageData(data))
      .catch((error) =>
        console.error(`Error fetching language data from ${dataUrl}:`, error)
      );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, languageData }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LanguageContext, LanguageProvider };
