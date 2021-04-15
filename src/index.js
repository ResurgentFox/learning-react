import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { data } from './data';

ReactDOM.render(<App data={data} />, document.getElementById("root"));

reportWebVitals();