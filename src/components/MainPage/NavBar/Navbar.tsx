import React from 'react';

export const NavBar: React.FC = () => (
    <nav>
    <div className="nav-wrapper teal darken-1 px3">
      <a href="/" className="brand-logo"> Welcome, userName</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Cabinet</a></li>
        <li><a href="/">Tests</a></li>
        <li><a href="/">Exit</a></li>
      </ul>
    </div>
  </nav>
)