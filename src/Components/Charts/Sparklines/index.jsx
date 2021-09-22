import OneSparkLineRow from './Item';

const SparkLines = props => {
    const dummy = ['화재경보기기', '화재경보기기', '화재경보기기'];

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
                {/* TODO_P :: dummy 해제 */}
                {dummy.map(e => (
                    <OneSparkLineRow name={e} />
                ))}
            </tbody>
        </table>
    );
};

export default SparkLines;
