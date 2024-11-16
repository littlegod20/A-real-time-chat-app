import Dashboard from "@/components/common/Dashboard"
import { Outlet } from "react-router-dom"


const DashboardLayout = () => {
  return (
    <main className="flex bg-sky-900 text-white font-semibold">
      <Dashboard/>
      <section className="container p-10 ">
        <Outlet/>
      </section>
    </main>
  )
}

export default DashboardLayout