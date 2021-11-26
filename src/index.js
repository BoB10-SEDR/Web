import React from 'react';
import ReactDOM from 'react-dom';
import { IconContext } from 'react-icons';
import '@Styles/index.css';
import '@Styles/ui.css';
import Routes from '@Routes';
import Modal from 'react-modal';

const Home = () => {
    return (
        <IconContext.Provider value={{ className: 'reactIcons', color: 'white' }}>
            <Routes />
        </IconContext.Provider>
    );
};

Modal.setAppElement('#root');

ReactDOM.render(<Home />, document.getElementById('root'));
