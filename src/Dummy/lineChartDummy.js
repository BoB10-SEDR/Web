export const lineChartDummy = {
    labelName: 'Earnings',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    data: [0, 50000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],

    unitCallback: (value, index, values) => {
        return '$' + value.toLocaleString();
    },

    labelCallback: (tooltipItem, chart) => {
        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
        return datasetLabel + ': $' + tooltipItem.yLabel.toLocaleString();
    },

    chartID: 'lineChart',
};
