import React, { useContext } from 'react';
import { user, statements } from '../../utils/data';
import ReportsList from '../../components/ReportComponents/ReportsList';
import ReportForm from '../../components/ReportComponents/ReportForm';
import '../../styles/pages.css';
import '../../styles/reports.css';
import { ReportContext, ContextProvider } from './ReportContext';

const ReportsContainer = () => {
  const { state, dispatch } = useContext(ReportContext);

  // const [formMode, setFormMode] = useState(false);
  // const [formId, setFormId] = useState(Math.floor(Math.random() * 20));
  // const [name, setName] = useState('');

  // const onReportClick = () => {
  //   console.log('onReportClick was called');
  //   console.log('id is ', reportState.selectedReportId);
  //   // only need to find statement when report is clicked
  //   let foundStatement = statements.find(statement => statement.id === reportState.selectedReportId)
  //   // if found statement
  //   if (foundStatement) {
  //     // override the default variables 
  //     console.log('foundStatement is', foundStatement);
  //     setFormId(foundStatement.id);
  //     setName(foundStatement.name);
  //     status = foundStatement.status;
  //     setFormMode(true);
  //   } else {
  //     alert('no statement found');
  //     // newForm = true;
  //   }
  // }

  // const newReportClick = () => {
  //   setFormMode(true);
  //   console.log("newReportClick was called");
  // }

  // useEffect(()=>{},[name]);
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