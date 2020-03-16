import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers';
import { alertActions } from '../actions';
import { TransactionPage } from '../TransactionPage';

class App extends React.Component {
   

  render() {
    const { alert } = this.props;
    return (
      
             
            <Router history={history}>
              <Switch>
                  
                <Route path="/" component={TransactionPage} />
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
           
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
