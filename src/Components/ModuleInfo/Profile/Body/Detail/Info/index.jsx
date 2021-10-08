const Info = props => {
    return (
        <div className='dataInfo'>
            <div className='normal'>
                <DataBox head={'운영체제'} data={'Linux'} />
                <DataBox head={'IN/OUT'} data={'Only In'} />
                <DataBox head={'장애비율'} data={'10%'} />
            </div>
            <Description data={'Lnux 기반으로 돌아가는 라즈베리파이 모듈'} />
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
