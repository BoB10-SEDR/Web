import { NavLink } from 'react-router-dom';

const CollapseLinks = props => {
    const items = props.items;

    return (
        <div className='navCollapse'>
            <div className='navCollapseInner'>
                {items.map((item, index) => {
                    return (
                        <NavLink key={index} className='navCollapseItem' to={item.path}>
                            {item.title}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default CollapseLinks;
