import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '@Styles/index.css';

// Components
import Nav from '@Components/Nav';
import Dashboard from '@Pages/Dashboard';
import Logs from '@Pages/Logs';
import Devices from '@Pages/Logs/Devices';
import Networks from '@Pages/Logs/Networks';
import Detected from '@Pages/Logs/Detected';
import Solutions from '@Pages/Solutions';
import PenTesting from '@Pages/PenTesting';
import Card from '@Components/Card';
import LineArea from '@Components/Charts/Line';
import Radar from '@Components/Charts/Radar';
import SparkLines from '@Components/Charts/Sparklines';
import Table from '@Components/Table';

// Datas
import NavData from '@Components/Nav/Data/NavData';
import Footer from '@Components/Footer';

const Home = () => {
    const { brand, items } = NavData;

    return (
        <BrowserRouter>
            <div id='wrapper'>
                <Nav brand={brand} items={items}></Nav>
                <div id='contentWrapper'>
                    <div id='content'>
                        <Switch>
                            <Route path='/' exact component={Dashboard} />
                            <Route path='/Dashboard' component={Dashboard} />
                            <Route path='/Logs' component={Logs} />
                            <Route path='/Logs/Devices' component={Devices} />
                            <Route path='/Logs/Networks' component={Networks} />
                            <Route path='/Logs/Detected' component={Detected} />
                            <Route path='/Solutions' component={Solutions} />
                            <Route path='/PenTesting' component={PenTesting} />
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};
ReactDOM.render(<Home />, document.getElementById('root'));
