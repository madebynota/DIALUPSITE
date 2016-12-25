import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import MagPage from './components/MagPage/MagPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="magazines" component={MagPage} />
		<Route path="*" component={NotFoundPage} />
	</Route>
);

export default routes;
