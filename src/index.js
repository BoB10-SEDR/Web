import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { IconContext } from 'react-icons';
import '@Styles/index.css';
import '@Styles/ui.css';
import Routes from '@Routes';

const Home = () => {
    return (
        <IconContext.Provider value={{ className: 'reactIcons', color: '#fff' }}>
            <Routes />
        </IconContext.Provider>
    );
};

axios.defaults.baseURL = 'http://14.138.200.178:23455/v1/';

ReactDOM.render(<Home />, document.getElementById('root'));
