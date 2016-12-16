import React, { Component } from 'react';
import { Link } from 'react-router';
/*import Admin from '../containers/Admin';
import List from '../containers/List';
import Detail from '../containers/Detail';
import App from '../containers/mainApp';*/


export default class Main extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1)
        }
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }*/
    render() {
       /* let Child;

        switch (this.state.route) {
            case '/home': Child = App; break;
            case '/detail': Child = Detail; break;
            case '/admin': Child = Admin; break;
            case '/admin/list': Child = List; break;
            default: Child = App;
        }*/


        return (
            <div className='container'>
                <ul>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/list'>List</Link></li>
                </ul>
                {/*<Child />*/}
                {this.props.children}
            </div>
        )

    }
}