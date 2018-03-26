import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
