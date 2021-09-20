import React from 'react';
import ReactDOM from 'react-dom';
import '@Styles/index.css';
import '@Styles/Nav.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '@Components/Nav';

// Components
import Card from '@Components/Card';
import LineArea from '@Components/Charts/Line';

const Home = () => {
    return <div>Hello World!</div>;
};
ReactDOM.render(<Home />, document.getElementById('root'));
