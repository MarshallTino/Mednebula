import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ServicesPage from "./pages/ServicesPage/ServicesPage";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage/ContactPage";

import ServiceDetail from "./pages/ServicesPage/ActivitiesServicesDetailPage";
import Layout from "./components/layout/layout";
import "./App.css";
import NotFound from "./pages/NotFound";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Global Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="servicios" element={<ServicesPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="servicios/:slug" element={<ServiceDetail />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
