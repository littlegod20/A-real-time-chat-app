import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-sky-800 flex flex-col gap-10 text-white h-full">
      <div className="flex gap-4 items-center h-full justify-center">
        <Link to="#">
          <FaInstagram
            size={35}
            className="hover:cursor-pointer hover:bg-sky-900 transition-all duration-300 ease-in rounded-full p-2"
          />
        </Link>
        <Link to="#">
          <FaXTwitter
            size={35}
            className="hover:cursor-pointer hover:bg-sky-900 transition-all duration-300 ease-in rounded-full p-2"
          />
        </Link>
        <Link to="#">
          <MdOutlineMailOutline
            size={35}
            className="hover:cursor-pointer hover:bg-sky-900 transition-all duration-300 ease-in rounded-full p-2"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
