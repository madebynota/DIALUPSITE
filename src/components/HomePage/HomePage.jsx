import React from 'react';
import { Link } from 'react-router';
import NonSafariHomePage from './NonSafariHomePage';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <NonSafariHomePage />
            </div>
        );
    }
}

export default HomePage;