import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileProps {
  handleHamburgerMenu: () => void;
  isMenuClicked: boolean;
}

const MobileView: React.FC<MobileProps> = ({
  handleHamburgerMenu,
  isMenuClicked,
}) => {
  return (
    <>
      <section className="flex flex-col sm:hidden w-4/5 items-end justify-center relative">
        <Menu
          className="hover:cursor-pointer transition-all transform"
          onClick={handleHamburgerMenu}
        />
        {isMenuClicked ? (
          <div className="absolute top-10  w-full flex justify-center shadow-md">
            <ul className="w-full bg-sky-700 rounded-s-xl rounded-br-xl text-white flex flex-col justify-center items-center space-y-2">
              <Link to="/" className="p-3 border-b-[1px] w-full text-center">
                <li>Home</li>
              </Link>
              <Link
                to="/about"
                className="p-3 w-full text-center hover:bg-sky-900"
              >
                <li>About</li>
              </Link>
            </ul>
          </div>
        ) : null}
      </section>
    </>
  );
};

export default MobileView;
