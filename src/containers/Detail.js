import React, { Component } from 'react';

export default class Detail extends Component {
    render() {
        console.log(this.props.params.release);
        return (
            <div className='row'>
                <h3 className='col-md-12'>{this.props.params.genre}</h3>
                <div className='col-md-12'>Здесь будет список релизов</div>
            </div>
        )
    }
}

/*
Detail.propTypes = {
    children: PropTypes.string.isRequired
};*/
