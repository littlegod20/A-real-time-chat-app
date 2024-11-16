import "./App.css";
import Login from "./pages/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Landing from "./pages/home/Landing";
import MainLayout from "./pages/layouts/MainLayout";
import About from "./pages/home/About";
import DashboardLayout from "./pages/layouts/DashboardLayout";
import ChatPage from "./pages/user/ChatPage";
import Status from "./pages/user/Status";
import Calls from "./pages/user/Calls";
import Profile from "./pages/user/Profile";
import Settings from "./pages/user/Settings";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          {/* Authentication routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Landing page routes */}
          <Route element={<MainLayout />}>
            <Route index path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
          </Route>

          <Route element={<DashboardLayout />}>
            <Route path="/chats" element={<ChatPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/status" element={<Status />} />
            <Route path="/calls" element={<Calls />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
