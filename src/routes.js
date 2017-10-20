import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import RadioPage from './components/RadioPage/RadioPage';
import SplashPage from './components/SplashPage/SplashPage';
import MagPage from './components/MagPage/MagPage';
import PressPage from './components/PressPage/PressPage';
import NotFoundPage from './components/NotFoundPage';


const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="home" component={HomePage} />
		<Route path="radio" component={RadioPage} />
		<Route path="magazines" component={MagPage} />
		<Route path="press" component={PressPage} />
		<Route path="*" component={NotFoundPage} />
	</Route>
);

export default routes;
