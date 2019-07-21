import React from 'react';
import '../../styles/pages.css';
import '../../styles/reports.css';
import ReportActions from '../../components/ReportActions';
import ReportFilters from '../../components/ReportFilters';
import MonthlyStatementsTable from '../../components/MonthlyStatementsTable';

const Reports = () => {
  return (
    <main className='reports-page'>
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