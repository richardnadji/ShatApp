import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import styles from './ShatApp.styles';
import SignUp from './screens/SignUp';

export default class ShatApp extends Component {
  render() {
    return(
      <View style={styles.container}>
        <SignUp />
      </View>
    );
  }
}
