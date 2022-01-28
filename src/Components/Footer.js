import React from "react";
import {
  Pagediv,
  Page80div,
  Upperdiv,
  Logodiv,
  Linkcolumn,
  Linkrow,
  Lowerdiv,
  Lowertext,
  Linkdiv,
} from "../Assets/Css/cssFooter";

import Logo from "../Assets/Images/white.png";
import India from "../Assets/Images/Group.svg";

const Footer = () => {
  return (
    <Pagediv>
      <Page80div>
        <Upperdiv>
          <Logodiv>
            <img src={Logo} alt="logo" />
          </Logodiv>
          <Linkdiv>
            <Linkrow>
              <Linkcolumn>Contact</Linkcolumn>
              <Linkcolumn>FAQ's</Linkcolumn>
            </Linkrow>
            <Linkrow>
              <Linkcolumn>Tutorials</Linkcolumn>
              <Linkcolumn>Blogs</Linkcolumn>
            </Linkrow>
            <Linkrow>
              <Linkcolumn>Privacy</Linkcolumn>
              <Linkcolumn>Banned Items</Linkcolumn>
            </Linkrow>
            <Linkrow>
              <Linkcolumn>About</Linkcolumn>
              <Linkcolumn>Jobs</Linkcolumn>
            </Linkrow>
            <Linkrow>
              <Linkcolumn>Facebook</Linkcolumn>
              <Linkcolumn>Twitter</Linkcolumn>
              <Linkcolumn>Linkedin</Linkcolumn>
            </Linkrow>
          </Linkdiv>
        </Upperdiv>

        <Lowerdiv>
          <Lowertext>Dukaan 2020, All rights reserved.</Lowertext>
          <Lowertext>
            Made in{" "}
            <img src={India} alt="country" style={{ marginLeft: "0.2rem" }} />
          </Lowertext>
        </Lowerdiv>
      </Page80div>
    </Pagediv>
  );
};

export default Footer;
