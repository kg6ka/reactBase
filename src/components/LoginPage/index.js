import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../../actions/UserActions';

export class LoginPage extends Component {
    /*constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }*/
    handleSubmit(e) {
        e.preventDefault();
        this.props.actions.login({name: e.target.elements[0].value});
        /*const login = e.target.elements[0].value;
        window.localStorage.setItem('rr_login', login);

        if (login === 'admin') {
            this.context.router.push('/admin')
        } else {
            this.context.router.push('/')
        }*/
    }
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>Пожалуйста, введите логин:</div>
                <form className='col-md-4' onSubmit={::this.handleSubmit}>
                    <input type='text' placeholder='log in'/>
                    <button type='submit'>Войти</button>
                </form>
            </div>
        )
    }
}

/*LoginPage.contextTypes = {
    router: PropTypes.object.isRequired
};*/

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)