import OneSparkLineRow from './Item';

const SparkLines = props => {
    const dummy = ['화재경보기기', '에어컨', '테이블'];

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
                {/* TODO :: dummy 해제 */}
                {dummy.map(e => (
                    <OneSparkLineRow name={e} />
                ))}
            </tbody>
        </table>
    );
};

export default SparkLines;
