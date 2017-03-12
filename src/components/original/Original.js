import React, {Component} from 'react';
import {ScrollView,StyleSheet,Text} from 'react-native';

import SearchBox from './SearchBox';
import WeeklyNew from './WeeklyNew';
import FreeWorks from './FreeWorks';
import NewBooks from './NewBooks';
import FinalistBook from './FinalistBook';

class Original extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <FinalistBook />
        <NewBooks />
        <WeeklyNew />
        <FreeWorks />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abc',
    paddingTop: 53
  }
});

export default Original;