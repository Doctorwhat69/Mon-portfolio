import { LanguageContext } from "../../Context/languageContext";
import { useContext } from "react";

function SkillsCards() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className=" text-black mt-0">
      <div className="mx-auto mt-0 max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <p className="text-black">
            {languageData?.Skills?.introduction || "Loading..."}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="bg-zinc-100 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-zinc-500/10 hover:shadow-zinc-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-black">
              {languageData?.Skills?.Javascript?.titre || "Loading..."}
            </h2>

            <p className="mt-1 text-sm text-black">
              {languageData?.Skills?.Javascript?.description || "Loading..."}
            </p>
          </a>

          <a
            className="bg-zinc-100 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-zinc-500/10 hover:shadow-zinc-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-black">
              {languageData?.Skills?.React?.titre || "Loading..."}
            </h2>

            <p className="mt-1 text-sm text-black">
              {languageData?.Skills?.React?.description || "Loading..."}
            </p>
          </a>

          <a
            className="bg-zinc-100 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-zinc-500/10 hover:shadow-zinc-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-black">
              {languageData?.Skills?.Communication?.titre || "Loading..."}
            </h2>

            <p className="mt-1 text-sm text-black">
              {languageData?.Skills?.Communication?.description || "Loading..."}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SkillsCards;
