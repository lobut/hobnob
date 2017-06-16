import React from 'react';

export const Header = () => (
  <div className="container">
      <div className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a href="../" className="navbar-brand">Hob Knob</a>
          <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse" id="navbar-main">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#" id="themes">All Projects <span className="caret"></span></a>
              <ul className="dropdown-menu" aria-labelledby="themes">
                <li><a href="../default/">Default</a></li>
              </ul>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <form className="navbar-form navbar-right" role="search" _lpchecked="1">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"></input>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </li>
            <li><a href="https://wrapbootstrap.com/?ref=bsw" target="_blank">Log Out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
