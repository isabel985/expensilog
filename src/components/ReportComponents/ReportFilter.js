import React, { useContext } from 'react';
import { ReportContext } from '../../containers/pages/ReportContext';

const ReportFilter = (props) => {
  const { state, dispatch } = useContext(ReportContext);

  // if state.selectedFilters includes props.children, return 'checked'. if not, return an empty string
  const check = () => {
    if (state.selectedFilters.includes(props.children.toLowerCase())) {
      return ' checked '
    } else {
      return ''
    }
  }


  return (
    <div className={`filter-checkbox ${props.type}`}>
      <div className='origin'>
        from ReportFilter
        </div>
      <input type='checkbox' id={props.id} onClick={props.onClick} checked={check()} />
      <label htmlFor={props.id}>{props.children}</label>
    </div>
  );
}

export default ReportFilter;