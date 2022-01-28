import React from "react";
import {Navdiv,Imagediv,Btndiv,Signinbtn,PCbtn} from '../Assets/Css/cssNav'

import Logo from "../Assets/Images/white.png";



const Nav = () => {
  return (
    <Navdiv>
      <Imagediv src={Logo} alt="hi" />
      <Btndiv>
        <Signinbtn>Sign In</Signinbtn>
        <PCbtn>Dukaan for PC</PCbtn>
      </Btndiv>
    </Navdiv>
  );
};

export default Nav;
