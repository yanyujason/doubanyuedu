import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Original from './components/Original';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Original></Original>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abc',
    paddingTop: 20
  }
});

export default App;
