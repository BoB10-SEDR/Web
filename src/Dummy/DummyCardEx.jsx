const DummyCardEx = props => {
    const { width = '100%', height, children, overflow = 'scroll', noRelative } = props;
    return (
        <div style={{ position: !noRelative ? 'relative' : '', width: width, height: height, overflow: overflow }}>
            {children}
        </div>
    );
};

export default DummyCardEx;
