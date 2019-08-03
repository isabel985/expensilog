import React from 'react';
import DragDrop from '../../components/ReportComponents/DragDrop';
import Avatar from '../Avatar';
// import { userInfo } from 'os';

const ReportForm = (props) => {
  console.log(props);

  let monthOptions = props.availableMonths.map(month => <option>{month}</option>);

  const selectBox = '';
  if (props.newForm) {
    selectBox = <div className='form-control'>
      <label>Report</label>
      <select onChange={props.handleOnDateChange}>
        <option>Select Date</option>
        {monthOptions}
      </select>
    </div>
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
              <div className={`status-label status`}>{props.status}</div>
              <div className='report-id'><span>ID:</span>{props.id}</div>

            </div>

            {selectBox}

          </div>

          <div className='report-header'>
            <div className='report-name'>Expense Report {props.name}</div>
          </div>

          <div>
            <div>
              <DragDrop>
                <div className='report-from-to'>
                  <div className=''><Avatar img={props.user.avatarImg} />From: <span>{props.user.name}</span></div>
                  <div className=''><Avatar img={props.user.supervisor.avatarImg} />To: <span>{props.user.supervisor.name}</span></div>
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
