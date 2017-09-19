import React from 'react';

import Ticker from './Ticker';

import styles from './styles/FinancePage.css';
import classNames from 'classnames/bind';
import Utils from '../../utils.js';

let cx = classNames.bind(styles);

class FinancePage extends React.Component {
    
    render() {
        return (
            <div styles={cx('body')} id="body">
                <div className = "row">
                    <div className = "col-md-12">
                        <Ticker styles={cx('ticker')}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FinancePage;
