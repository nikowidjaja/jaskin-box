import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const NoMatch = () => <div > 404 Not Found </div>;

class Main extends Component {
    render() {
        return (
            <Router basename="/" >
                <div id="Main" className="main-panel" >
                    <div className="content-container" >
                        <Switch >
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route component={NoMatch} />
                        </Switch >
                    </div>
                </div >
            </Router>
        );
    }
}

export default Main;