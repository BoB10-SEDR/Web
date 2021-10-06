import '@Styles/nav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import Item from '@Components/Nav/Item';
import Button from '@Components/UI/Button';

const Nav = props => {
    const { brand, items } = props;

    return (
        <ul className='nav'>
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
    return items.map(item => {
        return <Item type={item.type} item={item} />;
    });
};

export default Nav;
