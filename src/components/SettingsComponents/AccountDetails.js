import React from 'react';
import Avatar from '../Avatar';
import '../../styles/settings.css';

const AccountDetails = () => {
  return (
    <React.Fragment>
      <div className='card your-details'>
        <h3>Your Details</h3>
        <div className='card-content your-details-content'>
          <Avatar />
          <div>
            <div className='form-control'>
              <label>First Name</label>
              <input id='firstName' type='text' />
            </div>

            <div className='form-control'>
              <label>Last Name</label>
              <input id='lastName' type='text' />
            </div>

            <div className='form-control form-actions'>
              <button className='btn btn-save'>Update</button>
            </div>
          </div>
        </div>
      </div>

      <div className='card change-password'>
        <h3>Change Password</h3>
        <div className='card-content change-password-content'>
          <div>
            <div className='form-control'>
              <label>Enter old password</label>
              <input id='currentPassword' type='text' />
            </div>

            <div className='form-control'>
              <label>Choose a new password</label>
              <input id='newPassword' type='text' />
            </div>

            <div className='form-control'>
              <label>Re-enter new password</label>
              <input id='newPasswordVerify' type='text' />
            </div>

            <div className='form-control form-actions'>
              <button className='btn btn-action-2'>Change Password</button>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default AccountDetails;