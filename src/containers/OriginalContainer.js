import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as OriginalAction from '../actions/OriginalAction';

import Original from '../components/original/Original';

function mapStateToProps(state) {
  return {
    originalInfo: state.originalInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    originalActions: bindActionCreators(OriginalAction, dispatch)
  };
}

const OriginalContainer = connect(mapStateToProps, mapDispatchToProps)(Original);
export default OriginalContainer;