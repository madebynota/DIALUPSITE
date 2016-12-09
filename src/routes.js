import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import MagazinesPage from './components/MagazinesPage';
import ChatPage from './components/ChatPage/ChatPage'
import NotFoundPage from './components/NotFoundPage';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="magazines" component={MagazinesPage} />
		<Route path="chat" component={ChatPage} />
		<Route path="*" component={NotFoundPage} />
	</Route>
);

export default routes;
