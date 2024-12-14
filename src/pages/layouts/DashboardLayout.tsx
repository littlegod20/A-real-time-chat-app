import DashboardDesktop from "@/components/common/DashboardDesktop";
import DashboardMobile from "@/components/common/DashboardMobile";
import { ChatSkeleton } from "@/components/skeletons/ChatSkeleton";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <main className="sm:flex  bg-sky-900 text-white font-semibold h-screen w-screen">
      <DashboardDesktop />
      <Suspense fallback={<ChatSkeleton />}>
        <section className="h-[90%] sm:h-screen p-2  flex-1 sm:w-3/5">
          <Outlet />
        </section>
      </Suspense>
      <DashboardMobile />
    </main>
  );
};

export default DashboardLayout;
