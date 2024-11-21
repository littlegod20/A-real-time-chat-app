import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/home/Landing";
import MainLayout from "./pages/layouts/MainLayout";
import { lazy, Suspense } from "react";
import DashboardLayout from "./pages/layouts/DashboardLayout.tsx";
import AuthSkeleton from "./components/skeletons/AuthSkeleton.tsx";

const ChatPerson = lazy(() => import("./pages/user/ChatPerson.tsx"));
const ChatPage = lazy(() => import("./pages/user/ChatPage.tsx"));
const Settings = lazy(() => import("./pages/user/Settings.tsx"));
const Profile = lazy(() => import("./pages/user/Profile.tsx"));
const Status = lazy(() => import("./pages/user/Status.tsx"));
const About = lazy(() => import("./pages/home/About.tsx"));
const Calls = lazy(() => import("./pages/user/Calls.tsx"));
const Login = lazy(() => import("./pages/auth/Login.tsx"));
const SignUp = lazy(() => import("./pages/auth/SignUp.tsx"));

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          {/* Authentication routes */}
          <Route
            path="/signup"
            element={
              <Suspense fallback={<AuthSkeleton />}>
                <SignUp />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<AuthSkeleton />}>
                <Login />
              </Suspense>
            }
          />

          {/* Landing page routes */}
          <Route element={<MainLayout />}>
            <Route index path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
          </Route>

          {/* User Page Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/chats" element={<ChatPage />} />
            <Route path="/chats/:id" element={<ChatPerson />} />
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
