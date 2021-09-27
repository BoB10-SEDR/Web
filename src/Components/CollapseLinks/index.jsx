import '@Styles/collapseLinks.css';
import { NavLink } from 'react-router-dom';

const CollapseLinks = props => {
    const { id = '', isOpened, items = [], setClose } = props;

    return (
        <div id={id}>
            <div className={'collapse ' + (isOpened ? 'open' : '')}>
                <div className='collapseInner' onClick={() => setClose(p => !p)}>
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
