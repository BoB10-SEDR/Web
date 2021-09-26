import React, { useEffect } from 'react';
import Chart from 'chart.js';

const Pie = props => {
    const { id, data, options } = props;
    const chartRef = React.createRef();

    const config = {
        type: 'doughnut',
        data: data,
        options: options,
    };

    useEffect(() => {
        const myChartRef = chartRef.current.getContext('2d');
        new Chart(myChartRef, config);
    }, []);

    return (
        <div id='pieChartArea'>
            <canvas id={id} ref={chartRef} />
        </div>
    );
};

export default Pie;
