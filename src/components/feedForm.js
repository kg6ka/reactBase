import React, { Component, PropTypes } from 'react';

export default class FormFeed extends Component {
    render() {
        return (
            <form noValidate="novalidate" onSubmit={this.submit.bind(this)}>

            </form>
        )
    }
}