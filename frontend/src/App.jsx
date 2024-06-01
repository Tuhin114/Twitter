import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignUpPage from "./pages/auth/Signup/SignUpPage";
import LoginPage from "./pages/auth/Login/LoginPage";
import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";
import NotificationPage from "./pages/notification/NotificationPage";

function App() {
  return (
    <div className="flex max-w-6xl mx-auto">
      {/* Common component, bc it's not wrapped with Routes */}
      {<Sidebar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
      </Routes>
      <RightPanel />
    </div>
  );
}

export default App;
