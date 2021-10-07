import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CollapseLinks from '@Components/CollapseLinks';

const LinkItem = props => {
    const item = props.item;
    const isCollapsed = props.isCollapsed;
    const [expanded, setExpanded] = useState(false);
    let result;

    const handleCollapsed = () => {
        setExpanded(!expanded);
    };

    if (!isCollapsed) {
        result = (
            <li className='navItem'>
                <NavLink to={item.path}>
                    <div className='navLink '>
                        {item.icon}
                        <span>{item.title}</span>
                    </div>
                </NavLink>
            </li>
        );
    } else {
        result = (
            <li className='navItem'>
                <div className={'navLink ' + (expanded ? 'expanded' : '') + ' collapsed'} onClick={handleCollapsed}>
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                <CollapseLinks id='nav' isOpened={expanded} closeTask={setExpanded} items={item.children} />
            </li>
        );
    }
    return result;
};

export default LinkItem;
