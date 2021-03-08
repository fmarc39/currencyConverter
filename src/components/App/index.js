// == Import npm
import React from 'react';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';
import Header from '../header'
import Body from '../currencies'
// == Composant
const App = () => (
  <div className="app">
    <Header appTitle="Converter"
    mainCurrencie="1 euro" />
    <Body />
  </div>
);

// == Export
export default App;
