import React, {Component} from 'react';
import {StyleSheet,Dimensions, Image, Text, View} from 'react-native';


var width = Dimensions.get('window').width;
class ListBook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {coverSrc, title, author} = this.props;
    return(
      <View>
        <View style={styles.image}>
          <Image style={styles.thumbnail} source={coverSrc} resizeMode='cover'/>
        </View>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
        <Text style={styles.author} numberOfLines={1} ellipsizeMode='tail'>{author}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0.5,
      height: 0.5
    },
    shadowOpacity: 0.3,
  },
  thumbnail: {
    width: width / 3 - 20,
    height: 130
  },
  title: {
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#616161',
    width: 90,
    fontSize: 12
  },
  author: {
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#B0B0B0',
    width: 90,
    fontSize: 12
  }
});

export default ListBook;