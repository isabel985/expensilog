import React, { useContext } from 'react';
import { ReportContext } from '../../containers/pages/ReportContext';
import NewReportForm from './_NewReportForm';

const ReportActions = () => {
  const { state, dispatch } = useContext(ReportContext);

  return (
    <div className='report-actions'>
      <div className='origin'>
        from ReportActions
        </div>
      <button id='newReportButton' className='btn btn-action-1' onClick={() => { dispatch({ type: 'newReport' }) }} >New Report</button>
    </div>
  );
}

export default ReportActions;