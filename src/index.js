import React from 'react';
import ReactDOM from 'react-dom';
import '@Styles/index.css';
import '@Styles/Nav.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Nav from '@Components/Nav';

// Components
import Card from '@Components/Card';
import LineArea from '@Components/Charts/Line';
import Radar from '@Components/Charts/Radar';
import SparkLines from '@Components/Charts/Sparklines';

const Home = () => {
    return (
        <div id='bodySection'>
            <Card title='차트'>
                {/* <LineArea /> */}
                {/* <Radar /> */}
                {/* <SparkLines /> */}
            </Card>
        </div>
    );
};
ReactDOM.render(<Home />, document.getElementById('root'));
