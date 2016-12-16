import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './containers/Main';
import App from './containers/mainApp';
import Detail from './containers/Detail';
import Admin from './containers/Admin';
import List from './containers/List';
import Release from './containers/Release';
import NotFound from './containers/NotFound';

export const routes = (
    <div>
        <Route path='/' component={Main}>
            <IndexRoute component={App} />
            <Route path='/detail/:detail' component={Detail} >
                <Route path='/detail/:detail/:release' component={Release} />
            </Route>
            <Route path='/admin' component={Admin} />
            <Route path='/list' component={List} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
);