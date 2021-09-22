import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '@Styles/index.css';
import '@Styles/Nav.css';

import Nav from '@Components/Nav';
import Dashboard from '@Pages/Dashboard';
import Logs from '@Pages/Logs';
import Solutions from '@Pages/Solutions';
import PenTesting from '@Pages/PenTesting';

// Components
import Card from '@Components/Card';
import LineArea from '@Components/Charts/Line';

const Home = () => {
    return (
        <BrowserRouter>
            <Nav></Nav>
            <Switch>
                <Route path='/' exact component={Dashboard} />
                <Route path='/Logs' component={Logs} />
                <Route path='/Solutions' component={Solutions} />
                <Route path='/PenTesting' component={PenTesting} />
            </Switch>
        </BrowserRouter>
    );
};
ReactDOM.render(<Home />, document.getElementById('root'));
