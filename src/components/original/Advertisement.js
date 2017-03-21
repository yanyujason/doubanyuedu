import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

const Advertisement = ({source}) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: source}}/>
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    width: null,
    height: 100,
    margin: 5
  }
});

export default Advertisement;