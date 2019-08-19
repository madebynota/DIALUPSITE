import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'
import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import MagPage from './components/MagPage/MagPage';
import RadioPage from './components/RadioPage/RadioPage';
import BlogPage from './components/BlogPage/BlogPage';
import SplashPage from './components/SplashPage/SplashPage';
import PressPage from './components/PressPage/PressPage';
import NotFoundPage from './components/NotFoundPage';

// const redirect = () => <Redirect to="http://www.espn.com"/>

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={SplashPage} />
		<Route path="home" component={HomePage} />
		<Route path="magazines" component={MagPage} />
		<Route path="radio" component={RadioPage} />
		<Route path="press" component={PressPage} />
		<Route path="blog" component={BlogPage} />
		<Route path="*" component={NotFoundPage} />
	</Route>
);

export default routes;
