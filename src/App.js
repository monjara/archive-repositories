import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Home, About, Contact} from './pages';
import {Nav} from "./layout";

function App() {
    return (
        <Router>
            <Nav/>
            <Switch>
                <Router path='/about'>
                    <About/>
                </Router>
                <Router path='/contact'>
                    <Contact/>
                </Router>
                <Router path='/'>
                    <Home/>
                </Router>
            </Switch>
        </Router>
    );
}

export default App;
