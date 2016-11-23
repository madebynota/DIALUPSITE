import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import HomePage from './HomePage';
import MagazinesPage from './MagazinesPage';

class SiteRoutes extends React.Component {
	render() {
		return (
			<Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
				<Route path="/" component={HomePage} />
				<Route path="/magazines" component={MagazinesPage} />
			</Router>
		);
	}
}

export default SiteRoutes;