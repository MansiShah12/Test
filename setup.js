import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './source/Store';

class Setup extends Component {

    constructor() {
      super();
      this.state = {
        store: configureStore().store
      };
    }

    render() {
       return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
        
      );
    }
  }


export default Setup;