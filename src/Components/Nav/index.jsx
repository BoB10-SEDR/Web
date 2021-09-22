import { Link, NavLink, useLocation } from 'react-router-dom';
import Item from '@Components/Nav/Item';
import NavData from '@Components/Nav/NavData';

const Nav = () => {
    const brand = NavData.brand;
    const items = NavData.items;

    return (
        <ul className='nav'>
            <Link className='navBrand' to={brand.path}>
                {brand.icon}
                <span>{brand.title}</span>
            </Link>
            <hr className='navDivider navXmargin' />
            {items.map(item => {
                return <Item item={item} />;
            })}
        </ul>
    );
};

export default Nav;
