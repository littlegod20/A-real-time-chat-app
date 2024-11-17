import DashboardDesktop from "@/components/common/DashboardDesktop";
import DashboardMobile from "@/components/common/DashboardMobile";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <main className=" sm:flex bg-sky-900 text-white font-semibold">
      <section>
        <DashboardDesktop />
        <DashboardMobile/>
      </section>
      <section className="w-full relative">
        <Outlet />
      </section>
    </main>
  );
};

export default DashboardLayout;
