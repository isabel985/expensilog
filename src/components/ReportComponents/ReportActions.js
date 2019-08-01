import React from 'react';

const ReportActions = ({newReportClick}) => {
  return (
    <div className='report-actions'>
      <button id='newReportButton' className='btn btn-action-1' onClick={newReportClick} >New Report</button>
    </div>
  );
}

export default ReportActions;