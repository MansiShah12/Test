import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './source/Store';

class Setup extends Component {

    constructor() {
      super();
    //   this.state = {
    //     isLoading: false,
    //     store: configureStore(() => this.setState({ isLoading: false })).store
    //   };
    }

    render() {
        console.log("in setUppppppp")
      return (
        <Provider store={store}>
          <App />
        </Provider>
        
      );
    }
  }


export default Setup;