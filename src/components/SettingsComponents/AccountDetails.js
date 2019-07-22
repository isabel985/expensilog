import React from 'react';

const AccountDetails = () => {
  return (
    <div>

      <header>Your Details</header>
      <div className="account-details-details">
        <div className="avatar"></div>
        <div className="account-details-details-form"></div>
      </div>

      <header>Change Password</header>
      <div className="account-details-password">
        <div className="account-details-password-form">
          <div className="form-control"></div>
        </div>
      </div>
      
    </div>
  )
}

export default AccountDetails;