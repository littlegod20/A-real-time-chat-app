const DesktopMenu = () => {
  return (
    <>
      <section className="hidden sm:w-4/5 sm:flex items-center justify-center">
        <ul className="flex bg-sky-800 w-[500px] rounded-full text-white shadow-md shadow-sky-900">
          <div className=" w-1/2 flex justify-center p-4 hover:bg-sky-900 rounded-l-full transition-all duration-300 ease-in hover:cursor-pointer">
            <li>Home</li>
          </div>
          <div className=" w-1/2 flex justify-center p-4 hover:bg-sky-900 rounded-r-full transition-all duration-300 ease-in hover:cursor-pointer">
            <li>About</li>
          </div>
        </ul>
      </section>
    </>
  );
};

export default DesktopMenu;
