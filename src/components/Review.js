import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Review extends React.Component {
  static propTypes = {
    questions: PropTypes.array,
    answers: PropTypes.object,
    resetAnswers: PropTypes.func,
  }

  renderAnswer(question, answer) {
    switch (question.type) {
      case 'radio':
        return question.options[answer];
      case 'select':
        return question.options[answer];
      default:
        return answer;
    }
  }

  handleSubmit() {
    const { resetAnswers } = this.props;
    resetAnswers();
  }

  render() {
    const { questions, answers } = this.props;
    return (
      <div>
        <p>Thanks for completing the survey! Please review your answers below:</p>
        <ul className='list-unstyled'>
          {
            questions.map((question) => {
              const { number, text } = question;
              const answer = answers[number];
              return <li key={number} className='d-flex flex-align-center'>
                {number})&nbsp;
                {text}&nbsp;
                <strong>{this.renderAnswer(question, answer)}</strong>
                <Link className='ml-auto' to={`/question/${number}`}><small>Edit</small></Link>
              </li>;
            })
          }
        </ul>
        <nav className='d-flex justify-content-between pt-3 border-top mt-3'>
          <Link
            to={`/question/${questions.length}`}
            className='btn btn-light'
          >
            Back
          </Link>
          <Link to='/' onClick={this.handleSubmit.bind(this)} className='btn btn-primary'>Submit Answers</Link>
        </nav>
      </div>
    );
  }
}
