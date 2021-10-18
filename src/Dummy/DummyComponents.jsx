export const DummyCircle = props => {
    const { color = '#FFF', size = '15px', style = {} } = props;

    return (
        <div
            className='dummyCircle'
            style={{ ...style, width: size, height: size, borderRadius: '100%', backgroundColor: color }}
        />
    );
};
