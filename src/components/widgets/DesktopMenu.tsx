import { useState } from "react";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  const [isActive, setIsActive] = useState<string>("home");

  const handleIsActive = (val: string) => {
    setIsActive(val);
  };
  return (
    <>
      <section className="hidden sm:w-4/5 sm:flex items-center justify-center">
        <ul className="flex bg-sky-800 w-[500px] rounded-full text-white shadow-md shadow-sky-950">
          <Link
            to="/"
            className={`w-1/2 flex justify-center p-4 hover:bg-sky-900 rounded-l-full transition-all duration-300 ease-in hover:cursor-pointer ${
              isActive === "home" ? "bg-sky-900" : ""
            }`}
            onClick={() => handleIsActive("home")}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/about"
            className={`w-1/2 flex justify-center p-4 hover:bg-sky-900 rounded-r-full transition-all duration-300 ease-in hover:cursor-pointer  ${
              isActive === "about" ? "bg-sky-900" : ""
            }`}
            onClick={() => handleIsActive("about")}
          >
            <li>About</li>
          </Link>
        </ul>
      </section>
    </>
  );
};

export default DesktopMenu;
