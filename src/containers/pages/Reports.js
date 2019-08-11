import React, { useContext } from 'react';
import { user, statements } from '../../utils/data';
import ReportsList from '../../components/ReportComponents/ReportsList';
import ReportForm from '../../components/ReportComponents/ReportForm';
import '../../styles/pages.css';
import '../../styles/reports.css';
import { ReportContext, ContextProvider } from './ReportContext';

const ReportsContainer = () => {
  const { state, dispatch } = useContext(ReportContext);

  let status = 'open';

  // create a list of months where the report is open or no report at all
  let months = ['January 2019', 'February 2019', 'March 2019', 'April 2019', 'May 2019', 'June 2019', 'July 2019', 'August 2019', 'September 2019'];
  // map over statments and return the statment name
  let statementMonths = statements.map(statement => statement.name);
  // filter over months and get back a list of all available months
  let availableMonths = months.filter(month => !statementMonths.includes(month));

  // change title when date is selected
  const handleOnDateChange = ev => {
    let selectedDate = ev.target.value;
    // setName(selectedDate);
  }

  return (

    <main className='reports-page'>
      <div className='origin'>
        from Reports
        </div>
      {state.formMode
        ? <ReportForm
          availableMonths={availableMonths}
          handleOnDateChange={handleOnDateChange}
        // newForm={newForm}
        />
        : <ReportsList
          onReportClick={() => { }}
          newReportClick={() => { }}
        />
      }
    </main>

  );
}
const Reports = () => {
  return (
    <ContextProvider>
      <ReportsContainer></ReportsContainer>
    </ContextProvider>)
}
export default Reports;