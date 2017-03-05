import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, ScrollView} from 'react-native';
import NewBook from './NewBook'

class NewBooks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{marginTop: 10}}>
        <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    automaticallyAdjustContentInsets={false}
        >
          <NewBook title="本月畅销"
                   coverSrc={require('../../public/img/cover-1.jpg')}
                   bookTitle="book-1"
                   author="author-1"
                   colors={{background: "#F8F3F0", title:"#FCA467"}}
          />
          <NewBook title="本月好评"
                   coverSrc={require('../../public/img/cover-2.jpg')}
                   bookTitle="book-1"
                   author="author-1"
                   colors={{background: "#F1F6F2", title:"#7DC189"}}
          />
          <NewBook title="本月新作"
                   coverSrc={require('../../public/img/cover-3.jpg')}
                   bookTitle="book-1"
                   author="author-1"
                   colors={{background: "#EEF6F9", title:"#66ABD6"}}
          />
        </ScrollView>
      </View>
    )
  }
}


export default NewBooks;