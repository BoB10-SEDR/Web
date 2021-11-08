import store from '@Stores/envInfo';
import { observer } from 'mobx-react';

// Custom Components
import BaseLayer from './Layer/Base';
import Layer from './Layer/Common';
import '@Styles/circle.css';

const Circle = () => {
    const { Icon, title } = store.selectedEnv;

    return (
        <div className='composition'>
            <BaseLayer>
                <Layer level={1}>
                    <Layer level={2}>
                        <Layer level={3} isLast>
                            <store.selectedEnv.Icon className='icon' />
                            <div className='title'>{title}</div>
                        </Layer>
                    </Layer>
                </Layer>
            </BaseLayer>
        </div>
    );
};

export default observer(Circle);
