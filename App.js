import React from 'react';
import { StatusBar, View } from 'react-native';
import { KeepAwake } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <KeepAwake />
        <StatusBar hidden={true} />
      </View>
    );
  }
}

