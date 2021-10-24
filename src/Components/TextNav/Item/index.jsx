import store from '@Stores/envInfo';
import { observer } from 'mobx-react';

const Item = props => {
    const { id, Icon, title, count } = props;

    const handleClick = id => {
        store.setSelectedEnv(id);
    };

    return (
        <li className={`textNavItem ${store.selectedEnv === id ? 'active' : ''}`} onClick={() => handleClick(id)}>
            <Icon className='icon' size='20' />
            <span className='title'>{title}</span>
            <span className='count'>{count}</span>
        </li>
    );
};

export default observer(Item);
