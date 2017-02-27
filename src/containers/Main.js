import React, { Component } from 'react';
// import { Link } from 'react-router';
import NavLink from './NavLink';


export default class Main extends Component {
    // constructor() {
    //     super();
    //     let role = window.localStorage.getItem('rr_login');
    //     this.showResults = role === 'admin';
    // }
    // getInitialState() {
    //     return {
    //         showResults: false
    //     };
    // }
    // componentWillUnmount() {
    //     let role = window.localStorage.getItem('rr_login');
    //     // let showResults = null;
    //     let showResults = role === 'admin';
    //     this.setState({ showResults });
    // }
    render() {
        console.log('props', this.props);
        return (
            <div className='container'>
                <ul>
                    <li><NavLink onlyActiveOnIndex={true} to='/'>Home</NavLink></li>
                    <li><NavLink to='/admin'>Admin</NavLink></li>
                    {/*{ this.showResults ? <li><NavLink to='/admin'>Admin</NavLink></li> : null }*/}
                    {/*{ this.state.showResults && <li><NavLink to='/admin'>Admin</NavLink></li> }*/}
                    <li><NavLink to='/list'>List</NavLink></li>
                    <li><NavLink to='/login'>Log in</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )

    }
}