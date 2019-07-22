import React from 'react';
import Modal from '../../components/Modal';
import ReportActions from '../../components/ReportComponents/ReportActions';
import ReportFilters from '../../components/ReportComponents/ReportFilters';
import MonthlyStatementsTable from '../../components/ReportComponents/MonthlyStatementsTable';
import NewReportForm from '../../components/ReportComponents/NewReportForm';
import '../../styles/pages.css';
import '../../styles/reports.css';


const Reports = () => {
  return (
    <main className='reports-page'>
      <Modal><NewReportForm /></Modal>
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