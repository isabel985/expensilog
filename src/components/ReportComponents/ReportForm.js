import React from 'react';
import Logo from './phone-icon.png';

const ReportForm = () => {

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev, el) {
    console.log('el: ', el);
    // ev.dataTransfer.setData("text", ev.target.id);
    // ev.dataTransfer.setData("text", "drag1");
    console.log(ev);
  }

  function drop(ev) {
    ev.preventDefault();
    console.log(ev);
    // var data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));
  }

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

          <div>
            <div id="div1" onDrop={ (event) => drop(event) } onDragOver={ (event) => allowDrop(event) }></div>
            <br />
            <img id="drag1" src={Logo} draggable="true" onDragStart={ (event) => drag(event, this) } width="69" height="69" />
          </div>

        </div>

      </div>

    </React.Fragment >
  );
}

export default ReportForm;
