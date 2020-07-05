import React from 'react';

const Pagination = ({ postsPerPage, profiles, paginate }) => {
  console.log(profiles)
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(profiles / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers)
  return (
    <nav>
      <ul className='pagination' style={{marginLeft:'500px'}}>
        {pageNumbers.map(number => (
          <li key={number} className='page-item '>
            <a onClick={() => paginate(number)}  className='page-link ' style = {{background:'#007bff'}}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;