import React from 'react';
import '../styles/avatar.css';

const Avatar = ({ img, name }) => {
  return (
    <div className="avatar">
      {img
        ? <img src={`~/src/images/jennifer.png`} alt=""></img>
        : <i className="fas fa-user-circle"></i>
      }
      {name && <p>{name}</p>}
    </div>
  );
}

export default Avatar;