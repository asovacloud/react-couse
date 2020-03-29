import React from 'react';
import PropTypes from 'prop-types';

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

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default Row;
