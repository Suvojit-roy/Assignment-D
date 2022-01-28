import React from "react";
import {Pcard,Heading,Desc} from '../Assets/Css/cssPagecard'

const Pagecard = (props) => {
  return (
    <Pcard>
      <img src={props.image} alt="hi" />
      <Heading style={{ color: "black" }}>{props.tit}</Heading>
      <Desc>{props.des}</Desc>
    </Pcard>
  );
};

export default Pagecard;
