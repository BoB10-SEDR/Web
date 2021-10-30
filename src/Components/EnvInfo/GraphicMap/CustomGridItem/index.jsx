import { forwardRef } from 'react';
import envStore from '@Stores/envInfo';
import mapStore from '@Stores/envMap';

const CustomGridItem = forwardRef((props, ref) => {
    const { env, style, className, children, ...rest } = props;

    const handleClick = () => {
        envStore.setSelectedEnv(env);
        mapStore.setMode('list');
    };

    return (
        <div className={`item ${className}`} style={style} ref={ref} {...rest} onClick={handleClick}>
            {children}
        </div>
    );
});

export default CustomGridItem;
