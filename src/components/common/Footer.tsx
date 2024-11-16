import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center relative bottom-0">
      <section className="w-4/5 bg-sky-800 flex flex-col gap-10 text-white p-3">
        <header>Logo Name</header>
        <div className="flex gap-4">
          <Link to="#">
            <FaInstagram
              size={45}
              className="hover:cursor-pointer hover:bg-sky-900 transition-all duration-300 ease-in rounded-full p-2"
            />
          </Link>
          <Link to="#">
            <FaXTwitter
              size={45}
              className="hover:cursor-pointer hover:bg-sky-900 transition-all duration-300 ease-in rounded-full p-2"
            />
          </Link>
          <Link to="#">
            <MdOutlineMailOutline
              size={45}
              className="hover:cursor-pointer hover:bg-sky-900 transition-all duration-300 ease-in rounded-full p-2"
            />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
