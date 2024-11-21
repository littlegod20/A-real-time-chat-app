import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="mt-6 flex flex-col">
      <NavBar />
      <main className="flex-grow mx-auto py-8 w-full">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
