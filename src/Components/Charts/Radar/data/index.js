export const fixedRadarData = {
    borderWidth: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.08)',
    borderColor: 'red',
    pointBackgroundColor: 'red',
    pointBorderColor: 'red',
    pointHoverBackgroundColor: 'red',
    pointHoverBorderColor: 'red',
    labelFontSize: 16,
};

export const getRadarOptions = labelCallback => {
    return {
        maintainAspectRatio: false,

        legend: {
            display: false,
        },

        scale: {
            gridLines: {
                // display: false,
                color: 'rgba(255, 0, 0, 0.08)',
            },
            angleLines: {
                // display: false,
            },
            pointLabels: {
                fontSize: 14,
                fontColor: 'rgba(255,255,255,0.5)',
            },
            ticks: {
                backdropColor: 'transparent',
                // beginAtZero: true,
                max: 100,
                min: 0,
                stepSize: 20,
            },
        },
        tooltips: {
            backgroundColor: 'rgb(255,255,255)',
            bodyFontColor: '#858796',
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 16,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            callbacks: {
                label:
                    labelCallback ??
                    ((tooltipItem, chart) => {
                        const datasetLabel = chart.labels[tooltipItem.index] ?? '';
                        // const dataValue = chart.datasets[0].data[tooltipItem.index].toLocaleString();
                        return datasetLabel; //+ ': ' + dataValue;
                    }),
            },
        },
    };
};
