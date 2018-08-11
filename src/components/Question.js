import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from './common/Input';

export default class Question extends React.Component {
  static propTypes = {
    question: PropTypes.object,
    answer: PropTypes.string,
    total: PropTypes.number,
    saveAnswer: PropTypes.any,
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  handleSubmit(event) {
    const { saveAnswer, question, total } = this.props;
    const { number } = question;
    event.preventDefault();
    const answer = this.InputEl.inputEl.value;
    saveAnswer(number, answer);
    this.context.router.history.push(total === number ? '/review' : `/question/${number + 1}`);
  }

  render() {
    const {
      question,
      answer,
      total,
    } = this.props;

    const {
      number,
      text,
      type,
      placeholder,
      options,
    } = question;

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
          ref={(el) => { this.InputEl = el; }}
        />
        <nav className='d-flex justify-content-between pt-3 border-top mt-3'>
          <Link
            to={number === 1 ? '/' : `/question/${number - 1}`}
            className='btn btn-light'
          >
            Back
          </Link>
          <input type='submit'
            className='btn btn-primary'
            // disabled={!this.Input.input.value}
            value={number === total ? 'Review Answers' : 'Next'}
          />
        </nav>
      </form>
    );
  }
}
