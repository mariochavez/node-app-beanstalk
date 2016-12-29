import React from 'react';
import { Link } from 'react-router';

const Navbar = React.createClass ({
  render() {
    return <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Hellogenio</Link>
        </div>
      </div>
    </nav>;
  }
});

export default Navbar;
