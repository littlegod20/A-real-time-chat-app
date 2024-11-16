import Dashboard from "@/components/common/Dashboard"
import { Outlet } from "react-router-dom"


const DashboardLayout = () => {
  return (
    <main>
      <Dashboard/>
      <section>
        <Outlet/>
      </section>
    </main>
  )
}

export default DashboardLayout