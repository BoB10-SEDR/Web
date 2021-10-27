import { forwardRef } from 'react';

const CustomGridItem = forwardRef((props, ref) => {
    const { style, className, children, ...rest } = props;

    return (
        <div className={`env ${className}`} style={style} ref={ref} {...rest}>
            {children}
        </div>
    );
});

export default CustomGridItem;
