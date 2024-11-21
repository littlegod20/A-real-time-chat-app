import { useState } from "react";
// import chat from "../../assets/chat.png";
import DesktopMenu from "../widgets/DesktopMenu";
import MobileView from "../widgets/MobileMenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleHamburgerMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <nav className="w-full flex p-4 sticky top-0 backdrop-blur-lg z-50">
      {/* Logo section */}
      <div className="w-full flex sticky top-0">
        <section className="relative w-1/6">
          <Link to="/">
            <img
              src={'/chat.png'}
              alt="logo image"
              className="w-12 sm:w-16 hover:cursor-pointer"
            />
          </Link>
        </section>

        {/* Desktop View for menu */}
        <DesktopMenu />

        {/* Mobile View for menu */}
        <MobileView
          handleHamburgerMenu={handleHamburgerMenu}
          isMenuClicked={isMenuClicked}
          setIsMenuClicked={setIsMenuClicked}
        />
      </div>
    </nav>
  );
};

export default NavBar;
