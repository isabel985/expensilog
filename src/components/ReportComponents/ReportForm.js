import React from 'react';
import DragDrop from '../../components/ReportComponents/DragDrop';
import Avatar from '../Avatar';
import { userInfo } from 'os';

const ReportForm = () => {

  let user = {
    id: '432345',
    name: 'Jennifer',
    avatarImg: 'jennifer.png',
    supervisor: {
      id: '98723',
      name: 'Steve',
      avatarImg: 'steve.png',
    }
  };

  return (
    <React.Fragment>
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
              <div className='status-label open'>Open</div>
              <div className='report-id'><span>ID:</span>89349845</div>

            </div>

            <div className='form-control'>
              <label>Report</label>
              <select>
                <option>May</option>
                <option>June</option>
                <option>July</option>
              </select>
            </div>
          </div>

          <div className='report-header'>
            <div className='report-name'>Expense Report May 2019</div>
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

    </React.Fragment >
  );
}

export default ReportForm;
