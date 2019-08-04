import React, { useContext } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { ReportContext } from '../../containers/pages/ReportContext';
import ReportFilter from './ReportFilter';

const ReportFilters = () => {
  const { state, dispatch } = useContext(ReportContext);

  return (
    <div className='report-filters'>
      <div className='report-row filter-hide-reset'>
        <div className='filter-hide'><i className="fas fa-sliders-h"></i>Hide Filters</div>
        <div className='filter-reset'><i className="fas fa-undo-alt"></i>Reset</div>
      </div>

      <div className='report-row report-date-row'>
        <i className="far fa-calendar-alt"></i>
        <label className='date-range-label'>Date Range:</label>
        <DateRangePicker startDate="1/1/2019" endDate="3/1/2019">
          <input id='dateRange' className='date-range'
            value='01/01/19 - 03/01/19'
            disabled
          />
        </DateRangePicker>
      </div>

      <div className='report-row report-search-row'>
        <i className="fas fa-search"></i>
        <div className='search-field'>
          <input
            type='text'
            placeholder='Search'
          />
          <button type='submit'>
            <i className="fas fa-search"></i>
          </button>
        </div>

        <select>
          <option>All Submitters</option>
          <option>One</option>
          <option>Two</option>
        </select>
      </div>

      <div className='report-row report-checkbox-row'>
        <i className="fas fa-file"></i>

        <ReportFilter
          id='checkOpen'
          type='open'
          onClick={() => { dispatch({ type: 'filter', payload: 'open' }) }}>
          Open
        </ReportFilter>

        {/* <div className="filter-checkbox open">
          <input type='checkbox' id='checkOpen' onClick={() => { dispatch({ type: 'filter', payload: 'open' }) }} />
          <label htmlFor='checkOpen'>Open</label>
        </div> */}

        <div className="filter-checkbox processing">
          <input type='checkbox' id='checkProcessing' />
          <label htmlFor='checkProcessing'>Processing</label>
        </div>

        <div className="filter-checkbox approved">
          <input type='checkbox' id='checkApproved' />
          <label htmlFor='checkApproved'>Approved</label>
        </div>

        <div className="filter-checkbox reimbursed">
          <input type='checkbox' id='checkReimbursed' />
          <label htmlFor='checkReimbursed'>Reimbursed</label>
        </div>

        <div className="filter-checkbox closed">
          <input type='checkbox' id='checkClosed' />
          <label htmlFor='checkClosed'>Closed</label>
        </div>
      </div>

      <template>

        <i className="fas fa-undo-alt"></i>
        <i className="fas fa-sort-up"></i>
        <i className="fas fa-sort-down"></i>


        <i className="fas fa-sort-amount-down-alt"></i>
        <i className="fas fa-sort-amount-up"></i>
        <i className="fas fa-sort-amount-down"></i>
      </template>

    </div>
  );
}

export default ReportFilters;