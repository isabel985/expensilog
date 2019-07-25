import React, { useState } from 'react';

import ReportsList from '../../components/ReportComponents/ReportsList';
import ReportForm from '../../components/ReportComponents/ReportForm';

import '../../styles/pages.css';
import '../../styles/reports.css';

const Reports = () => {

  const [formMode, setFormMode] = useState(true);

  return (
    <main className='reports-page'>
      { formMode 
      ? <ReportForm />
      : <ReportsList />
      }
    </main>
  );
}

export default Reports;