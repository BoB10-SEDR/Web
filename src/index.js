import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';
import { IconContext } from 'react-icons';
import '@Styles/index.css';
import '@Styles/ui.css';
import Routes from '@Routes';
import Modal from 'react-modal';

const Home = () => {
    return (
        <SWRConfig value={{ refreshInterval: 60000, revalidateOnFocus: false }}>
            <IconContext.Provider value={{ className: 'reactIcons', color: 'white' }}>
                <Routes />
            </IconContext.Provider>
        </SWRConfig>
    );
};

Modal.setAppElement('#root');

ReactDOM.render(<Home />, document.getElementById('root'));
