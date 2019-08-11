import React, { useContext, useState, useEffect } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { ReportContext } from '../../containers/pages/ReportContext';
import ReportFilter from './ReportFilter';

const ReportFilters = () => {
  const { state, dispatch } = useContext(ReportContext);

  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    if (!showFilters) {
      document.getElementById('toggle').classList.add('hidden');
      document.querySelector('.filter-hide').innerHTML = '<i class="fas fa-sliders-h"></i>Show Filters'
    } else {
      document.getElementById('toggle').classList.remove('hidden');
      document.querySelector('.filter-hide').innerHTML = '<i class="fas fa-sliders-h"></i>Hide Filters'
    }
  }, [showFilters]);

  const toggleFilters = () => setShowFilters(!showFilters);

  return (
    <div className='report-filters'>
      <div className='origin'>
        from ReportFilters
        </div>
      <div className='report-row filter-hide-reset'>
        <div className='filter-hide' onClick={toggleFilters}></div>
      </div>

      <div id='toggle'>
        <div className='report-row report-checkbox-row'>
          <i className="fas fa-file"></i>


          <ReportFilter
            id='checkOpen'
            type='open'
            onClick={() => { dispatch({ type: 'filter', payload: 'open' }) }}>
            Open
        </ReportFilter>

          <ReportFilter
            id='checkProcessing'
            type='processing'
            onClick={() => { dispatch({ type: 'filter', payload: 'processing' }) }}>
            Processing
        </ReportFilter>

          <ReportFilter
            id='checkApproved'
            type='approved'
            onClick={() => { dispatch({ type: 'filter', payload: 'approved' }) }}>
            Approved
        </ReportFilter>

          <ReportFilter
            id='checkReimbursed'
            type='reimbursed'
            onClick={() => { dispatch({ type: 'filter', payload: 'reimbursed' }) }}>
            Reimbursed
        </ReportFilter>

          <ReportFilter
            id='checkClosed'
            type='closed'
            onClick={() => { dispatch({ type: 'filter', payload: 'closed' }) }}>
            Closed
        </ReportFilter>
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

    </div>
  );
}

export default ReportFilters;