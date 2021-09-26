import { NavLink } from 'react-router-dom';

const CollapseLinks = props => {
    const { isOpened, items = [], setClose } = props;

    return (
        <div className={'navCollapse ' + (isOpened ? 'open' : '')}>
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
