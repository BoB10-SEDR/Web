import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '@Styles/index.css';
import '@Styles/Nav.css';

import Nav from '@Components/Nav';
import Dashboard from '@Pages/Dashboard';

const Home = () => {
    return (
        <BrowserRouter>
            <Nav></Nav>
            <Switch>
                <Route path='/' exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<Home />, document.getElementById('root'));
