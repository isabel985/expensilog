import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';

const ReportFilters = () => {
  return (
    <div className='report-filters'>
      <div className='report-row filter-hide-reset'>
        <div className='filter-hide'><i class="fas fa-sliders-h"></i>Hide Filters</div>
        <div className='filter-reset'><i class="fas fa-undo-alt"></i>Reset</div>
      </div>

      <div className='report-row report-date-row'>
        <i class="far fa-calendar-alt"></i>
        <label className='date-range-label'>Date Range:</label>
        <DateRangePicker startDate="1/1/2019" endDate="3/1/2019">
          <input id='dateRange' className='date-range'
            value='01/01/19 - 03/01/19'
            disabled
          />
        </DateRangePicker>
      </div>

      <div className='report-row report-search-row'>
        <i class="fas fa-search"></i>
        <div className='search-field'>
          <input
            type='text'
            placeholder='Search'
          />
          <button type='submit'>
            <i class="fas fa-search"></i>
          </button>
        </div>


        <select>
          <option>All Submitters</option>
          <option>One</option>
          <option>Two</option>
        </select>
      </div>

      <div className='report-row report-checkbox-row'>
        <i class="fas fa-file"></i>
        <div className="filter-checkbox filter-open">
          <input type='checkbox' id='checkOpen' />
          <label htmlFor='checkOpen'>Open</label>
        </div>

        <div className="filter-checkbox filter-processing">
          <input type='checkbox' id='checkProcessing' />
          <label htmlFor='checkProcessing'>Processing</label>
        </div>

        <div className="filter-checkbox filter-approved">
          <input type='checkbox' id='checkApproved' />
          <label htmlFor='checkApproved'>Approved</label>
        </div>

        <div className="filter-checkbox filter-reimbursed">
          <input type='checkbox' id='checkReimbursed' />
          <label htmlFor='checkReimbursed'>Reimbursed</label>
        </div>

        <div className="filter-checkbox filter-closed">
          <input type='checkbox' id='checkClosed' />
          <label htmlFor='checkClosed'>Closed</label>
        </div>
      </div>

      <template>
        
        <i class="fas fa-undo-alt"></i>
        <i class="fas fa-sort-up"></i>
        <i class="fas fa-sort-down"></i>


        <i class="fas fa-sort-amount-down-alt"></i>
        <i class="fas fa-sort-amount-up"></i>
        <i class="fas fa-sort-amount-down"></i>
        </template>

    </div>
  );
}

export default ReportFilters;