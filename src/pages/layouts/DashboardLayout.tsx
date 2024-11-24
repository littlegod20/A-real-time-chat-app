import DashboardDesktop from "@/components/common/DashboardDesktop";
import DashboardMobile from "@/components/common/DashboardMobile";
import { ChatSkeleton } from "@/components/skeletons/ChatSkeleton";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import { ErrorBoundary } from "react-error-boundary";

const DashboardLayout = () => {
  return (
    <main className="sm:flex bg-sky-900 text-white font-semibold h-screen">
      <DashboardDesktop />
      <section className="w-full relative h-[90%] sm:h-screen bg-emerald-400">
        {/* <ErrorBoundary fallback={<div>Something Went Wrong</div>}> */}
        <Suspense fallback={<ChatSkeleton />}>
          <Outlet />
        </Suspense>
        {/* </ErrorBoundary> */}
      </section>
      <DashboardMobile />
    </main>
  );
};

export default DashboardLayout;
