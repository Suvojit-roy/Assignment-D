import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import { TextHeading } from "../Assets/Css/cssProducts";
import { Desc } from "../Assets/Css/cssProductcard";
import Cross from "../Assets/Images/cross.png";
import "../Assets/Css/dropdown.css";
import Pagination from "./Pagination";

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

//   background: #f2f2f2;
//   border-radius: 4px;
//   width: 43%;
//   height: 60px;
//   color: #1a181e;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 0.95rem;
//   line-height: 22px;
//   text-align: left;
//   padding: 0.2rem 1rem;
//   margin-top: 1.6rem;
//   @media (max-width: 1100px) {
//     width: 40%;
//   }
const Slogancard = styled.div`
  background: #f2f2f2;
  height: 6rem;
  width: 45%;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: left;
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
  "hi Review the facts cool is the best.",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Review the facts cool is the best.",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Review the facts cool is the best.",
  "2 There is no Sore it will Not Heal, No cool it will not Subdue.",
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
  "6 There is no Sore it will Not Heal, No cool it will not Subdue.",
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
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Review the facts cool is the best.6",
];

const Hero = () => {
  const [val, setVal] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [copy, setCopied] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(18);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sloganarr.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setTimeout(function () {
      setIsShown(false);
    }, 900);
  }, [isShown]);

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
            {currentPosts.map((text) => (
              <CopyToClipboard
                text={text}
                onMouseLeave={() => setIsShown(false)}
                onCopy={() => {
                  setCopied(true);
                  setIsShown(true);
                }}
              >
                <div
                  class="dropdownfilter"
                  style={{
                    height: "4rem",
                    width: "45%",
                    background: "#f2f2f2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "1.6rem",
                    textAlign: "left",
                  }}
                >
                  <button
                    style={{
                      width: "100%",
                      padding: "0.2rem 1rem",
                      textAlign: "left",
                    }}
                    class="dropbtnfilter"
                  >
                    {text}
                    <div className="downbtn"></div>
                  </button>
                  <div class="dropdown-contentfilter">
                    <div>Click to copy</div>
                  </div>
                  {isShown && (
                    <div
                      class="dropdown-contentfilter"
                      style={{ marginTop: "4rem" }}
                    >
                      <div>Copied!</div>
                    </div>
                  )}
                </div>
              </CopyToClipboard>
            ))}
          </Slogans>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
          {currentPage!==1 ?<div onClick={()=>{setCurrentPage(currentPage-1)}} style={{width:"10%",cursor:"pointer",color:"#146EB4"}}>Prev</div>:<div style={{width:"10%",color:"white"}}> Prev</div>}
          
          
          <Pagination style={{width:"50%"}}
            postsPerPage={postsPerPage}
            totalPosts={sloganarr.length}
            currentPage={currentPage}
            paginate={paginate}
          />
          {currentPage!==Math.ceil(sloganarr.length / postsPerPage)?<div style={{width:"10%",cursor:"pointer",textAlign:"right",color:"#146EB4"}} onClick={()=>{setCurrentPage(currentPage+1)}}>Next </div>:<div style={{width:"10%",color:"white"}}>Next</div>}
          </div>
                    
          
        </Slogandiv>
      </Inner65>
    </Colordiv>
  );
};

export default Hero;
