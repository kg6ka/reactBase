import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './containers/Main';
import Home from './containers/mainApp';
import Detail from './containers/Detail';
import Admin from './containers/Admin';
import List from './containers/List';
import Release from './containers/Release';
import NotFound from './containers/NotFound';
import ListDetails from './components/ListDetails';
import LoginPage from './components/LoginPage';

export const routes = (
    <div>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='/detail/:detail' component={Detail} >
                <Route path='/detail/:detail/:release' component={Release} />
            </Route>
            <Route path='/admin' component={Admin} onEnter={Admin.onEnter} />
            <Route path='/list' component={List} />
            <Route path='/list/:detail' component={ListDetails} >
                <Route path='/list/:detail/:edit' component={ListDetails} />
            </Route>
            <Route path='/login' component={LoginPage}/>
        </Route>
        <Route path='*' component={NotFound} />
    </div>
);


//checkLogin
/*
function checkLogin(nextState, replace) { //nextState, replace, callback
    const login = window.localStorage.getItem('rr_login');
    if (login !== 'admin') {
        replace('/');
    }
}*/
