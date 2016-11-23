import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './components/HomePage';
import MagazinesPage from './components/MagazinesPage';

const routes = (
	<Route path="/" component={HomePage}>
		<Route path="magazines" component={MagazinesPage}/>
	</Route>
);

export default routes;