import React from "react";
import { Pagediv, Page80div, TextHeading } from "../Assets/Css/cssProducts";
import Productcard from "./Productcard";

import Rect1 from "../Assets/Images/rec1.png";
import Rect2 from "../Assets/Images/rec2.png";
import Rect3 from "../Assets/Images/rec3.png";
import Rect4 from "../Assets/Images/rec4.png";

const Products = () => {
  return (
    <Pagediv>
      <Page80div>
        <TextHeading>Try our other free products</TextHeading>
      </Page80div>
      <Page80div>
        <Productcard
          image={Rect1}
          tit={"Privacy Policy Generator"}
          des={
            "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
          }
        />
        <Productcard
          image={Rect2}
          tit={"Terms & Conditions Generator"}
          des={
            "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
          }
        />
        <Productcard
          image={Rect3}
          tit={"Domain Name Generator"}
          des={
            "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
          }
        />
        <Productcard
          image={Rect4}
          tit={"Invoice Generator"}
          des={
            "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
          }
        />
      </Page80div>
    </Pagediv>
  );
};

export default Products;
