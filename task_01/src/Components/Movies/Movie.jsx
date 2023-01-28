import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        let { img, name } = this.props.movie;
        return (
            <div className="col-md-3">
                <img src={`assets/img/${img}`} className='w-100' alt="movie picture" />
                <h2 className='text-center py-3'>{name}</h2>
            </div>
        )
    }
}
