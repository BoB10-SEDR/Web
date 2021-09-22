import '@Styles/chart.css';
// import Chart from 'react-apexcharts';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { getSparkLineConfig } from '../data';
import { sampleData } from '@Dummy/oneSparkLineRowDummy.js';

const OneSparkLineRow = ({ name }) => {
    // TODO_P :: dummy 해제
    const value = 12345;

    // TODO_P :: dummy(sampleData) 해제, random Color 해제
    return (
        <tr className='oneSparkLineRow'>
            <td className='description'>{name}</td>
            <td className='totalValue'>{`${value.toLocaleString()}`}</td>
            <td className='sparkline'>
                <Sparklines data={sampleData} limit={20}>
                    <SparklinesLine
                        color={`#${Math.round(Math.random() * 0xffffff).toString(16)}`}
                        style={{ strokeWidth: '3', fill: 'none' }}
                    />
                    <SparklinesSpots />
                </Sparklines>
            </td>
        </tr>
    );
};

export default OneSparkLineRow;
