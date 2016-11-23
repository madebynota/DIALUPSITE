import React from 'react';
import ReactDOM from 'react-dom';
import SiteRoutes from './components/SiteRoutes';

window.onload = () => {
  ReactDOM.render(<SiteRoutes/>, document.getElementById('main'));
};