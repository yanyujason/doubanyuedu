import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, Button, Dimensions} from 'react-native';

import ListBook from './ListBook';

var width = Dimensions.get('window').width;

class FreeWorks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>免费作品</Text>
        <View style={styles.listBooks}>
          <View style={styles.listBook}>
            <ListBook coverSrc={require('../../../public/img/cover-1.jpg')}
                      title="title-1"
                      author="author-1"
            />
          </View>
          <View style={styles.listBook}>
            <ListBook coverSrc={require('../../../public/img/cover-2.jpg')}
                      title="title-2"
                      author="author-2"
            />
          </View>
          <View style={styles.listBook}>
            <ListBook coverSrc={require('../../../public/img/cover-3.jpg')}
                      title="title-3"
                      author="author-3"
            />
          </View>
        </View>
        <View style={styles.showMore}>
          <Text style={styles.showMoreText}>查看更多</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 260,
    backgroundColor: 'white',
    marginTop: 10,
    padding: 5,
    marginBottom: 50
  },
  listBooks: {
    flex: 1,
    flexDirection: 'row'
  },
  listBook: {
    width: width / 3 - 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  title: {
    color: '#414141',
    fontSize: 16
  },
  showMore: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#616161',
    borderStyle: 'solid',
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    width: width / 3,
    height: 30,
    marginHorizontal: width / 3
  },
  showMoreText: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 14,
    color: '#97AEB6'
  }
});

export default FreeWorks;