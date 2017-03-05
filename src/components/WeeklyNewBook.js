import React, {Component} from 'react';
import {StyleSheet, Image, Text, View,Dimensions} from 'react-native';

var width = Dimensions.get('window').width;
class WeeklyNewBook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {imageSrc, bookTitle, bookAuthor, bookDesc} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image style={styles.thumbnail} source={imageSrc}/>
        </View>
        <View style={styles.bookContent}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'> {bookTitle}</Text>
          <Text style={styles.author} numberOfLines={1} ellipsizeMode='tail'> {bookAuthor}</Text>
          <Text style={styles.desc} numberOfLines={4} ellipsizeMode='tail'> {bookDesc}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 130,
    marginBottom: 20
  },
  bookContent: {
    width: width * 0.7 - 10,
    paddingLeft: 10
  },
  image: {
    width: width * 0.3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0.5,
      height: 0.5
    },
    shadowOpacity: 0.3
  },
  thumbnail: {
    width: null,
    height: 130
  },
  title: {
    color: '#2F2F2F',
    fontSize: 14,
    marginBottom: 5
  },
  author: {
    color: '#CACACA',
    fontSize: 14,marginBottom: 5
  },
  desc: {
    color: '#CACACA',
    fontSize: 14
  }
});

export default WeeklyNewBook;