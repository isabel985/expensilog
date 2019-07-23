import React from 'react';

const PreferencesDetails = () => {
  return (
    <React.Fragment>
      <div className='card'>
        <h3>Unit Tracking</h3>
        <div className='card-content'>
          <div className='small-table'>
            <span>Unit</span>
            <span>Value</span>
            <span></span>

            <span>hour</span>
            <span>$10.00</span>
            <span>
              <button>Change</button>
              </span>

            <span>widget</span>
            <span>$3.50</span>
            <span>
              <button>Change</button>
              </span>
          </div>
        </div>
      </div>
    </React.Fragment> 
  );
}

export default PreferencesDetails;