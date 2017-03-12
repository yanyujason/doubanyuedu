import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, Button, Dimensions} from 'react-native';
import ListBook from './ListBook';

var width = Dimensions.get('window').width;

class NewBook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, coverSrc, bookTitle, author, colors} = this.props;

    const styles = StyleSheet.create({
      container: {
        width: width / 3,
        height: 230,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        padding: 5
      },
      title: {
        fontSize: 12,
        marginBottom: 5,
        color: colors.title
      },
      top: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#616161',
        borderStyle: 'solid',
        height: 20,
        width: 50,
        marginTop: 5,
      },
      topText: {
        fontSize: 10,
        textAlign: 'center',
        lineHeight: 8,
        paddingTop: 6,
        color: colors.title,
        height: 15,
      }
    });

    return (
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
        <ListBook coverSrc={coverSrc}
                  title={bookTitle}
                  author={author}
        />
        <View style={styles.top}>
          <Text style={styles.topText}>Top 30</Text>
        </View>
      </View>
    )
  }
}

export default NewBook;

