import React from 'react';
import {Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../pages/home';
import PastLaunches from './../pages/pastLaunches';
import Rocket from '../pages/rocket';
import Dashboard from '../container/dashboard';

const Routing = () => (
    <Router>
    <Dashboard>
        <div>            
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/launches" element={<PastLaunches/>} />
                <Route exact path="/rocket/:id" element={<Rocket/>} />
                </Routes>            
        </div>
        </Dashboard>
    </Router>
);

export default Routing;
