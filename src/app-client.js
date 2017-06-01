import React from 'react';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap';
import { render } from 'react-dom';
import { App } from './components/App';

const AppClient = () => (
  <App />
);

window.onload = () => {
  render(<AppClient />, document.getElementById('main'));
};
