import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import configStore from './stores/store';
import OriginalContainer from './containers/OriginalContainer';
import BookShop from './components/bookShop/BookShop';
import Categories from './components/categories/Categories';
import MyBooks from './components/myBooks/MyBooks';
import Local from './components/local/Local';
import BookApi from './api/DoubanAPI';
const RouterWithRedux = connect()(Router);
const store = configStore();

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const TabIcon = ({ selected, title }) => {
      return (
        <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
      );
    };

    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="navigationBar" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
              <Scene key="original" component={OriginalContainer} title="原创" icon={TabIcon}/>
              <Scene key="bookShop" component={BookShop} title="书店" icon={TabIcon}/>
              <Scene key="categories" component={Categories} title="分类" icon={TabIcon}/>
              <Scene key="myBooks" component={MyBooks} title="我的" icon={TabIcon}/>
              <Scene key="local" component={Local} title="本地" icon={TabIcon}/>
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

export default App;
