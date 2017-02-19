import React, { Component } from 'react';
import { Link } from 'react-router';

export default class List extends Component {
    render() {
        return (
            <div>
                <h2>List</h2>
                <div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3> Список жанров </h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <ul className='list'>
                                <li className='list__item'>
                                    <Link to='/detail/house/'>House</Link>
                                </li>
                                <li className='list__item'>
                                    <Link to='/detail/dnb/'>Drum and bass</Link>
                                </li>
                                <li className='list__item'>
                                    <Link to='/detail/hip-hop/'>Hip-hop</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-12'>
                            <ul className='list'>
                                <li className='list__item'>
                                    <Link to='/list/house/'>new House</Link>
                                </li>
                                <li className='list__item'>
                                    <Link to='/list/dnb/'>new Drum and bass</Link>
                                </li>
                                <li className='list__item'>
                                    <Link to='/list/hip-hop/'>new Hip-hop</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}