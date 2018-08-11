import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.object,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    value: '',
  }

  input() {
    const {
      type,
      placeholder,
      name,
      value,
    } = this.props;

    return <input
      type={type}
      className='form-control'
      placeholder={placeholder}
      name={name}
      defaultValue={value}
      ref={(el) => { this.inputEl = el; }}
    />;
  }

  radio() {
    const { options, name } = this.props;
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
              defaultValue={key}
              // checked={ open.value === value }
              ref={(el) => { this.inputEl = el; }}
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
      defaultValue={value}
      ref={(el) => { this.inputEl = el; }}
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
