import React from 'react';
import ReportActions from '../ReportComponents/ReportActions';
import ReportFilters from '../ReportComponents/ReportFilters';
import MonthlyStatementsTable from '../ReportComponents/MonthlyStatementsTable';

const ReportsList = ({onReportClick, newReportClick}) => {
  return (
    <React.Fragment>
      <header>
        <h1>Reports</h1>
        <ReportActions newReportClick={newReportClick}/>
      </header>
      <div className='content-wrapper'>
        <ReportFilters />
        <MonthlyStatementsTable 
          onReportClick={onReportClick} 
          />
      </div>
    </React.Fragment>
  );
}

export default ReportsList;