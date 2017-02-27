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
import requireAuthentication from './containers/AuthenticatedComponent';

export const routes = (
    //onEnter={Admin.onEnter}
    <div>
        <Route path='/' component={Main}>
            <IndexRoute component={requireAuthentication(Home)}/>
            <Route path='/detail/:detail' component={Detail} >
                <Route path='/detail/:detail/:release' component={Release} />
            </Route>
            <Route path='/admin' component={requireAuthentication(Admin)} />
            <Route path='/list' component={requireAuthentication(List)} />
            <Route path='/list/:detail' component={requireAuthentication(ListDetails)}>
                <Route path='/list/:detail/:edit' component={requireAuthentication(ListDetails)}/>
            </Route>
            <Route path='/login' component={LoginPage}/>
        </Route>
        <Route path='*' component={requireAuthentication(NotFound)} />
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
