import PropTypes from "prop-types";

function Card({ Src, Alt, Description, Name, Github, Website, Technologies }) {
  return (
    <article className="max-h-[296px] sm:max-h-none p-2 2xl:p-0 md:h-56 lg:h-auto group relative block bg-black rounded-md w-full aspect-square">
      <img
        alt={Alt}
        src={Src}
        className="rounded-md absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />
      <div className="relative p-0 lg:p-6">
        <div className="flex flex-row justify-between">
          <p className="text-xl font-bold text-white lg:text-2xl">{Name}</p>
          <div className="flex flex-row gap-2 p-0 align-middle">
            <a href={Github} target="_blank" rel="noreferrer noopener">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="24px"
                height="24px"
                stroke="white"
                fill="white"
              >
                <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" />
              </svg>
            </a>

            <a href={Website} target="_blank" rel="noreferrer noopener">
              <i className="fa-solid fa-arrow-up-right-from-square text-white"></i>
            </a>
          </div>
        </div>
        <div className="mt-16 2xl:mt-36 xl:mt-16 md:mt-8">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className=" text-white whitespace-normal md:hidden xl:block line-clamp-5 overflow-y-auto	 lg:overflow-y-hidden ">
              {Description}
            </p>
            <div className="flex flex-wrap gap-1 xl:mt-8">
              {Technologies.map((tech, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center rounded-full bg-stone-600 px-2.5 py-0.5 text-zinc-700"
                >
                  <p className="whitespace-nowrap text-gray-50 text-sm px-1">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  Src: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  Github: PropTypes.string.isRequired,
  Website: PropTypes.string.isRequired,
  Alt: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
