var randomizeArray = function (arg) {
    var array = arg.slice();
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// data for the sparklines that appear below header area

export const getSparkLineConfig = oneRowData => {
    const { seriesName, datas = [], labels = [] } = oneRowData;

    return {
        series: [
            {
                name: seriesName,
                data: randomizeArray(datas),
            },
        ],

        options: {
            chart: {
                // id: 'spark1',
                // group: 'sparks',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
            },
            markers: {
                size: 0,
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            xaxis: {
                type: 'datetime',
                categories: labels,
            },

            colors: randomizeArray(['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800']),
            tooltip: {
                y: {
                    title: {
                        formatter: val => val,
                    },
                },
            },
        },
    };
};
