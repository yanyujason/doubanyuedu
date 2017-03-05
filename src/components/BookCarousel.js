'use strict';

import React from 'react'
import { StyleSheet, View, ScrollView, Dimensions }  from 'react-native';
import CarouselBookItem from './CarouselBookItem';
import PageControl from 'react-native-page-control';

var width = Dimensions.get('window').width;

const BookCarousel = React.createClass({
  getInitialState() {
    return {
      currentPage: 0
    };
  },

  onScroll(event) {
    let offsetX = event.nativeEvent.contentOffset.x;
    let pageWidth = width;
    this.setState({
      currentPage: Math.floor((offsetX - pageWidth / 3) / pageWidth) + 1
    })
  },

  _renderCarouselBooks(carouselBooks) {
    return carouselBooks.map((carouselBook, index) => {
      return <CarouselBookItem key={index}
                               imageSrc={carouselBook.imageSrc}
                               bookTitle={carouselBook.bookTitle}
                               bookAuthor={carouselBook.bookAuthor}/>
    });
  },

  render() {
    const styles = StyleSheet.create({
      view: {
        height: 200
      }
    });

    const carouselBooks = [
      {imageSrc: require('../../public/img/cover-1.jpg'), bookTitle: 'bookTitle-1', bookAuthor: 'book arthur - 1'},
      {imageSrc: require('../../public/img/cover-1.jpg'), bookTitle: 'bookTitle-2', bookAuthor: 'book arthur - 2'},
      {imageSrc: require('../../public/img/cover-1.jpg'), bookTitle: 'bookTitle-3', bookAuthor: 'book arthur - 3'},
      {imageSrc: require('../../public/img/cover-1.jpg'), bookTitle: 'bookTitle-4', bookAuthor: 'book arthur - 4'},
      {imageSrc: require('../../public/img/cover-1.jpg'), bookTitle: 'bookTitle-5', bookAuthor: 'book arthur - 5'},
      {imageSrc: require('../../public/img/cover-1.jpg'), bookTitle: 'bookTitle-6', bookAuthor: 'book arthur - 6'},
      {imageSrc: require('../../public/img/cover-1.jpg'), bookTitle: 'bookTitle-7', bookAuthor: 'book arthur - 7'},
      {imageSrc: require('../../public/img/cover-1.jpg'), bookTitle: 'bookTitle-8', bookAuthor: 'book arthur - 8'},
      {imageSrc: require('../../public/img/cover-1.jpg'), bookTitle: 'bookTitle-9', bookAuthor: 'book arthur - 9'},
    ];

    const numberOfPages = Math.ceil(carouselBooks.length / 3);

    return (
      <View style={styles.view}>
        <ScrollView pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    automaticallyAdjustContentInsets={false}
                    onScroll={this.onScroll}
                    scrollEventThrottle={16}>
          {this._renderCarouselBooks(carouselBooks)}
        </ScrollView>
        <PageControl
          numberOfPages={numberOfPages}
          currentPage={this.state.currentPage}
          hidesForSinglePage={true}
          pageIndicatorTintColor='#C5C5C5'
          currentPageIndicatorTintColor='#6AC8AE'
          indicatorStyle={{borderRadius: 5}}
          currentIndicatorStyle={{borderRadius: 5}}
          indicatorSize={{width:8, height:8}}
        />
      </View>
    )
  }
});

export default BookCarousel;

