import React, { useState } from 'react';

import ReportsList from '../../components/ReportComponents/ReportsList';
import ReportForm from '../../components/ReportComponents/ReportForm';

import '../../styles/pages.css';
import '../../styles/reports.css';

const Reports = () => {
  const [formMode, setFormMode] = useState(false);
  const [formId, setFormId] = useState(null);

  const onReportClick = (id) => {
    console.log('onReportClick was called');
    console.log('id is ', id);
    setFormMode(true);
    setFormId(id);
  }

  const newReportClick = () => {
    setFormMode(true);
    console.log("newReportClick was called");
  }

  return (
    <main className='reports-page'>
      { formMode 
      ? <ReportForm id={formId} />
      : <ReportsList onReportClick={onReportClick} newReportClick={newReportClick} />
      }
    </main>
  );
}

export default Reports;