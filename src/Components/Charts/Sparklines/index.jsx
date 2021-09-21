import OneSparkLineRow from './Item';

const SparkLines = props => {
    const dummy = [];

    return (
        <table id='sparkLineChartArea'>
            <thead>
                <tr>
                    <th>Source</th>
                    <th>Total</th>
                    <th>Trend</th>
                </tr>
            </thead>

            <tbody>
                <OneSparkLineRow name='화재경보기기' />
                <OneSparkLineRow name='에어컨' />
                <OneSparkLineRow name='테이블' />
            </tbody>
        </table>
    );
};

export default SparkLines;
