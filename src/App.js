import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import LoginRegistration from "./Componants/User_login/LoginRegistration";
import Sections from "./Componants/Sections";
import HeroTwo from "./Componants/Sections/HeroTwo";
import Cleaning from "./Componants/Services/Cleaning";
import HomePainting from "./Componants/Services/HomePainting";
import AcRepair from "./Componants/Services/AcRepair";
import Header from "./Componants/Sections/Header";
import About from "./Componants/Sections/About";
import ForgotPassword from "./Componants/User_login/ForgotPassword";
import ServiceProviderLandingPage from "./Componants/Service_Provider/ServiceProviderLandingPage";
import Loader from "./Componants/Sections/Loader";
import PendingReq from "./Componants/Service_Provider/PendingRequest";
import CompletedJob from "./Componants/Service_Provider/CompleteJob";
import Blog from "./Componants/Sections/Blog";
import Cart from "./Componants/Services/Cart";
import Next_form from "./Componants/User_login/Next_form";
import PestControl from "./Componants/Services/PestControl";
import Service_Provider_Details from "./Componants/Service_Provider/Service_Provider_Details";
import Electrecian from "./Componants/Services/Electrician";
import Homeclen from "./Componants/Services/homeClen";
import Kitchen from "./Componants/Services/kitchen";
import Plumber from "./Componants/Services/Plumber";
import Painting from "./Componants/Services/Painting";
import SofaCleaning from "./Componants/Services/SofaCleaning";
import BathroomCleaning from "./Componants/Services/BathroomCleaning";
import NewCart from "./Componants/Services/NewCart";
import SPlash from "./Splash";

const AppContent = () => {
  return (
    <>
      <Sections />
    </>
  );
};

const AppWrapper = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      {location.pathname !== "/Service_provider/ServiceProviderLandingPage" &&
        location.pathname !== "/PendingReq" && <Header />}
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/login-registration" element={<LoginRegistration />} />
        <Route path="/HeroTwo" element={<HeroTwo />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/AcRepair" element={<AcRepair />} />
        <Route path="/PestControl" element={<PestControl />} />
        <Route path="/Kitchen" element={<Kitchen />} />
        <Route path="/Plumber" element={<Plumber />} />
        <Route path="/Painting" element={<Painting />} />
        <Route path="/Electrecian" element={<Electrecian />} />
        <Route path="/cleaning" element={<Cleaning />} />
        <Route path="/HomePainting" element={<HomePainting />} />
        <Route path="/Homeclen" element={<Homeclen />} />
        <Route path="/SofaCleaning" element={<SofaCleaning />} />
        <Route path="/BathroomCleaning" element={<BathroomCleaning />} />
        <Route
          path="/Service_provider/ServiceProviderLandingPage"
          element={<ServiceProviderLandingPage />}
        />
        <Route
          path="/Service_provider/Service_Provider_Details"
          element={<Service_Provider_Details />}
        />
        <Route path="/PendingReq" element={<PendingReq />} />
        <Route path="CompletedJob" element={<CompletedJob />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/NerCart" element={<NewCart/>}/>
        <Route path="/Next_form" element={<Next_form />} />
        <Route
          path="/kitchen-cleaning"
          element={<div>Kitchen Cleaning Page</div>}
        />
        <Route path="/plumber" element={<div>Plumber Page</div>} />
      </Routes>
    </>
  );
};

function App() {
  const [showSplash, setShowSplash] = React.useState(true);
  const handleSplashFinish = () => setShowSplash(false);
  return (
    <Router>
      {showSplash ? <SPlash onFinish={handleSplashFinish} /> : <AppWrapper />}
    </Router>
  );
}

export default App;
