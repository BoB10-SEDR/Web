import React, { useEffect } from 'react';
import Chart from 'chart.js';

const Bar = props => {
    const { data, options } = props;
    const chartRef = React.createRef();

    const config = {
        type: 'bar',
        data: data,
        options: options,
    };

    useEffect(() => {
        const myChartRef = chartRef.current.getContext('2d');
        new Chart(chartRef, config);
    }, []);

    return (
        <div id='BarChartArea'>
            <canvas id='myChart' ref={this.chartRef} />
        </div>
    );
};

export default Bar;
