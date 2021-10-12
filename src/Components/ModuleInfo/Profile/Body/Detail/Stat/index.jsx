const Stat = props => {
    const { stat } = props;
    const { totalLogs, attackRate } = stat;

    return (
        <div className='stat'>
            <div className='totalLogs'>
                <div className='head'>전체 로그 수</div>
                <div className='data'>{totalLogs.toLocaleString()}</div>
            </div>
            <div className='attackRate'>
                <div className='head'>공격 로그 비율</div>
                <div className='data'>{`${attackRate}%`}</div>
            </div>
        </div>
    );
};

export default Stat;
