import React from "react";
import { Outlet } from "react-router-dom";

// Templates
import Header from "../templates/Header";
import Footer from "../templates/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container-fluid">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
