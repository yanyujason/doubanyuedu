import React, {Component} from 'react';
import {Text, View,StyleSheet} from 'react-native';
import WeeklyNewCarousel from './WeeklyNewCarousel';

class WeeklyNew extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>本周新上架</Text>
        <WeeklyNewCarousel />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: null,
    marginTop: 10,
    backgroundColor: 'white',
    padding: 5
  },
  text: {
    color: '#414141',
    fontSize: 16
  }
});

export default WeeklyNew;