import { HashRouter, Route, Routes } from "react-router-dom";
import useToken from "./Components/useToken";
import Footer from "./Components/Footer";
import MobileMenu from "./Components/MobileMenu";
import SideNav from "./Components/SideNav";
import Account from "./Screens/Account";
import Dashboard from "./Screens/Dashboard";
import ReportDaily from "./Screens/ReportDaily";
import Privacy from "./Screens/Privacy";
import Login from "./Components/Auth/Login";
import http from "./http-common";

function App() {
  const { token, setToken } = useToken();
  localStorage.removeItem("token");
  if (!token) {
    return <Login setToken={setToken} />;
  }
  console.log(token);
  if (localStorage.getItem("userInfo")) {
    const user = (localStorage.getItem("userInfo"));
    console.log(user);
  }
  return (
    <div className="main-container">
      <HashRouter>
        <SideNav />
        <MobileMenu />
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/my-account" element={<Account />} />
            <Route path="/report-daily" element={<ReportDaily />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
