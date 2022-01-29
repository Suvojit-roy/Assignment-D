import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Colordiv,
  Headingsmall,
  Inner65,
  Textbox,
  Inputtext,
  Image,
  Bluebtn,
  Slogans,
  SloganHeading,
  SloganHeadingdiv,
  Slogandiv,
  Downloadbtn,
  Pagibtn,
  Pagibtndiv,
} from "../Assets/Css/cssHero";
import { TextHeading } from "../Assets/Css/cssProducts";
import { Desc } from "../Assets/Css/cssProductcard";
import Cross from "../Assets/Images/cross.png";
import "../Assets/Css/dropdown.css";
import Pagination from "./Pagination";

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
  "5There is no Sore it will Not Heal, No cool it will not Subdue.",
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
  "Review the facts cool is the best.5",
  "6There is no Sore it will Not Heal, No cool it will not Subdue.",
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
                <div class="dropdownfilter">
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
                      class="dropdown-contentfilterc"
                      style={{ marginTop: "4rem" }}
                    >
                      <div style={{ width: "4rem" }}>Copied!</div>
                    </div>
                  )}
                </div>
              </CopyToClipboard>
            ))}
          </Slogans>
          <Pagibtndiv>
            {currentPage !== 1 ? (
              <Pagibtn
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
              >
                {"<  "}Prev
              </Pagibtn>
            ) : (
              <div style={{ width: "10%", color: "white" }}> Prev</div>
            )}

            <Pagination
              style={{ width: "50%" }}
              postsPerPage={postsPerPage}
              totalPosts={sloganarr.length}
              currentPage={currentPage}
              paginate={paginate}
            />
            {currentPage !== Math.ceil(sloganarr.length / postsPerPage) ? (
              <Pagibtn
                style={{ textAlign: "right" }}
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
              >
                Next{"  >"}
              </Pagibtn>
            ) : (
              <div style={{ width: "10%", color: "white" }}>Next</div>
            )}
          </Pagibtndiv>
        </Slogandiv>
      </Inner65>
    </Colordiv>
  );
};

export default Hero;
