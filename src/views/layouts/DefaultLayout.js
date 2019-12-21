import React from "react";
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";

const DefaultLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
