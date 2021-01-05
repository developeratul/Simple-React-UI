import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Team from './Team'
import Project from './Project'
import Start from './Start'
import Error from './Error'

const Nav = () => {
  return (
    <>
      <Router>
        <nav>
          <div id="Container">
            <div id="NavContentWrapper">
              <h2 id="NavTitle">Brigrate</h2>
              <ul id="NavLinks">
                <li>
                  <NavLink exact activeClassName="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/service">
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/team">
                    Team
                  </NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/project">
                    Project
                  </NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/start">
                    Get Started
                  </NavLink>
                </li>
              </ul>
              <div id="Burger">
                <i className="fas fa-bars"></i>
                <ul id="NavLinksMobile">
                  <li>
                    <NavLink exact activeClassName="active" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact activeClassName="active" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact activeClassName="active" to="/service">
                      Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact activeClassName="active" to="/team">
                      Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact activeClassName="active" to="/project">
                      Project
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact activeClassName="active" to="/start">
                      Get Started
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/start" component={Start} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  )
}
export default Nav
