import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = props => {

    const {itemCount, pageSize, onPageChange, currentPage} = props;
    const pageCount = Math.ceil( itemCount / pageSize);
    if(pageCount === 1) return null;
    const pages =  _.range(1, pageCount+1)
    return (
        <nav>
            <ul className="pagination ">
            {pages.map( page =>  
            <li key={page} className={currentPage === page? "page-item shadow active" : "page-item shadow"}>
                <a onClick={() => onPageChange(page)} className="page-link ">{page}</a>
                </li>)}
            </ul>
        </nav>
    )
}

Pagination.propTypes ={
    itemCount: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired, 
    currentPage: PropTypes.number.isRequired
}

export default Pagination;