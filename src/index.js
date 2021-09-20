import React from 'react';
import ReactDOM from 'react-dom';
import '@Styles/index.css';

// Components
import Card from '@Components/Card';
import LineArea from '@Components/Charts/Line';

const Home = () => {
    return (
        <div className='main'>
            <div id='bodySection'>
                <Card title='라인 그래프'>
                    <LineArea />
                </Card>
            </div>
        </div>
    );
};
ReactDOM.render(<Home />, document.getElementById('root'));
