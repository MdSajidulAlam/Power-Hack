import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ totalBillings, billingPerPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBillings / billingPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className='my-5'>
            <ul className='flex justify-center items-center'>
                {pageNumbers.map(number => (
                    <li key={number} className='m-3'>
                        <a onClick={() => paginate(number)} to='/!#' as={Link} className='btn btn-active'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;