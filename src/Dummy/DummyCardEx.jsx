const DummyCardEx = props => {
    const { width = '100%', height, children } = props;
    return <div style={{ width: width, height: height }}>{children}</div>;
};

export default DummyCardEx;
