import { observer } from 'mobx-react';
import store from '@Stores/envInfo';

const Item = props => {
    const { id, Icon, title, devices } = props;

    const handleClick = () => {
        store.setEnv(id, devices);
    };

    return (
        <li className={`textNavItem ${store.selectedEnvId === id ? 'active' : ''}`} onClick={handleClick}>
            <Icon className='icon' size='20' />
            <span className='title'>{title}</span>
            <span className='count'>{devices.length}</span>
        </li>
    );
};

export default observer(Item);
