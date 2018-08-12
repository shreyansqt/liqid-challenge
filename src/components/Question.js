import React from 'react';
import PropTypes from 'prop-types';

import Input from './common/Input';

export default class Question extends React.Component {
  static propTypes = {
    question: PropTypes.object,
    answers: PropTypes.object,
    total: PropTypes.number,
    saveAnswer: PropTypes.any,
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props) {
    super(props);
    const { question, answers } = props;
    this.state = {
      answer: answers[question.number] || '',
    };
  }

  handleChange(answer = '') {
    this.setState({ answer });
  }

  handleSubmit(event) {
    const {
      saveAnswer,
      question,
      answers,
      total,
    } = this.props;
    const { number } = question;
    const { answer } = this.state;
    event.preventDefault();
    saveAnswer(number, answer);
    this.context.router.history.push(total === number ? '/review' : `/question/${number + 1}`);
    this.handleChange(answers[number + 1]);
  }

  handleBack() {
    const {
      question,
      answers,
    } = this.props;
    const { number } = question;
    this.context.router.history.push(number === 1 ? '/' : `/question/${number - 1}`);
    this.handleChange(answers[number - 1]);
  }

  render() {
    const {
      question,
      total,
    } = this.props;

    const {
      number,
      text,
      type,
      placeholder,
      options,
    } = question;

    const { answer } = this.state;

    return (
      <form onSubmit={this.handleSubmit.bind(this)} className='pt-3 text-center'>
        <small className='text-muted text-uppercase'>{number}/{total}</small>
        <h3 className='mt-2 mb-5'>{text}</h3>
        <Input
          className='my-5'
          type={type}
          placeholder={placeholder}
          name={`answer-${number}`}
          options={options}
          value={answer}
          onChange={this.handleChange.bind(this)}
        />
        <nav className='d-flex justify-content-between pt-3 border-top mt-3'>
          <button
            type='button'
            className='btn btn-light'
            onClick={this.handleBack.bind(this)}
          >
            Back
          </button>
          <input type='submit'
            className='btn btn-primary'
            disabled={!answer || answer.length <= 0}
            value={number === total ? 'Review Answers' : 'Next'}
          />
        </nav>
      </form>
    );
  }
}
