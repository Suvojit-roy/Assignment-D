import React from "react";
import { Paginav,Pagiactive } from "../Assets/Css/cssHero";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
    console.log(pageNumbers);
  }
  return (
    <nav>
      <Paginav
      >
        {pageNumbers.map((number) => (
          <>
            {number===currentPage?
            <div>
            <div key={number}>
              <Pagiactive
                onClick={(event) => {
                  event.preventDefault();
                  paginate(number);
                }}
                href="!#"
                
              >
                {number}
              </Pagiactive>
            </div>
          </div>
            :<div>
              <div key={number} >
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "0 1rem",
                  }}
                  onClick={(event) => {
                    event.preventDefault();
                    paginate(number);
                  }}
                  href="!#"
                  
                >
                  {number}
                </a>
              </div>
            </div>}
          </>
        ))}
      </Paginav>
    </nav>
  );
};

export default Pagination;
