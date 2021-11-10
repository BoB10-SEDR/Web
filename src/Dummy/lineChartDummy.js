import DummyCardSimple from './DummyCardSimple';
import { randomRangeIntegerArray } from '@Functions/';

const rangeConfig = {
    range: [0, 100000],
    isLeftIncluded: true,
    isRightIncluded: true,
};

export const lineChartDummy = {
    labelName: 'Total Log',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: randomRangeIntegerArray(rangeConfig, 12),

    unitCallback: (value, index, values) => {
        return value.toLocaleString();
    },

    labelCallback: (tooltipItem, chart) => {
        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
        return datasetLabel + ': ' + tooltipItem.yLabel.toLocaleString();
    },

    chartID: 'lineChart',
};
