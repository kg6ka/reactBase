import React, { Component } from 'react';
import Form from '../components/FormRedirect';

export default class Admin extends Component {
    static onEnter() {
        /*const login = window.localStorage.getItem('rr_login');
        if (login !== 'admin') {
            replace('/');
        }*/
    }
    render() {
        return (
            <div>
                <h2>Admin</h2>
                <Form route={this.props.route}/>
            </div>
        )
    }
}
