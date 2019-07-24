import React from 'react';
import ReportActions from '../ReportComponents/ReportActions';
import ReportFilters from '../ReportComponents/ReportFilters';
import MonthlyStatementsTable from '../ReportComponents/MonthlyStatementsTable';

const ReportsList = () => {
  return (
    <React.Fragment>
      <header>
        <h1>Reports</h1>
        <ReportActions />
      </header>
      <div className='content-wrapper'>
        <ReportFilters />
        <MonthlyStatementsTable />
      </div>
    </React.Fragment>
  );
}

export default ReportsList;