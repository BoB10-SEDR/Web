import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Nav from '@Components/Nav';
import Dashboard from '@Pages/Dashboard';
import Devices from '@Pages/Resources/Environments';
import Tabs from '@Pages/Resources/Environments/Tabs';
import Monitoring from '@Pages/Monitoring';
import Solutions from '@Pages/Solutions';
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
                            <Route path='/Dashboard' component={Dashboard} />
                            <Route path='/Resources/Environments' exact component={Devices} />
                            {/* <Route path='/Resources/Bookmarks' exact component={} /> */}
                            <Route path='/Resources/Devices/Tabs' component={Tabs} />
                            {/* <Route path='/Solutions' component={} /> */}
                            <Route path='/Solutions/Settings' component={Solutions} />
                            <Route path='/Solutions/Inspection' component={Inspection} />
                            <Route path='/Monitoring' component={Monitoring} />
                            {/* <Route path='/Monitoring/Settings' component={Monitoring} /> */}
                            <Route path='/Debug' component={Debug} />
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Routes;
