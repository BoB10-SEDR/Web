import React, { useEffect } from 'react';
import Chart from 'chart.js';

const Bar = props => {
    const isHorizontal = props.isHorizontal;
    const { id, data, options } = props;
    const chartRef = React.createRef();

    const config = {
        type: isHorizontal ? 'horizontalBar' : 'bar',
        data: data,
        options: options,
    };

    useEffect(() => {
        const myChartRef = chartRef.current.getContext('2d');
        new Chart(myChartRef, config);
    }, []);

    return (
        <div id='barChartArea'>
            <canvas id={id} ref={chartRef} />
        </div>
    );
};

export default Bar;
