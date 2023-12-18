import { Suspense } from "react";
import "./App.css";
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Heading/Header";
import UserRoutes from "./UserRoutes";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <d>
      <Suspense fallback={<Loader />}>
        <Header />
        <UserRoutes />
        {!isHomePage && <Footer />}
      </Suspense>
    </d>
  );
};

export default App;
