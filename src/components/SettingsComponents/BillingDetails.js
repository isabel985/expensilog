import React from 'react';

const BillingDetails = () => {
  return (
    <React.Fragment>
      <div className='card'>
        <h3>Billing History</h3>
        <div className='card-content'>
          <div className='small-table'>
            <span>Date</span>
            <span>Amount</span>
            <span>Status</span>

            <span>01/01/19</span>
            <span>$10.00</span>
            <span>Paid</span>

            <span>02/01/19</span>
            <span>$10.00</span>
            <span>Pending</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BillingDetails;