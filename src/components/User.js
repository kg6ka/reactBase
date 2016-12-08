import React, { PropTypes, Component } from 'react'

export default class User extends Component {
    render() {
        const { name } = this.props;
        return <div>
            <p>{name !== 'Anonymus' ? 'Привет' + {name} : 'Привет'}</p>
        </div>
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired
};