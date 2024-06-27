import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OthersProjects from "./pages/OthersProjects";
import { LanguageProvider } from "./Context/languageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <Router>
        <div className="font-sans">
          <Header />
          <Routes>
            <Route path="/Mon-portfolio" element={<Home />} />
            <Route
              path="/Mon-portfolio/projects"
              element={<OthersProjects />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>{" "}
    </LanguageProvider>
  </React.StrictMode>
);
