import React from 'react';
// import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import '../Assets/Css/pagination.css';
const Pagination2 = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    // className
  } = props;

  console.log(props)
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  console.log(paginationRange);

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul  className='pagination-container' >
       {/* Left navigation arrow */}
      
      {paginationRange.map(pageNumber => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }
		
        // Render our Page Pills
        return (
          
          <li className = {`pagination-item ${pageNumber===currentPage ? "selected" : ""}`}
            // className={classnames('pagination-item', {
            //   selected: pageNumber === currentPage
            // })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

    </ul>
  );
};

export default Pagination2;