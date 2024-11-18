import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/home/Landing";
import MainLayout from "./pages/layouts/MainLayout";
import { lazyLoader } from "./helpers.ts";
import { Suspense } from "react";

const ChatPerson = lazyLoader("./pages/user/ChatPerson.tsx");
const ChatPage = lazyLoader("./pages/user/ChatPage.tsx");
const Settings = lazyLoader("./pages/user/Settings.tsx");
const Profile = lazyLoader("./pages/user/Profile.tsx");
const Status = lazyLoader("./pages/user/Status.tsx");
const About = lazyLoader("./pages/home/About.tsx");
const Calls = lazyLoader("./pages/user/Calls.tsx");
const Login = lazyLoader("./pages/auth/Login.tsx");
const SignUp = lazyLoader("./pages/auth/SignUp.tsx");
const DashboardLayout = lazyLoader("./pages/layouts/DashboardLayout.tsx");

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          {/* Authentication routes */}

          <Route
            path="/signup"
            element={
              <Suspense>
                <SignUp />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense>
                <Login />
              </Suspense>
            }
          />

          {/* Landing page routes */}
          <Route element={<MainLayout />}>
            <Route index path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
          </Route>

          <Route
            element={
              <Suspense>
                <DashboardLayout />
              </Suspense>
            }
          >
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
