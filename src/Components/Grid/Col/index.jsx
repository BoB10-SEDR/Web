const Col = props => {
    const { xs = '', sm = '', md = '', lg = '', xl = '' } = props;
    const sizes = {
        xs: xs,
        sm: sm,
        md: md,
        lg: lg,
        xl: xl,
    };

    const classList = [];

    for (let size in sizes) {
        let value = sizes[size];

        if (value) {
            if (size == 'xs') {
                classList.push(`col-${value}`);
            } else {
                classList.push(`col-${size}-${value}`);
            }
        }
    }

    if (classList.length === 0) {
        classList.push('col');
    }

    return <div className={classList.join(' ')}>{props.children}</div>;
};

export default Col;
