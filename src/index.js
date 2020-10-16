import React from 'react';
import ReactDOM from 'react-dom'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { HooksApp } from './HooksApp';

ReactDOM.render(
  <CounterWithCustomHook/>,
  document.querySelector('#root')
)