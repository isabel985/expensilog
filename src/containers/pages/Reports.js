import React from 'react';
import '../../styles/pages.css';
import '../../styles/reports.css';
import Modal from '../../components/Modal';
import ReportActions from '../../components/ReportComponents/ReportActions';
import ReportFilters from '../../components/ReportComponents/ReportFilters';
import MonthlyStatementsTable from '../../components/ReportComponents/MonthlyStatementsTable';
import NewReport from '../../components/ReportComponents/NewReportForm';


const Reports = () => {
  return (
    <main className='reports-page'>
      <Modal><NewReport /></Modal>
      <header>
        <h1>Reports</h1>
        <ReportActions />
      </header>
      <div className='content-wrapper'>
        <ReportFilters />
        <MonthlyStatementsTable />
      </div>
    </main>
  );
}

export default Reports;