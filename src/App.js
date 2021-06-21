import "./styles.css";
import React from "react";
import MomentCustom from "./momentCustom";
import Header from "./header";
import Timeline from "./timeline/timeline";
import Footer from "./Footer";
// How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div className="ParentContainer">
        <Router>
          <div>
            <div className="mainContainer header">
              <div className="headerContainer fixed-width mx-auto">
                <ul className="mainNav margin-0 padding-10 unstyled-list d-flex justify-center">
                  <li className="nav-child">
                    <NavLink exact to="/" activeClassName="selectedNav">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-child">
                    <NavLink to="/timeCalculator" activeClassName="selectedNav">
                      Time Calculator
                    </NavLink>
                  </li>
                  <li className="nav-child">
                    <NavLink to="/timeline" activeClassName="selectedNav">
                      Timeline creator
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
            <div className="componentCreator">
              <Switch>
                <Route exact path="/">
                  <Header title="Timeline Creator" />
                  <Timeline />
                </Route>
                <Route path="/timeCalculator">
                  <MomentCustom />
                </Route>
                <Route path="/timeline">
                  <Header title="Timeline Creator" />
                  <Timeline />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
        {/* <Footer></Footer> */}
      </div>
    );
  }
}
export default App;
