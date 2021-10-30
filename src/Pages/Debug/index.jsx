import Card from '@Components/Card';
import { Row, Col } from '@Components/Grid';
import Table from '@Components/Table';
import { randomRangeIntegerArray } from '@Functions/';
import '@Styles/debug.css';
import { useEffect, useState } from 'react';

const Debug = () => {
    const [interval, setIntv] = useState('');

    useEffect(() => {
        const arrLength = 10;

        const interval = setInterval(() => {
            console.log(randomRangeIntegerArray({ range: [0, 100] }, arrLength));
        }, 1000);

        setIntv(interval);
    }, []);

    const handleClick = e => {
        e.preventDefault();
        console.log('멈춰!');
        clearInterval(interval);
    };

    return (
        <div id='debug' className='page'>
            <button onClick={handleClick}>STOP</button>
        </div>
    );
};

export default Debug;
