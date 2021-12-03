import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Nav from '@Components/Nav';
import Dashboard from '@Pages/Dashboard';
import Details from '@Pages/Logs/Details';
import Devices from '@Pages/Logs/Devices';
import DeviceDetails from '@Pages/Logs/Devices/DeviceDetails';
import Networks from '@Pages/Logs/Networks';
import Monitoring from '@Pages/Logs/Monitoring';
import Solutions from '@Pages/Solutions';
import Inspection from '@Pages/Inspection';
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
                            <Route path='/Resources/Devices' exact component={Devices} />
                            <Route path='/Resources/Devices/Details' component={DeviceDetails} />
                            <Route path='/Resources/Networks' component={Networks} />
                            <Route path='/Solutions' component={Solutions} />
                            <Route path='/Inspection' component={Inspection} />
                            <Route path='/Resources/Details' component={Details} />
                            <Route path='/Monitoring' component={Monitoring} />
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
