import React from 'react';
import './styles.scss';

const index = ({ result, currencieName }) => {
  return (
  <div className="result">
    <p className="result__num">{result}</p>
    <p className="result__currencieName">{currencieName}</p>
  </div>
  )
}

export default index;
