import React, { useState, useEffect } from 'react';
import DragDrop from '../../components/ReportComponents/DragDrop';
import Avatar from '../Avatar';
// import { userInfo } from 'os';
import { user, statements } from '../../utils/data';

const ReportForm = (props) => {

  // move this to reports so we're not having to update state in two different components
      //  create default name state
      const [ name, setName ] = useState('');

      useEffect(() => {

      },[props.id]);

      // if we don't have an id
      //  create a new id
      let id = Math.floor(Math.random() * 20);
      let status = 'open';

      // if we have an id
      // if (props.id) {
        //  get statement that matches id
        let foundStatement = statements.find(statement => statement.id === props.id)
        // if found statement
        if (foundStatement) {
          //  override the default variables 
          console.log('foundStatement is',foundStatement);
          id = foundStatement.id;
          setName(foundStatement.name);
          status = foundStatement.status;
        // }
      }

  // create a list of months where the report is open or no report at all
  let months = ['January 2019', 'February 2019', 'March 2019', 'April 2019', 'May 2019', 'June 2019', 'July 2019', 'August 2019', 'September 2019'];
  // map over statments and return the statment name
  let statementMonths = statements.map(statement => statement.name);
  // filter over months and get back a list of all available months
  let availableMonths = months.filter(month => !statementMonths.includes(month));

  let monthOptions = availableMonths.map(month => <option>{month}</option>);

  // change title when date is selected
  const handleOnDateChange = ev => {
    let selectedDate = ev.target.value;
    setName(selectedDate);
  }

  return (
    <>
      <header>
        <h1>Report Form</h1>
      </header>
      <div className='content-wrapper report-form-header'>
        <button className='btn btn-cancel'>Cancel</button>
        <button className='btn btn-save'>Save</button>
      </div>

      <div className='content-wrapper'>

        <div className='report-form'>

          <div className='report-header'>
            <div className='status-id-wrapper'>
              <div className={`status-label status`}>{status}</div>
              <div className='report-id'><span>ID:</span>{id}</div>

            </div>

            <div className='form-control'>
              <label>Report</label>
              <select onChange={handleOnDateChange}>
                <option>Select Date</option>
                {monthOptions}
              </select>
            </div>
          </div>

          <div className='report-header'>
            <div className='report-name'>Expense Report {name}</div>
          </div>

          <div>
            <div>
              <DragDrop>
                <div className='report-from-to'>
                  <div className=''><Avatar img={user.avatarImg} />From: <span>{user.name}</span></div>
                  <div className=''><Avatar img={user.supervisor.avatarImg} />To: <span>{user.supervisor.name}</span></div>
                </div>
              </DragDrop>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default ReportForm;
