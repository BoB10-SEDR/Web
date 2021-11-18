import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { IconContext } from 'react-icons';
import '@Styles/index.css';
import '@Styles/ui.css';
import Routes from '@Routes';
import Modal from 'react-modal';

const Home = () => {
    return (
        <IconContext.Provider value={{ className: 'reactIcons', color: '#fff' }}>
            <Routes />
        </IconContext.Provider>
    );
};

Modal.setAppElement('#root');

ReactDOM.render(<Home />, document.getElementById('root'));
