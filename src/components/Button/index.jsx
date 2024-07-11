import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Button = ({ Name, Url }) => {
  return (
    <div className="text-center my-7">
      <Link
        className="group relative inline-block focus:outline-none focus:ring"
        to={Url}
      >
        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-blue-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

        <span className=" relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
          {Name}
        </span>
      </Link>
    </div>
  );
};

Button.propTypes = {
  Name: PropTypes.string.isRequired,
  Url: PropTypes.string.isRequired,
};
