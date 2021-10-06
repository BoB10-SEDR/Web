const DummyCardEx = props => {
    const { width = '100%', height, children } = props;
    return <div style={{ position: 'relative', width: width, height: height }}>{children}</div>;
};

export default DummyCardEx;
