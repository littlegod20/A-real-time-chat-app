import "./App.css";
import Login from "./pages/auth/Login";
// import SignUp from './pages/auth/SignUp'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Landing from "./pages/home/Landing";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/home/About";

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
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
