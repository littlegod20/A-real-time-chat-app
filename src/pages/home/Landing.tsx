import { Button } from "@/components/ui/button";
import doodle from "../../assets/doodle.png";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const handleButtons = (path: string) => {
    navigate(path);
  };
  return (
    <main className="w-full">
      {/* Image for landing page with buttons */}
      <section className="w-full">
        <div className="w-full sm:h-96 relative">
          <img
            src={doodle}
            alt="landing page image"
            className="object-cover w-full aspect-16/9 h-full brightness-50 blur-sm"
          />

          <div className="absolute top-[30%] flex flex-col w-full items-center gap-4 p-3">
            <header className="font-bold sm:text-3xl text-center sm:font-medium italic text-white lg:w-[500px]">
              Share amazing memories with Family and loved ones with ChatApp
            </header>
            <div className="flex gap-6">
              <Button
                className="px-12 py-7 bg-sky-900 hover:bg-sky-950 transition-all duration-300 ease-in font-semibold"
                onClick={() => handleButtons("/signup")}
              >
                Get Started
              </Button>
              <Button
                className="px-12 py-7 transition-all duration-300 ease-in font-semibold"
                onClick={() => handleButtons("/login")}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
