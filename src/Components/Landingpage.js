import React from "react";
import {Main,Inner,AppDukan} from '../Assets/Css/cssLandingpage'
import Nav from "./Nav";
import Page2 from "./Page2";
import Products from "./Products";
import Footer from "./Footer";
import Hero from "./Hero";


const Landingpage = () => {
  return (
    <AppDukan>
      <Main>
        <Inner>
          <Nav/>
          <Hero/>
        </Inner>
      </Main>
      <div style={{ width: "100%" }}>
        <Page2 />
        <Products />
        <Footer />
      </div>
    </AppDukan>
  );
};

export default Landingpage;
