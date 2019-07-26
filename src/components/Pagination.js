import React from 'react';

const Pagination = () => {
  return (
    <div className='pagination'>
      <div>Page 1 of 4</div>
      <button><i className="fas fa-caret-left"></i></button>
      <button><i className="fas fa-caret-right"></i></button>
    </div>
  );
}

export default Pagination;