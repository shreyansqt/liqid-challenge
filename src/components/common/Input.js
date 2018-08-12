import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.object,
    defaultValue: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onChange: PropTypes.func,
  }

  handleChange(event) {
    const { type, onChange } = this.props;
    let { value } = event.target;

    if (type === 'number') {
      value = parseInt(value, 10);
    }

    if (onChange) {
      onChange(value);
    }
  }

  input() {
    const {
      type,
      placeholder,
      value,
      name,
    } = this.props;

    return <input
      type={type}
      className='form-control'
      placeholder={placeholder}
      name={name}
      value={value.toString()}
      onChange={this.handleChange.bind(this)}
    />;
  }

  radio() {
    const { options, name, value } = this.props;
    return <div className='d-flex justify-content-around'>
      {
        Object.keys(options).map((key) => {
          const label = options[key];
          return <div className='form-check form-check-inline' key={key}>
            <input
              className='form-check-input'
              type='radio'
              name={name}
              id={`${name}-${key}`}
              value={key}
              checked={ key === value }
              onChange={this.handleChange.bind(this)}
            />
            <label className='form-check-label ml-1' htmlFor={`${name}-${key}`}>
              {label}
            </label>
          </div>;
        })
      }
    </div>;
  }

  select() {
    const {
      placeholder,
      options,
      name,
      value,
    } = this.props;
    return <select
      className='custom-select'
      name={name}
      value={value}
      onChange={this.handleChange.bind(this)}
    >
      <option value='' disabled>{placeholder}</option>
      {
        Object.keys(options).map(key => <option key={key} value={key}>{options[key]}</option>)
      }
    </select>;
  }

  render() {
    const { type, className } = this.props;
    return <div className={className}>
      { this[type] ? this[type]() : this.input() }
    </div>;
  }
}
