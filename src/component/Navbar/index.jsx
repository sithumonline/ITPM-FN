import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="relative flex justify-center dark:text-white z-10">
      <div className="fixed top-0 w-full flex justify-between gap-8 px-8 sm:px-16 items-center backdrop-blur-lg h-16 font-semibold text-md bg-slate-200/70 border-b border-slate-900/10 dark:bg-neutral-900/80">
        <div className="flex gap-10">
          <Link
            to="/"
            rel="noreferrer"
            className="hover:text-orange-500"
          >
            Home
          </Link>
        </div>
        <div>
          <button
            id="mod"
            onClick={props.toggle}
            className="font-semibold flex items-center gap-1 hover:text-orange-500"
          >
            <FontAwesomeIcon icon={props.mode === "dark" ? faMoon : faSun} />
            <span className="hidden sm:block">
              {props.mode === "dark" ? "Dark" : "Light"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
