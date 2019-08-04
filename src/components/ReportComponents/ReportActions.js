import React, { useContext } from 'react';
import { ReportContext } from '../../containers/pages/ReportContext';

const ReportActions = () => {
  const {newReportClick} = useContext(ReportContext);

  return (
    <div className='report-actions'>
      <button id='newReportButton' className='btn btn-action-1' onClick={newReportClick} >New Report</button>
    </div>
  );
}

export default ReportActions;