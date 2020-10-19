import React from 'react';
import ReactDOM from 'react-dom'
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { HooksApp } from './HooksApp';

ReactDOM.render(
  <FormWithCustomHook/>,
  document.querySelector('#root')
)