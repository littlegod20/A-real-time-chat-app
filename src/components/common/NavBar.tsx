import { useState } from "react";
import chat from "../../assets/chat.png";
import DesktopMenu from "../widgets/DesktopMenu";
import MobileView from "../widgets/MobileMenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleHamburgerMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <nav className="w-full sticky top-0 flex p-4">
      {/* Logo section */}
      <section className="relative w-1/6 ">
        <Link to="/">
          <img
            src={chat}
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
      />
    </nav>
  );
};

export default NavBar;