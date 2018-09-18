import React, { Component } from 'react';
import './style.css'

class Navbar extends Component {
    render () {
        return (
            <div className="navbar">
                <ul className="navbar-left">
                    <li className="link-bold"> QTemu </li>
                    <li className="link"> Create Meetup </li>
                    <li classname="link"> Explore </li>
                </ul>
                <ul className="navbar-right">
                    <li classname="link"> Login </li>
                </ul>
            </div> 
        );
    }
}

export default Navbar;