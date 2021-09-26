import { NavLink } from 'react-router-dom';

const CollapseLinks = props => {
    const { items = [], setClose } = props;

    return (
        <div className='navCollapse'>
            <div className='navCollapseInner' onClick={() => setClose(p => !p)}>
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
