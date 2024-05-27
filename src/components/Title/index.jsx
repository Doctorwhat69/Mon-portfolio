import PropTypes from "prop-types";

function Title({ titre = "lorem ipsum" }) {
  return (
    <span className="flex items-center pb-20">
      <span className="h-px flex-1 bg-black"></span>
      <h3 className="shrink-0 text-3xl	font-bold px-6">{titre}</h3>
      <span className="h-px flex-1 bg-black"></span>
    </span>
  );
}

Title.propTypes = {
  titre: PropTypes.string,
};

export default Title;
