import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import Counter from '../components/Counter';
import * as pageActions from '../actions/PageActions';
import * as countActions from '../actions/CountActions';

class App extends Component {
    /*componentWillMount() {
        const { getPhotos } = this.props.pageActions;
        console.log(getPhotos())
    }*/
    render() {
        console.log(this.props);
        const { user, page, count } = this.props;
        const { getPhotos } = this.props.pageActions;
        const { setCount } = this.props.countActions;

        return (
            <div>
                <User name={user.name} />
                <Page photos={page.photos}
                      year={page.year}
                      getPhotos={getPhotos}
                      fetching={page.fetching}
                />
                <hr/>
                <Counter count={count.count} setCount={setCount}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page,
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch),
        countActions: bindActionCreators(countActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);