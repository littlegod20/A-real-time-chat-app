import Dashboard from "@/components/common/Dashboard"
import { Outlet } from "react-router-dom"


const DashboardLayout = () => {
  return (
    <main className="flex bg-sky-900 text-white font-semibold">
      <Dashboard/>
      <section className="w-full h-screen">
        <Outlet/>
      </section>
    </main>
  )
}

export default DashboardLayout