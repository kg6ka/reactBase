import React, { Component } from 'react';


export default class ListDetails extends Component {
    render() {
        console.log('ListDetails', this.props);
        return (
            <div>List Details</div>
        )
    }
}

// User.propTypes = {
//     name: PropTypes.string.isRequired
// };