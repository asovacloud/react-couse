import React from 'react';

import './row.css';

const Row = ({ left, right }) => {
    return (
        <div className="row mb2 info-box">
            <div className="col-md-6 info-box__col1">
                { left }
            </div>
            <div className="col-md-6 info-box__col2">
                { right }
            </div>
        </div>
    );
};

export default Row;
