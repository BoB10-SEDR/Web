const Info = props => {
    const { info } = props;
    const { os, inout, abnormalRate, description } = info;

    return (
        <div className='dataInfo'>
            <div className='normal'>
                <DataBox head={'운영체제'} data={os} />
                <DataBox head={'IN/OUT'} data={inout} />
                <DataBox head={'장애비율'} data={abnormalRate} />
            </div>
            <Description data={description} />
        </div>
    );
};

const DataBox = props => {
    const { head, data } = props;

    return (
        <div className='dataBox'>
            <div className='head'>{head}</div>
            <div className='data'>{data}</div>
        </div>
    );
};

const Description = props => {
    const { data } = props;

    return (
        <div className='description'>
            <div className='head'>모듈 상세 설명</div>
            <div className='data'>{data}</div>
        </div>
    );
};

export default Info;
