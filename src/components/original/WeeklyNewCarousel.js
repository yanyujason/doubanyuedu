import React from 'react'
import { StyleSheet, View, ScrollView, Dimensions }  from 'react-native';
import WeeklyNewBook from './WeeklyNewBook';
import PageControl from 'react-native-page-control';

var width = Dimensions.get('window').width;

const WeeklyNewCarousel = React.createClass({
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

  _renderCarouselBooks(weeklyNewBooks) {
    return weeklyNewBooks.map((weeklyNewBook, index) => {
      return <WeeklyNewBook key={index}
                            imageSrc={weeklyNewBook.imageSrc}
                            bookTitle={weeklyNewBook.bookTitle}
                            bookAuthor={weeklyNewBook.bookAuthor}
                            bookDesc={weeklyNewBook.bookDesc}
      />
    });
  },

  render() {
    const styles = StyleSheet.create({
      view: {
        height: 150,
        marginTop: 10
      },
      pageControl: {
        marginTop: 10
      }
    });

    const weeklyNewBooks = [
      {imageSrc: require('../../../public/img/cover-1.jpg'), bookTitle: 'bookTitle-1', bookAuthor: 'book arthur - 1', bookDesc: 'This book is awesome. It is about a very sad story. A boy was falling love with a girl. Then they died at the same day.'},
      {imageSrc: require('../../../public/img/cover-2.jpg'), bookTitle: 'bookTitle-2', bookAuthor: 'book arthur - 2', bookDesc: 'This book is awesome. It is about a very sad story. A boy was falling love with a girl. Then they died at the same day.'},
      {imageSrc: require('../../../public/img/cover-3.jpg'), bookTitle: 'bookTitle-3', bookAuthor: 'book arthur - 3', bookDesc: 'This book is awesome. It is about a very sad story. A boy was falling love with a girl. Then they died at the same day.'},
      {imageSrc: require('../../../public/img/cover-4.jpg'), bookTitle: 'bookTitle-4', bookAuthor: 'book arthur - 4', bookDesc: 'This book is awesome. It is about a very sad story. A boy was falling love with a girl. Then they died at the same day.'},
      {imageSrc: require('../../../public/img/cover-1.jpg'), bookTitle: 'bookTitle-5', bookAuthor: 'book arthur - 5', bookDesc: 'This book is awesome. It is about a very sad story. A boy was falling love with a girl. Then they died at the same day.'},
    ];

    return (
      <View style={styles.view}>
        <ScrollView pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    automaticallyAdjustContentInsets={false}
                    onScroll={this.onScroll}
                    scrollEventThrottle={16}>
          {this._renderCarouselBooks(weeklyNewBooks)}
        </ScrollView>
        <PageControl
          styles={styles.pageControl}
          numberOfPages={weeklyNewBooks.length}
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

export default WeeklyNewCarousel;