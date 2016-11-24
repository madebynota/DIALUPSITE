import React from 'react';
import { Link } from 'react-router';
import LogoSection from './LogoSection';

class NonSafariHomePage extends React.Component {
    render() {
        return (
            <div>
				<h1>Non Safari Home Page</h1>
				<LogoSection />
            </div>
        );
    }
}

export default NonSafariHomePage;