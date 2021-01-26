import React from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = (props) => {
    const previousLabel = props.previousLabel || "";
    const nextLabel = props.nextLabel || "";
    const onPageChange = props.onPageChange || "";
    
    return(
        <ReactPaginate
          previousLabel={previousLabel}
          nextLabel={nextLabel}
          onPageChange={onPageChange}
      />
    )
}

export default Pagination;