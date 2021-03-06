import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actionCreators from '../actions/actionCreators';
import Survey from './Survey';
import questions from '../data/questions';

function mapStateToProps(state) {
  return {
    questions,
    answers: state.answers,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Survey));

export default App;
