import { observer } from 'mobx-react';
import store from '@Stores/envInfo';

const Item = props => {
    const { id, Icon, title, count, circle } = props;

    const handleClick = () => {
        store.setEnv(id, circle);
    };

    return (
        <li className={`textNavItem ${store.selectedEnv === id ? 'active' : ''}`} onClick={handleClick}>
            <Icon className='icon' size='20' />
            <span className='title'>{title}</span>
            <span className='count'>{count}</span>
        </li>
    );
};

export default observer(Item);
