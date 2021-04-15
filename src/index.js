import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { data } from './data';
import { addPost } from './data';

ReactDOM.render(<App data={data} addPost={addPost} />, document.getElementById("root"));

reportWebVitals();