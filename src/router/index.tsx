import React from 'react';

import { MembersTableComponent, MemberPageComponent } from '../components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/:id' component={MemberPageComponent} />
        <Route path='/' component={MembersTableComponent} />
      </Switch>
    </Router>
  );
};
