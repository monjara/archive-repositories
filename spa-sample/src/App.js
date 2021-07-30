import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Home, About, Contact} from './pages';
import {Nav,Footer} from "./layout";

function App() {
    return (
        <div className='flex flex-col h-screen'>
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
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
