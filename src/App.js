import React from 'react';
import { Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import Expenses from './containers/pages/Expenses';
import Inbox from './containers/pages/Inbox';
import Reports from './containers/pages/Reports';
import Settings from './containers/pages/Settings';
import Grandparent from './components/Grandparent';
import ReportForm from './components/ReportComponents/ReportForm';

function App() {
  return (
    <div className="app">
      <SideNav />
      <Route exact path="/" component={Inbox} />
      <Route path="/inbox" component={Inbox} />
      <Route path="/expenses" component={Expenses} />
      <Route path="/reports" component={Reports} />
      <Route path="/settings" component={Settings} />
      <Route path="/grandparent" component={Grandparent} />
      <Route path="/reports/add" component={ReportForm} />
      <Route path="/reports/edit/:id" component={ReportForm} />
    </div>
  );
}

export default App;
