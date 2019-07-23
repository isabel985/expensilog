import React from 'react';
import '../styles/secondarySideNav.css';

const SecondarySideNav = props => {
  return (
    <React.Fragment>
      <input id='secondarySideNavCollapse' className='toggle secondary-side-nav' type="checkbox" />
      <aside>

        <label htmlFor='secondarySideNavCollapse' className='rotate-arrow'>
          <i class="fas fa-chevron-left"></i>
        </label>
        {props.children}
      </aside>
    </React.Fragment>
  );
}

export default SecondarySideNav;