import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
            <header>
                <ul id="lang">
                    <li id="lang_kr">
                        <a>Korean</a>
                    </li>
                    <li id="lang_jp">
                        <a>Japanese</a>
                    </li>
                </ul>
                <div id="header">
                    <p id="logotype">
                        <a>DesignStudio9F</a>
                    </p>
                    <p id="logomark">
                        <img width="178" height="22"></img>
                    </p>
                </div>
            </header>
        )
    }
}

export default Header;