import DashboardDesktop from "@/components/common/DashboardDesktop";
import DashboardMobile from "@/components/common/DashboardMobile";
import { ChatSkeleton } from "@/components/skeletons/ChatSkeleton";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <main className="sm:flex bg-sky-900 text-white font-semibold h-screen">
      <DashboardDesktop />
      <section className="w-full relative h-[90%] sm:h-screen p-3 sm:p-5">
        <Suspense fallback={<ChatSkeleton />}>
          <Outlet />
        </Suspense>
      </section>
      <DashboardMobile />
    </main>
  );
};

export default DashboardLayout;
