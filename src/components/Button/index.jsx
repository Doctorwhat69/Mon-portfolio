import PropTypes from "prop-types";

export const Button = ({ Name }) => {
  return (
    <div className="text-center my-7">
      <a
        className="group relative inline-block focus:outline-none focus:ring"
        href="/Mon-portfolio/projects"
      >
        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-blue-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

        <span className=" relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
          {Name}
        </span>
      </a>
    </div>
  );
};

Button.propTypes = {
  Name: PropTypes.string.isRequired,
};
