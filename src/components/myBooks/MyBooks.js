import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class MyBooks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>My Books Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abc',
    paddingTop: 20
  },
  text: {
    padding: 80
  }
});

export default MyBooks;