import React from 'react';
import ReactDOM from 'react-dom';
import '@Styles/index.css';
import '@Styles/Nav.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '@Components/Nav';

const Home = () => {
    return <Nav />;
};

ReactDOM.render(<Home />, document.getElementById('root'));
