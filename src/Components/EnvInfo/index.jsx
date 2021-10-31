import { useEffect } from 'react';
import { observer } from 'mobx-react';
import '@Styles/envInfo.css';
import envStore from '@Stores/envInfo';
import mapStore from '@Stores/envMap';
import ListMap from './ListMap';
import GraphicMap from './GraphicMap';
import envInfo from '@Dummy/envInfo';

const EnvInfo = () => {
    useEffect(() => {
        envStore.setSelectedEnv(envInfo[0]);
    }, []);

    const isGrahpicMode = mapStore.isGraphicMode();

    return (
        <div id='envInfo'>
            <GraphicMap show={isGrahpicMode} />
            <ListMap show={!isGrahpicMode} />
        </div>
    );
};

export default observer(EnvInfo);
