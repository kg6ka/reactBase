import React, { Component, PropTypes } from 'react'

export default class Form extends Component {
    constructor() {
        super();
        let self = this;
        self.handleSubmit = self.handleSubmit.bind(self);
    }
    handleSubmit(e) {
        e.preventDefault();
        const value = e.target.elements[0].value.toLowerCase();
        this.context.router.push(`/list/${value}`);
    }
    componentDidMount() {
        console.log(this.props.route);
        this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    }
    routerWillLeave() {
        let answer = window.confirm('Вы уверены?');
        if (!answer) return false;
        // return 'Вы уверены?'
    }
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>Раздел /</div>
                <form className='col-md-4' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='List details'/>
                    <button type='submit'>Перейти</button>
                </form>
            </div>
        )
    }
}

Form.contextTypes = {
    router: PropTypes.object.isRequired
};