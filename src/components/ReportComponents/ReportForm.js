import React from 'react';
import DragDrop from '../../components/ReportComponents/DragDrop';

const ReportForm = () => {

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
            <div className='status-label open'>Open</div>
            <div className='form-control'>
              <label>Report</label>
              <select>
                <option>May</option>
                <option>June</option>
                <option>July</option>
              </select>
            </div>
          </div>

          {/* 
          each report has:
          - id          
          - status label

          - name
          - From
          - To
          - list of expenses 
          - total $ amount

          - Submitted Date 
          "post-review" items: 
          - rejected status
          - reimbursable amount
          - non-reimbursable amount
          */}

          <DragDrop />
        </div>

      </div>

    </React.Fragment >
  );
}

export default ReportForm;
