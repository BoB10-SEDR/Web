const Status = props => {
    const { status = 'PENDING' } = props;

    const color = getColor(status);

    return (
        <div id='status' status={status} style={{ background: color }}>
            {status}
        </div>
    );
};

export default Status;

const getColor = (status = '') => {
    switch (status.toLocaleLowerCase()) {
        case 'processing':
            return '#8A63E0';
        case 'pending':
            return '#EBAE3F';
        case 'unblocked':
            return '#DC5251';
        case 'blocked':
            return '#6ECE6A';
        default:
            return '#6ECE6A';
    }
};
