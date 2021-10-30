import { observer } from 'mobx-react';
import store from '@Stores/envInfo';

const Item = props => {
    const { item } = props;
    const { id, Icon, title, devices } = item;

    const handleClick = () => {
        store.setSelectedEnv(item);
    };

    return (
        <li className={`textNavItem ${store.selectedEnv.id === id ? 'active' : ''}`} onClick={handleClick}>
            <Icon className='icon' size='20' />
            <span className='title'>{title}</span>
            <span className='count'>{devices.length}</span>
        </li>
    );
};

export default observer(Item);
