import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <ul>
            <li>
                <Link to="/">Apps</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/practices">Practices</Link>
            </li>
        </ul>
    )
  }
}

export default Header;