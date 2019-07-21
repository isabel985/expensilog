import React from 'react';
import '../styles/avatar.css';

const Avatar = () => {
  return (
    <div className="avatar">
      {true
        ? <i class="fas fa-user-circle"></i>
        : <img src="http://placeimg.com/100/100/people" alt=""></img>
      }
      <p>Danielle</p>
    </div>
  );
}

export default Avatar;