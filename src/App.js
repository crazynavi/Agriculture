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
import http from "./utils/http-common";
import { useEffect } from "react";

function App() {
  const { token, setToken } = useToken();

  useEffect(() => {
    // const TIMESTAMP = Date.now();
    // if (token) {
    //   if (!JSON.parse(localStorage.getItem("timestamp"))) {
    //     localStorage.setItem("timestamp", JSON.stringify({
    //       initial: TIMESTAMP,
    //       expiresOn: TIMESTAMP + 1000 * 60 * 15 //15min
    //     }));
    //   } else {
    //     // then, when user access the website again, check the expiresOn, it it's value is bigger than current date
    //     const EXPIRE_DATE = JSON.parse(localStorage.getItem("timestamp")).expiresOn;

    //     if (Date.now() > EXPIRE_DATE) {
    //       localStorage.removeItem("tokenData");
    //       localStorage.removeItem("timestamp");
    //       window.location.href = "";
    //     }
    //   }
    // }
  })

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
            <Route element={<ProtectedRoute role={[119125]} />}>
              <Route path="/my-account" element={<Account />} />
            </Route>
            <Route element={<ProtectedRoute role={[632, 631, 628]} />}>
              <Route path="/report-daily" element={<ReportDaily />} />
            </Route>
            <Route element={<ProtectedRoute role={[636, 637,638]} />}>
              <Route path="/report-weekly" element={<ReportWeekly />} />
            </Route>
            <Route element={<ProtectedRoute role={[639,640,641]} />}>
              <Route path="/report-plus" element={<ReportPlus />} />
            </Route>
            <Route element={<ProtectedRoute role={[642,643,644]} />}>
              <Route path="/report-latam" element={<ReportLatam />} />
            </Route>
            <Route element={<ProtectedRoute role={[645,646,647]} />}>
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
