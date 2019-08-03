import React from 'react';
import Grandchild from './Grandchild';

const Child = () => {
    return (
      <>I'm the Child <Grandchild /></>
    );
}

export default Child;