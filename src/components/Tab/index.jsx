import { useState } from "react";
import PropTypes from "prop-types";

function Tab({ onChange }) {
  const [value, setValue] = useState("Tous");

  const changeValue = (newValue) => {
    onChange(newValue);
    setValue(newValue);
  };

  return (
    <div className="mb-10">
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select
          id="Tab"
          name="tab"
          className="w-full rounded-md border-gray-200"
          value={value}
          onChange={(e) => changeValue(e.target.value)}
        >
          <option value="Tous">Tous</option>
          <option value="OpenClassRooms">OpenClassrooms</option>
          <option value="jeux JS">Jeux Javascript</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex gap-6" aria-label="Tabs">
            <button
              onClick={() => changeValue("Tous")}
              className={`shrink-0 border-b-2 ${
                value === "Tous"
                  ? "border-sky-500 text-sky-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              } px-1 pb-4 text-sm font-medium`}
            >
              Tous
            </button>

            <button
              onClick={() => changeValue("OpenClassRooms")}
              className={`shrink-0 border-b-2 ${
                value === "OpenClassRooms"
                  ? "border-sky-500 text-sky-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              } px-1 pb-4 text-sm font-medium`}
            >
              OpenClassRooms
            </button>

            <button
              onClick={() => changeValue("jeux JS")}
              className={`shrink-0 border-b-2 ${
                value === "jeux JS"
                  ? "border-sky-500 text-sky-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              } px-1 pb-4 text-sm font-medium`}
            >
              Jeux Javascript
            </button>

            <button
              onClick={() => changeValue("Autre")}
              className={`shrink-0 border-b-2 ${
                value === "Autre"
                  ? "border-sky-500 text-sky-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              } px-1 pb-4 text-sm font-medium`}
            >
              Autre
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

Tab.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Tab;
