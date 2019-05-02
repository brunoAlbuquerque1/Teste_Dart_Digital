import React, { Component } from 'react';
import { Root } from 'native-base'

import AuthSwitchNavigator from "./src/navigators/AppSwitchNavigator";



export default class App extends Component {
  render() {
    return (

      <Root>
        <AuthSwitchNavigator />
      </Root>

    );
  }
}

