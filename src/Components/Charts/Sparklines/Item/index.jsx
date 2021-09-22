import '@Styles/chart.css';
import Chart from 'react-apexcharts';
import { getSparkLineConfig } from '../data';
import oneSparkLineRowDummy from '@Dummy/oneSparkLineRowDummy.json';

const OneSparkLineRow = ({ name }) => {
    const sparklineHeight = '40';

    // TODO :: dummy 해제
    const { value = 0, seriesName = '' } = oneSparkLineRowDummy;
    const { options = [], series = [] } = getSparkLineConfig(oneSparkLineRowDummy);

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
