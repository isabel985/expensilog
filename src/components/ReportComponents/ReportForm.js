import React, { useContext, useEffect } from 'react';
import DragDrop from '../../components/ReportComponents/DragDrop';
import Avatar from '../Avatar';
// import { userInfo } from 'os';
import { ReportContext } from '../../containers/pages/ReportContext';

const ReportForm = (props) => {
  const { state, dispatch } = useContext(ReportContext);

  let reportId = props.match.params.id;

  useEffect(() => {
    // if we have an id, dispatch an action called statementSelected
    if (reportId) {
      dispatch({ type: "statementSelected", payload: reportId })
    } else {
      // dispatch an action called newReport
      dispatch({ type: "newReport" })
    }
  }, [props.match.params.id])

  let monthOptions = props.availableMonths.map(month => <option>{month}</option>);

  let selectBox = '';
  if (!state.statementSelected.date) {
    selectBox = <div className='form-control'>
      <label>Report</label>
      <select onChange={(ev) => { dispatch({ type: 'dateChange', payload: ev.target.value }) }}>
        <option>Select Date</option>
        {monthOptions}
      </select>
    </div>
  }

  return (
    <>
      <div className='origin'>
        from ReportForm
        </div>
      <header>
        <h1>Report Form</h1>
      </header>
      {state.newForm ? <div className='content-wrapper report-form-header'>
        <button className='btn btn-cancel' onClick={() => { dispatch({ type: 'cancelReport' }) }}>Cancel</button>
      </div> : ""}

      <div className='content-wrapper'>

        <div className='report-form'>

          <div className='report-header'>
            <div className='status-id-wrapper'>
              <div className={`status-label status`}>{state.statementSelected.status}</div>
              <div className='report-id'><span>ID:</span>{state.statementSelected.id}</div>

            </div>

            {selectBox}

          </div>

          <div className='report-header'>
            <div className='report-name'>Expense Report {state.statementSelected.date}</div>
          </div>

          <div>
            <div>
              <DragDrop>
                <div className='report-from-to'>
                  <div className=''><Avatar img={state.user.avatarImg} />From: <span>{state.user.name}</span></div>
                  <div className=''><Avatar img={state.user.supervisor.avatarImg} />To: <span>{state.user.supervisor.name}</span></div>
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
