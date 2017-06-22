import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import RadioPage from './components/RadioPage/RadioPage';
import FinancePage from './components/FinancePage/FinancePage';
import MagPage from './components/MagPage/MagPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="radio" component={RadioPage} />
		<Route path="finance" component={FinancePage} />
		<Route path="magazines" component={MagPage} />
		<Route path="*" component={NotFoundPage} />
	</Route>
);

export default routes;