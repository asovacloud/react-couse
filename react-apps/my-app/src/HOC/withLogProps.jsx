import React, { Component } from 'react';

export default function logProps(WComponent) {
    return class extends Component {
        componentWillReceiveProps(nextProps) {
            /*console.log(this.props);
            console.log(nextProps);*/
        }

        render() {
            return <WComponent {...this.props} />;
        }
    };
}
