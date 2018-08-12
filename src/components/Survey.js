import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Start from './Start';
import Question from './Question';
import Review from './Review';

export default class Survey extends React.Component {
  static propTypes = {
    questions: PropTypes.array,
    answers: PropTypes.object,
    saveAnswer: PropTypes.func,
    resetAnswers: PropTypes.func,
  }

  render() {
    const {
      questions,
      answers,
      saveAnswer,
      resetAnswers,
    } = this.props;
    return (
      <div className='row d-flex align-items-center' style={{ height: '100vh' }}>
        <div className='col-xl-4 offset-xl-4 col-md-6 offset-md-3 col-sm-10 offset-sm-1 py-5'>
          <h1 className='text-center pb-3 border-bottom mb-3'>Liqid Survey</h1>
          <Route exact path='/' component={Start} />
          <Route path='/question/:number' render={(props) => {
            const { number } = props.match.params;
            return <Question question={questions[number - 1]} answers={answers} total={questions.length} saveAnswer={saveAnswer} {...props} />;
          }} />
          <Route path='/review' render={props => <Review questions={questions} answers={answers} resetAnswers={resetAnswers} { ...props } />} />
        </div>
      </div>
    );
  }
}
