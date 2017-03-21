import _ from 'lodash';

const OriginalInfoHelper = {
  _getBookInfo: (books) => {
    return books.map((book) => {
      return {
        imageSrc: book['cover_url'],
        bookTitle: book['title'],
        bookAuthor: book['author']
      }
    });
  },

  getFinalistBook: (sourceData) => {
    const data = _.clone(sourceData);
    return {
      advertisement: {
        imageSource: data[0]['payload']['links'][0]['img']
      }
      //booksCarousel: this._getBookInfo(data[1]['payload']['works_list'])
    };
  }

};
export default OriginalInfoHelper;