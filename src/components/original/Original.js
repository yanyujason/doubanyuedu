import React, {Component} from 'react';
import {ScrollView,StyleSheet,Text} from 'react-native';
import _ from 'lodash';

import SearchBox from './SearchBox';
import WeeklyNew from './WeeklyNew';
import FreeWorks from './FreeWorks';
import NewBooks from './NewBooks';
import FinalistBook from './FinalistBook';
import OriginalInfoHelper from '../../helpers/OriginalInfoHelper';

class Original extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.originalActions.getOriginPageInfo();
  }

  render() {
    const originalInfo = this.props.originalInfo.originalInfo;

    if(_.isEmpty(originalInfo)) {
      return null;
    }
    else {
      const finalistBookInfo = OriginalInfoHelper.getFinalistBook(originalInfo['widget_list']);

      return (
        <ScrollView style={styles.container}>
          <FinalistBook info={finalistBookInfo}/>
          <NewBooks />
          <WeeklyNew />
          <FreeWorks />
        </ScrollView>
      );
    }
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