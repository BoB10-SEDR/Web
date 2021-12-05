import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Nav from '@Components/Nav';
import Dashboard from '@Pages/Dashboard';
import Devices from '@Pages/Resources/Environments';
import Tabs from '@Pages/Resources/Environments/Tabs';
import Bookmarks from '@Pages/Resources/Bookmarks';
import Monitoring from '@Pages/Monitoring';
import MonitoringSettings from '@Pages/Monitoring/Settings';
import Solutions from '@Pages/Solutions';
import SolutionsSettings from '@Pages/Solutions/Settings';
import Inspection from '@Pages/Solutions/Inspection';
import Debug from '@Pages/Debug';

// Datas
import NavData from '@Components/Nav/Data/NavData';
import Footer from '@Components/Footer';
import Header from '@Components/Header';

const Routes = () => {
    const { brand, items } = NavData;

    return (
        <BrowserRouter>
            <div id='wrapper'>
                <Nav brand={brand} items={items}></Nav>
                <div id='contentWrapper'>
                    <div id='content'>
                        <Header />
                        <Switch>
                            <Route path='/' exact component={Dashboard} />
                            <Route path='/Dashboard' exact component={Dashboard} />
                            <Route path='/Resources' exact component={Devices} />
                            <Route path='/Resources/Bookmarks' component={Bookmarks} />
                            <Route path='/Resources/Devices/Tabs' component={Tabs} />
                            <Route path='/Solutions' exact component={Solutions} />
                            <Route path='/Solutions/Settings' component={SolutionsSettings} />
                            <Route path='/Solutions/Inspection' component={Inspection} />
                            <Route path='/Monitoring' exact component={Monitoring} />
                            <Route path='/Monitoring/Settings' component={MonitoringSettings} />
                            <Route path='/Debug' exact component={Debug} />
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Routes;
