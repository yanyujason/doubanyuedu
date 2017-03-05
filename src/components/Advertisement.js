import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

class Advertisement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Image style={styles.image} resizeMode='cover' source={require('../../public/img/book_ads.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: null,
    height: 100,
    margin: 5
  }
});

export default Advertisement;