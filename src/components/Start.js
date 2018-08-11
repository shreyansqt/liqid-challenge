import React from 'react';
import { Link } from 'react-router-dom';

export default class Start extends React.Component {
  render() {
    return (
      <div className='text-center'>
        <p className='my-5'>To help us improve, please take a moment to answer a few questions.</p>
        <Link to='/question/1' className='btn btn-primary'>Start Survey</Link>
      </div>
    );
  }
}
