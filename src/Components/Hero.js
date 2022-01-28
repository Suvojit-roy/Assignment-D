import React, { useState } from "react";
import styled from "styled-components";
import { TextHeading } from "../Assets/Css/cssProducts";
import { Desc } from "../Assets/Css/cssProductcard";
import Cross from "../Assets/Images/cross.png";
import '../Assets/Css/dropdown.css'

export const Colordiv = styled.div`
  background: white;
  margin-top: 3rem;
  height: 100rem;
  width: 100%;
  box-shadow: 0px 2px 8px rgba(26, 24, 30, 0.06);
  border-radius: 8px;
  background: #ffffff;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-directon: column;
`;

const Headingsmall = styled.div`
  font-family: GalanoGrotesque;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 28px;
  color: #4d4d4d;
  margin-bottom: 3rem;
`;

const Inner65 = styled.div`
  width: 65%;
  margin-top: 3rem;
`;

const Textbox = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  height: 4rem;
  margin-top: 1rem;
  padding: 0 0.9rem;
`;

const Inputtext = styled.input`
  width: 80%;
  border: none;
  height: 60%;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 24px;
  color: #1a181e;
  &:focus {
    outline: none;
  }
`;
const Image = styled.img`
  cursor: pointer;
`;

const Bluebtn = styled.div`
  background: #146eb4;
  border-radius: 4px;
  width: 30%;
  height: 3.2rem;
  margin-top: 3rem;
  color: white;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slogandiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%;
  flex-direction: column;
  padding-bottom: 3rem;
  padding-top: 3rem;
  border-top: 1px solid #d9d9d9;
  height: 70rem;
  margin-top: 3rem;
`;

const SloganHeadingdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const SloganHeading = styled.div`
  font-family: GalanoGrotesquesemibold;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #1a181e;
`;

const Downloadbtn = styled.div`
  height: 1.2rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  border: 1px solid #146eb4;
  color: #146eb4;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  border-radius: 4px;
`;

const Slogancard = styled.div`
  background: #f2f2f2;
  border-radius: 4px;
  width: 43%;
  height: 60px;
  color: #1a181e;
  font-style: normal;
  font-weight: normal;
  font-size: 0.95rem;
  line-height: 22px;
  text-align: left;
  padding: 0.2rem 1rem;
  margin-top: 1.6rem;
  @media (max-width: 1100px) {
    width: 40%;
  }
`;

const Slogans = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1rem;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 3rem;
`;

const sloganarr = [
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Review the facts cool is the best.",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Review the facts cool is the best.",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Review the facts cool is the best.",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Review the facts cool is the best.",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Review the facts cool is the best.",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Review the facts cool is the best.",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Review the facts cool is the best.",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Review the facts cool is the best.",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Review the facts cool is the best.",
];

const Hero = () => {
  const [val, setVal] = useState("");
  const [isShown, setIsShown] = useState(false);

  return (
    <Colordiv>
      <Inner65>
        <TextHeading style={{ marginBottom: "1rem" }}>
          Free Slogan Maker
        </TextHeading>
        <Headingsmall>
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </Headingsmall>
        <Desc>Word for your slogan</Desc>
        <Textbox>
          <Inputtext
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <Image src={Cross} alt="remove" onClick={() => setVal(() => "")} />
        </Textbox>
        <Bluebtn>Generate Slogans</Bluebtn>
        <Slogandiv>
          <SloganHeadingdiv>
            <SloganHeading>
              We have generated 1,023 slogans for “cozy”
            </SloganHeading>
            <Downloadbtn>Download all</Downloadbtn>
          </SloganHeadingdiv>
          <Slogans>
            {sloganarr.map((text) => (
              <div class="dropdownfilter">
              <button class="dropbtnfilter">Last 7 days<div className="downbtn"></div></button>
              <div class="dropdown-contentfilter">
                <div>Click to copy</div>
                {/* <a href="#">Link 3</a> */}
              </div>
            </div>
            ))}
          </Slogans>
        </Slogandiv>
      </Inner65>
    </Colordiv>
  );
};

export default Hero;
