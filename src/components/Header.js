import React from 'react'

import './Header.css'

export default function Header({ text, children }) {
    return (
        
        <header>
            {/* <h1>
                { text }
            </h1> */}
            <nav>
                {/* ul>li*3 */}
                <ul>
                    <li>
                        <img src="https://cdn.auth0.com/blog/react-js/react.png" className="imgIcon"/>
                    </li>
                    <li>ReactJS</li>
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/768px-Git_icon.svg.png" className="imgIcon"/>
                    </li>
                    <li><a href="https://github.com/pedrovanzo/react-proto" target="blank">Github - pedrovanzo/react-proto</a></li>
                </ul>
            </nav>
            { children }
        </header>
    );
}