import React, { PropTypes, Component } from 'react';

import { Button } from 'react-bootstrap';

export default class Counter extends Component {
    setCount() {
        this.props.setCount(this.props.count);
    }
    render() {
        let { count } = this.props;
        return (
            <div className="counter">
                <button className="btn btn-primary" onClick={::this.setCount}>Btn {count}</button>
                <Button bsStyle="primary" onClick={::this.setCount}>Btn {count}</Button>
            </div>
        )
    }
}

Counter.propTypes = {
    count: PropTypes.number.isRequired
};