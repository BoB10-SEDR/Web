import { useState } from 'react';
import Brand from '@Components/Nav/Brand';
import Divider from '@Components/Nav/Divider';
import Item from '@Components/Nav/Item';
import NavData from '@Components/Nav/NavData';

const Nav = props => {
    const [active, setActive] = useState(false);
    const brand = NavData.brand;
    const items = NavData.items;

    return (
        <ul className='nav'>
            <a className='nav-brand' href={brand.path}>
                {brand.icon}
                <span className='nav-brand-text'>{brand.title}</span>
            </a>
            <hr className='nav-divider' />
            <div className='nav-items'>
                {items.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <a href={item.path} className='nav-item'>
                                {item.icon}
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </div>
        </ul>
    );
};

export default Nav;
