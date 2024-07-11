import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Home from "./pages/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import OthersProjects from "./pages/OthersProjects";
import { LanguageProvider } from "./Context/languageContext.jsx";
import ErrorPage from "./pages/ErrorPage/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <Router>
        <div className="font-sans">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<OthersProjects />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  </React.StrictMode>
);
