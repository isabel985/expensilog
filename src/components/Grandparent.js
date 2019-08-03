import React from 'react';
import Parent from './Parent';
import UserContext from './UserContext'

const Grandparent = (props) => {
  return (
    <UserContext.Provider value={{yearBorn: 1918}}>
      <div>I'm the Grandparent <Parent /></div>
    </UserContext.Provider>
  )
}

export default Grandparent;