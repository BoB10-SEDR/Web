import { randomRangeIntegerArray } from '@Functions/';

// Pie Chart Example

const rangeConfig = {
    range: [0, 100],
    isLeftIncluded: true,
    isRightIncluded: true,
};

const data = {
    labels: ['Direct', 'Referral', 'Social'],
    datasets: [
        {
            data: randomRangeIntegerArray(rangeConfig, 3),
            backgroundColor: ['#8f75da', '#1cc88a', '#36b9cc'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
            hoverBorderColor: 'rgba(234, 236, 244, 1)',
        },
    ],
};

const options = {
    maintainAspectRatio: false,
    tooltips: {
        backgroundColor: 'rgb(255,255,255)',
        bodyFontColor: '#858796',
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
    },
    legend: {
        display: false,
    },
    cutoutPercentage: 80,
};

const result = {
    pieId: 'myPieChart',
    pieData: data,
    pieOptions: options,
};

export default result;
