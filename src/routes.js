import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import RadioPage from './components/RadioPage/RadioPage';
import SplashPage from './components/SplashPage/SplashPage';
import MagPage from './components/MagPage/MagPage';
import StorePage from './components/StorePage/StorePage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={SplashPage} />
		<Route path="home" component={HomePage} />
		<Route path="radio" component={RadioPage} />
		<Route path="magazines" component={MagPage} />
		<Route path="store" component={StorePage} />
		<Route path="*" component={NotFoundPage} />
	</Route>
);

export default routes;
