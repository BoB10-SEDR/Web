import '@Styles/chart.css';
import Chart from 'react-apexcharts';
import { getSparkLineConfig } from '../data';

const OneSparkLineRow = ({ name }) => {
    const sparklineHeight = '40';

    const inputData = {
        seriesName: 'Sales',

        datas: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46],
        labels: [...Array(24).keys()].map(n => `2021-09-0${n + 1}`),

        value: 123453133,
    };

    const { value = 0, seriesName = '' } = inputData;
    const { options = [], series = [] } = getSparkLineConfig(inputData);

    return (
        <tr className='oneSparkLineRow'>
            <td className='description'>{name}</td>
            <td className='totalValue'>{`${value.toLocaleString()}`}</td>
            <td className='sparkline'>
                <Chart options={options} series={series} type='area' height={sparklineHeight} />
            </td>
        </tr>
    );
};

export default OneSparkLineRow;
