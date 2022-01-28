import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
    console.log(pageNumbers);
  }
  return (
    <nav>
      <ul
        className="pagination"
        style={{
          textDecoration: "none",
          display: "flex",
          color: "white",
          paddingLeft: "0",
        }}
      >
        {pageNumbers.map((number) => (
          <>
            {number===currentPage?
            <div>
            <div key={number} className="page-item">
              <a
                style={{
                  textDecoration: "none",
                  width:"1rem",
                  height:"1rem",
                  padding: ".4rem .6rem",
                  border:"1px solid #146EB4",
                  background:"#146EB4",
                  borderRadius:"80%",
                  color:"white"
                //   padding:"0.6rem"
                }}
                onClick={(event) => {
                  event.preventDefault();
                  paginate(number);
                }}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </div>
          </div>
            :<div>
              <div key={number} className="page-item">
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
                  className="page-link"
                >
                  {number}
                </a>
              </div>
            </div>}
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
