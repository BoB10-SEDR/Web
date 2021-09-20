export const fixedRadarData = {
    borderWidth: 2,
    backgroundColor: 'rgba(78, 115, 223, 0.05)',
    borderColor: 'rgba(78, 115, 223, 1)',
    pointBackgroundColor: 'rgba(78, 115, 223, 1)',
    pointBorderColor: 'rgba(78, 115, 223, 1)',
    pointHoverBackgroundColor: 'rgba(78, 115, 223, 1)',
    pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
};

export const getRadarOptions = labelCallback => {
    return {
        // maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0,
            },
        },

        legend: {
            display: false,
        },

        tooltips: {
            backgroundColor: 'rgb(255,255,255)',
            bodyFontColor: '#858796',
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            callbacks: {
                label: labelCallback,
            },
        },
    };
};
