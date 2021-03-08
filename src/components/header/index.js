import React from 'react';
import './styles.scss';

const index = ({appTitle, mainCurrencie}) => {
  return (
    <div className="header">
      <h1 className="header__title">{appTitle}</h1>
      <p className="header__p">{mainCurrencie}</p>
    </div>
  )
}

export default index;
