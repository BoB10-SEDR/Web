import '@Styles/collapseLinks.css';
import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const CollapseLinks = props => {
    const { id = '', isOpened, items = [], closeTask } = props;
    const ref = useRef();

    const close = () => {
        closeTask(state => !state);
    };

    const handleMouseDown = e => {
        if (!isOpened) return;
        if (ref.current.contains(e.target)) return;

        close();
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, [isOpened]);

    return (
        <div id={id} ref={ref}>
            <div className={'collapse ' + (isOpened ? 'open' : '')}>
                <div className='collapseInner' onClick={close}>
                    {items.map((item, index) => {
                        return (
                            <NavLink key={index} className='collapseItem' to={item.path}>
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
