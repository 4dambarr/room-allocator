import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux"
import { store } from "./Redux/store"
import { Container } from "./App"

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  rootElement
);
