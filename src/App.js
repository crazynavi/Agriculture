import { HashRouter, Route, Routes } from "react-router-dom";
import useToken from "./Components/useToken";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import Footer from "./Components/Footer";
import MobileMenu from "./Components/MobileMenu";
import SideNav from "./Components/SideNav";
import Account from "./Screens/Account";
import Dashboard from "./Screens/Dashboard";
import ReportDaily from "./Screens/ReportDaily";
import ReportWeekly from "./Screens/ReportWeekly";
import ReportPlus from "./Screens/ReportPlus";
import ReportLatam from "./Screens/ReportLatam";
import ReportClimate from "./Screens/ReportClimate";
import Privacy from "./Screens/Privacy";
import Login from "./Components/Auth/Login";
import http from "./http-common";
import { useEffect } from "react";

function App() {
  const { token, setToken } = useToken();
  useEffect(() => {
    if (localStorage.getItem("tokenData")) {
      const userRole = JSON.parse(localStorage.getItem("tokenData")).user_role;
    }
  }, [token]);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="main-container">
      <HashRouter>
        <SideNav />
        <MobileMenu />
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/my-account" element={<Account />} /> */}
            <Route element={<ProtectedRoute role={[2734]} />}>
              <Route path="/my-account" element={<Account />} />
            </Route>
            <Route element={<ProtectedRoute role={[2656, 2658]} />}>
              <Route path="/report-daily" element={<ReportDaily />} />
            </Route>
            <Route element={<ProtectedRoute role={[2669, 2671]} />}>
              <Route path="/report-weekly" element={<ReportWeekly />} />
            </Route>
            <Route element={<ProtectedRoute role={[2663, 2666]} />}>
              <Route path="/report-plus" element={<ReportPlus />} />
            </Route>
            <Route element={<ProtectedRoute role={[2635, 2644]} />}>
              <Route path="/report-latam" element={<ReportLatam />} />
            </Route>
            <Route element={<ProtectedRoute role={[2650, 2652]} />}>
              <Route path="/report-climate" element={<ReportClimate />} />
            </Route>
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}
export default App;
