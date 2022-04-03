import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link
      to={props.url}
      rel="noreferrer"
      className="relative group flex items-center justify-end max-w-md mx-auto overflow-hidden shadow-md hover:shadow-lg rounded-xl cursor-pointer transition duration-500"
    >
      <img
        className="rounded-xl"
        src={props.logo}
        alt="New Horizons"
        quality={90}
        layout="intrinsic"
        placeholder="blur"
      />
      <div className="absolute bottom-0 h-0 w-full group-hover:h-full transition-all ease-out duration-500 flex flex-col items-center justify-center bg-gradient-to-r backdrop-blur-lg bg-slate-200/70 dark:bg-neutral-900/80 rounded-xl md:group-hover:p-4">
        <h2 className="text-base sm:text-2xl md:text-3xl font-bold text-white group-hover:text-opacity-100 text-opacity-0 text-center mb-4">
          {props.title}
        </h2>
      </div>
    </Link>
  );
};

export default Card;
