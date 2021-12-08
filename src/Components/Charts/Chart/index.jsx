import { useState, useRef, useEffect, useMemo } from 'react';
import ChartJs from 'chart.js';
import { defaultConfig } from './data';

const Chart = props => {
    const { config = defaultConfig, ...rest } = props;
    const container = useRef(null);
    const [chart, setChart] = useState(null);
    const { labels, datasets } = config.data;

    const updateChart = (labels, datasets) => {
        if (!chart) return;
        chart.data.labels = labels;
        chart.data.datasets = datasets;
        chart.update();
    };

    useMemo(() => updateChart(labels, datasets), [labels, datasets]);

    useEffect(() => {
        if (container && container.current) {
            const instance = new ChartJs(container.current, config);
            setChart(instance);
        }
    }, [container]);

    return (
        <div {...rest}>
            <canvas ref={container} />
        </div>
    );
};

export default Chart;
