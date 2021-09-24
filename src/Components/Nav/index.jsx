import '@Styles/nav.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Item from '@Components/Nav/Item';

const Nav = props => {
    const { brand, items } = props;

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
