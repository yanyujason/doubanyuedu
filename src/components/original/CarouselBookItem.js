import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, Dimensions} from 'react-native';

var width = Dimensions.get('window').width;

class CarouselBookItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {imageSrc, bookTitle, bookAuthor} = this.props;

    return (
      <View style={styles.book}>
        <View style={styles.image}>
          <Image style={styles.thumbnail}
                 resizeMode='cover'
                 source={imageSrc}/>
        </View>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail'>
          {bookTitle}
        </Text>
        <Text style={styles.author} numberOfLines={1} ellipsizeMode='tail'>
          {bookAuthor}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  book: {
    width: width / 3,
    padding: 5
  },
  image: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0.5,
      height: 0.5
    },
    shadowOpacity: 0.3,
    margin: 5
  },
  thumbnail: {
    width: null,
    height: 130
  },
  name: {
    marginTop: 5,
    fontSize: 12,
    color: '#616161',
    width: 90,
    paddingLeft: 5,
    paddingRight: 5
  },
  author: {
    marginTop: 5,
    fontSize: 12,
    color: '#B0B0B0',
    width: 90,
    paddingLeft: 5,
    paddingRight: 5
  }
});


export default CarouselBookItem;