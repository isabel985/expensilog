import React from 'react';
import '../../styles/pages.css';
import '../../styles/reports.css';
import Modal from '../../components/Modal';
import ReportActions from '../../components/ReportComponents/ReportActions';
import ReportFilters from '../../components/ReportComponents/ReportFilters';
import MonthlyStatementsTable from '../../components/ReportComponents/MonthlyStatementsTable';
import NewReport from '../../components/ReportComponents/NewReport';


const Reports = () => {
  return (
    <main className='reports-page'>
      <Modal><NewReport /></Modal>
      <header>
        <h1>Reports</h1>
        <ReportActions />
      </header>
      <ReportFilters />
      <MonthlyStatementsTable />
    </main>
  );
}

export default Reports;