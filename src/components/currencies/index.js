import React from 'react';
import data from '../../data/currencies';
import Result from '../result';
import './styles.scss';
import { useState } from 'react';

const index = () => {

  const [currencieName, setCurrencieName] = useState('United States Dollar');
  const [convertRate, setConvertRate] = useState(1.09);

  const handleChange = (event) => {
    setConvertRate(event.target.getAttribute('convertrate'));
    setCurrencieName(event.target.getAttribute('name'));
  };

  const currenciesData = data;
  return (
    <div className="currencies">
      <h1 className="currencies__title">Currencies</h1>
      <div className="currencies__box">
        {currenciesData.map((elt, id) => {
        return <a onClick={handleChange} key={id} ><p convertrate={elt.rate} name={elt.name} className='currencies__name'>{elt.name}</p></a>
      })}
      </div>
      <Result result={Number(convertRate).toFixed(2)} currencieName={currencieName} />
    </div>
  )
}

export default index;
