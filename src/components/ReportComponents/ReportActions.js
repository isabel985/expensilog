import React, { useContext } from 'react';
import { ReportContext } from '../../containers/pages/ReportContext';

const ReportActions = () => {
  const { newReportClick } = useContext(ReportContext);

  return (
    <div className='report-actions'>
      <div className='origin'>
        from ReportActions
        </div>
      <button id='newReportButton' className='btn btn-action-1' onClick={newReportClick} >New Report</button>
    </div>
  );
}

export default ReportActions;