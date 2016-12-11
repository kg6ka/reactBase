import React, { Component } from 'react';

export default class Detail extends Component {
    render() {
        console.log(this.props);
        return <div>
            <h2>Details</h2>
        </div>
    }
}

/*
Detail.propTypes = {
    children: PropTypes.string.isRequired
};*/
