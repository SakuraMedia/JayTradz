import React from "react";
import Cards from "../components/Minting/InterMinting/Cards/cards";
import Details from "../components/Minting/InterMinting/Details/details";
import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const InternMinting = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <Details />
      <Footer />
    </div>
  );
};

export default InternMinting;
