import React, { useContext } from 'react';
import { ReportContext } from '../../containers/pages/ReportContext';
import NewReportForm from './_NewReportForm';
import { Link } from 'react-router-dom';

const ReportActions = () => {
  const { state, dispatch } = useContext(ReportContext);

  return (
    <div className='report-actions'>
      <div className='origin'>
        from ReportActions
        </div>
      <Link to="/reports/add"><button id='newReportButton' className='btn btn-action-1' >New Report</button></Link>
    </div>
  );
}

export default ReportActions;