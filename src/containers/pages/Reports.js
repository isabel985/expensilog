import React, { useState } from 'react';

import ReportsList from '../../components/ReportComponents/ReportsList';
import ReportForm from '../../components/ReportComponents/ReportForm';

import DragDrop from '../../components/ReportComponents/DragDrop';

import '../../styles/pages.css';
import '../../styles/reports.css';

const Reports = () => {

  const [formMode, setFormMode] = useState(false);

  // 

  return (
    <main className='reports-page'>
      { formMode 
      ? <ReportsList />
      : <ReportForm />
      }
      <DragDrop />
    </main>
  );
}

export default Reports;