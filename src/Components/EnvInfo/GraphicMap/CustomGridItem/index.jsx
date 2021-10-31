import { forwardRef } from 'react';
import envStore from '@Stores/envInfo';
import mapStore from '@Stores/envMap';

const CustomGridItem = forwardRef((props, ref) => {
    const { env, style, className, children, ...rest } = props;

    const handleClick = e => {
        mapStore.setListMode();
        envStore.setSelectedEnv(env);
    };

    return (
        <div className={`item ${className}`} style={style} ref={ref} {...rest} onClick={e => handleClick(e)}>
            {children}
        </div>
    );
});

export default CustomGridItem;
