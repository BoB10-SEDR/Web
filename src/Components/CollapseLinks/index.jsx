import '@Styles/collapseLinks.css';
import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const CollapseLinks = props => {
    const { id = '', isOpened, items = [] } = props;

    return (
        <div id={id}>
            <div className={'collapse ' + (isOpened ? 'open' : '')}>
                <div className='collapseInner'>
                    {items.map((item, index) => {
                        return (
                            <NavLink exact key={index} className='collapseItem' to={item.path}>
                                {item.title}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CollapseLinks;
