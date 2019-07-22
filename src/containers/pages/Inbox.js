import React from 'react';
import Alert from '../../components/InboxComponents/Alert';
import InvalidReport from '../../components/InboxComponents/InvalidReport';
import Notification from '../../components/InboxComponents/Notification';
import OverdueReport from '../../components/InboxComponents/OverdueReport';
import '../../styles/pages.css';
import '../../styles/collapsible.css'

const Inbox = () => {
  return (
    <main>
      <header>
        <h1>Inbox</h1>
      </header>
      <div className='content-wrapper'>
        <Alert />
        <InvalidReport />
        <Notification />
        <OverdueReport />
      </div>
    </main>
  );
}

export default Inbox;