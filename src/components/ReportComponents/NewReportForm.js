import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';

const NewReportForm = () => {
  return (
    <React.Fragment>
      <h2>Create New Report</h2>

      <div className='form-control'>
        <label>Merchant</label>
        <input id='merchant' type='text' />
      </div>

      <div className='form-control'>
        <label>Date</label>
        <DateRangePicker startDate="1/1/2019" endDate="1/1/2019" singleDatePicker>
          <input id='dateRange' className='date-range'
            value='01/01/19'
            disabled
          />
        </DateRangePicker>
      </div>

      <div className='form-control'>
        <label>Total</label>
        <input id='total' type='text' />
      </div>

      <div className='form-control billable'>
        <input id='billable' type='checkbox' />
        <label htmlFor='billable'>Billable</label>
      </div>

      <div className='form-control'>
        <label>Department</label>
        <select>
          <option>RND</option>
          <option>Marketing</option>
          <option>Sales</option>
        </select>
      </div>

      <div className='form-control'>
        <label>Customer</label>
        <select>
          <option>Customer A</option>
          <option>Customer B</option>
          <option>Customer C</option>
        </select>
      </div>

      <div className='form-control'>
        <label>Location</label>
        <input type='text' />
      </div>

      <div className='form-control'>
        <label>Description</label>
        <input type='text' />
      </div>

      <div className='form-control'>
        <label>Report</label>
        <select>
          <option>May</option>
          <option>June</option>
          <option>July</option>
        </select>
      </div>

      <div className='form-control action-buttons'>
        <button>Cancel</button>
        <button>Save</button>
      </div>

    </React.Fragment>
  );
}

export default NewReportForm;