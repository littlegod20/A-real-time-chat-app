import "./App.css";
import Login from "./pages/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Landing from "./pages/home/Landing";
import MainLayout from "./pages/layouts/MainLayout";
import About from "./pages/home/About";
import DashboardLayout from "./pages/layouts/DashboardLayout";
import ChatPage from "./pages/user/ChatPage";
import Profiile from "./pages/user/Profiile";

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
            <Route path="/chats" element={<ChatPage/>}/>
            <Route path="/user-profile" element={<Profiile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
