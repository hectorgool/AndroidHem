/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class AndroidHem extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Search' };
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*justifyContent: 'center',*/
    /*alignItems: 'center',*/
    /*backgroundColor: '#F5FCFF',*/
  },
});

AppRegistry.registerComponent('AndroidHem', () => AndroidHem);
