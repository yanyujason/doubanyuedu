import React, {Component} from 'react';
import {TextInput,StyleSheet} from 'react-native';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'dasdad' };
  }

  render() {
    return(
      <TextInput
        style={{height: 40, width: 300,  borderColor: 'red', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

export default SearchBox;