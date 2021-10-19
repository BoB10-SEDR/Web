import React from 'react';
import ReactDOM from 'react-dom';
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
ReactDOM.render(<Home />, document.getElementById('root'));
