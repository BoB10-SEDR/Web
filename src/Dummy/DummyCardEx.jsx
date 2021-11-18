const DummyCardEx = props => {
    const { width = '100%', height, children, overflow = 'scroll' } = props;
    return <div style={{ position: 'relative', width: width, height: height, overflow: overflow }}>{children}</div>;
};

export default DummyCardEx;
