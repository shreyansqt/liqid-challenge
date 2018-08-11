import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Review extends React.Component {
  static propTypes = {
    questions: PropTypes.array,
    answers: PropTypes.object,
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

  render() {
    const { questions, answers } = this.props;
    return (
      <div>
        <p>Thanks for completing the survey! Please review your answers below:</p>
        <ol>
          {
            questions.map((question) => {
              const { number, text } = question;
              const answer = answers[number];
              return <li key={number}>
                {text}:
                <strong className='ml-1'>{this.renderAnswer(question, answer)}</strong>
              </li>;
            })
          }
        </ol>
        <nav className='d-flex justify-content-between pt-3 border-top mt-3'>
          <Link
            to={`/question/${questions.length}`}
            className='btn btn-light'
          >
            Back
          </Link>
          <Link to='/' className='btn btn-primary'>Submit Answers</Link>
        </nav>
      </div>
    );
  }
}
