const Status = props => {
    const { status = 'PENDING', isMin = false } = props;

    const color = getColor(status);

    const statusMode = isMin ? 'statusMini' : 'status';

    return (
        <div id={statusMode} status={status} style={{ background: color }}>
            {status}
        </div>
    );
};

export default Status;

const getColor = (status = '') => {
    switch (status.toLocaleLowerCase()) {
        case '불안정':
        case '오류':
            return '#F66C6C';
        case '약함':
        case '경고':
        case 'pending':
            return '#F2B133';
        case 'unblocked':
            return '#F02632';
        case 'blocked':
        case '양호':
            return '#61CA68';
        case '정보':
            return '#727CF5';
        default:
            return '#6ECE6A';
    }
};
