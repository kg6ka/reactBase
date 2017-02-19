import React, { Component } from 'react';

export default class Detail extends Component {
    render() {
        let template;
        console.log('Details', this.props.params);
        {/* если параметр release есть - покажи дочерний компонент */}
        if (this.props.params.release) {
            template = (
                <div className='row'>
                    <h3 className='col-md-12'>{this.props.params.detail}</h3>
                    <div className='col-md-12'>{this.props.children}</div>
                </div>
            )
        } else {
            template = (
                <div className='row'>
                    <h3 className='col-md-12'>{this.props.params.detail}</h3>
                    <div className='col-md-12'>Здесь будет список релизов</div>
                </div>
            )
        }

        return template;
    }
}

/*
Detail.propTypes = {
    children: PropTypes.string.isRequired
};*/
