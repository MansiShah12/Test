/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MainStackNavigator  from './Navigation'
//import {createAppContainer} from 'react-navigation'

//const AppContainer = createAppContainer(MainStackNavigator)

type Props = {};
export default class App extends Component<Props> {
  render() {
    console.log("in Apppppppppppp")

    return  <MainStackNavigator/>
    
  }
}


