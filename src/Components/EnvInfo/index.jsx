import { observer } from 'mobx-react';
import '@Styles/envInfo.css';
import store from '@Stores/envMap';
import ListMap from './ListMap';
import GraphicMap from './GraphicMap';

const EnvInfo = () => {
    return <div id='envInfo'>{store.mode === 'graphic' ? <GraphicMap /> : <ListMap />}</div>;
};

export default observer(EnvInfo);
