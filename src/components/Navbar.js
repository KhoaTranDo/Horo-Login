import React, { Component } from 'react'
import { FaAlignRight} from "react-icons/fa";
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleTooggle = () =>{
        this.setState({isOpen:!this.state.isOpen});
    };
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                    <h1> HORO </h1>
                    <button type="button" className='nav-btn'
                                onClick={this.handleTooggle}>
                            <FaAlignRight className='nav-icon' />
                    </button>
                    </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                </ul>
                </div>

            </nav>
        );
    }
}
