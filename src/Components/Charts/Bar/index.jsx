import React, { useEffect } from 'react';
import Chart from 'chart.js';

const Bar = props => {
    const { data, options, width, height } = props;
    const chartRef = React.createRef();

    const config = {
        type: 'bar',
        data: data,
        options: options,
    };

    useEffect(() => {
        const myChartRef = chartRef.current.getContext('2d');
        new Chart(myChartRef, config);
    }, []);

    return (
        <div id='barChartArea'>
            <canvas id='myBarChart' ref={chartRef} width={width} height={height} />
        </div>
    );
};

export default Bar;
