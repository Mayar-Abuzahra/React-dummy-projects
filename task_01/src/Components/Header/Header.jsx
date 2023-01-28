import React, { Component } from 'react';
import style from './Header.module.css';

export default class Header extends Component {
    render() {
        return (
            <header className={`${style.header} vh-100 d-flex justify-content-center align-items-center text-center`}>
                <div className='content text-white'>
                    <h1>
                    Unlimited movies, TV shows, and more.
                    </h1>
                    <p>
                    Watch anywhere. Cancel anytime.
                    </p>
                </div>
            </header>
        )
    }
}
