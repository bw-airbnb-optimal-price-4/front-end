import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const DefaultLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
