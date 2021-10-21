import '@Styles/nav.css';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import store from '@Stores/nav';
import Item from '@Components/Nav/Item';

const Nav = props => {
    const { brand, items } = props;

    return (
        <ul className={'nav' + (store.open ? ' opened' : '')}>
            <NavHeader brand={brand} />
            <hr className='navDivider navXmargin' />
            <NavBody items={items} />
        </ul>
    );
};

const NavHeader = props => {
    const { brand } = props;

    return (
        <Link id='navHeader' to={brand.path}>
            {brand.icon}
            <span>{brand.title}</span>
        </Link>
    );
};

const NavBody = props => {
    const { items } = props;
    return items.map((item, index) => {
        return <Item key={index} type={item.type} item={item} />;
    });
};

export default observer(Nav);
