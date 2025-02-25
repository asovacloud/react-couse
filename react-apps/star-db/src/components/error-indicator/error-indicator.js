import React from 'react';
import './error-indicator.css';

import Sum from './sun-icon.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <div className="error-indicator__holder">
                <div className="error-indicator__holder__img">
                    <img src={ Sum } alt="icon planet" />
                </div>
                <div className="error-indicator__holder__boom">BOOM!</div>
                <div className="error-indicator__holder__message">
                    something has gone terribly wrong
                </div>
                <div className="error-indicator__holder__sub-message">
                    (but we already sent droids to fix it)
                </div>
            </div>
        </div>
    );
};

export default ErrorIndicator;
