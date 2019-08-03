import React, { useContext } from 'react';
import UserContext from './UserContext';

const Grandchild = () => {
  const {yearBorn} = useContext(UserContext);
  
  return (
    <p>My Grandparent was born in {yearBorn}</p>
    );
}

export default Grandchild;