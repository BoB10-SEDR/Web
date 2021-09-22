import { Link, useLocation } from 'react-router-dom';
import NavItem from '@Components/Nav/NavItem';
import NavData from '@Components/Nav/NavData';

const Nav = () => {
    const pathName = useLocation().pathname;
    const brand = NavData.brand;
    const items = NavData.items;

    return (
        <ul className='nav'>
            <Link className='nav-brand' to={brand.path}>
                {brand.icon}
                <span className='nav-brand-text'>{brand.title}</span>
            </Link>
            <hr className='nav-divider nav-xmargin' />
            {items.map((item, index) => {
                return (
                    <Link key={index} to={item.path}>
                        <NavItem item={item} isActive={pathName === item.path ? true : false} />
                    </Link>
                );
            })}
        </ul>
    );
};

export default Nav;
