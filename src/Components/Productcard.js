import { Prodcard,Heading,Desc } from "../Assets/Css/cssProductcard";

const Productcard = (props) => {
  return (
    <Prodcard>
      <img src={props.image} alt="hi" style={{width:"100%"}}/>
      <Heading >{props.tit}</Heading>
      <Desc>{props.des}</Desc>
    </Prodcard>
  );
};

export default Productcard;
