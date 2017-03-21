import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, Dimensions} from 'react-native';
import BookCarousel from './BookCarousel';
import Advertisement from './Advertisement';

const FinalistBook = ({ info }) => {
  return (
    <View style={styles.container}>
      <Advertisement source={info.advertisement.imageSource}/>
      <BookCarousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 330,
    marginTop: 10,
    backgroundColor: 'white'
  }
});

export default FinalistBook;