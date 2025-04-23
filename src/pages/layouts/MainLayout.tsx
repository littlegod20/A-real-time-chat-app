import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="flex-grow mx-auto py-8 w-full">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <div className="flex-1">

      <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
