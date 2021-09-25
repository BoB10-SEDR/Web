import '@Styles/ui.css';
import { GoKebabVertical } from 'react-icons/go';
import { useState } from 'react';
import CollapseLinks from '@Components/Nav/Item/LinkItem/CollapseLinks';

const KebabMenu = props => {
    const items = props.items;
    const [expanded, setExpanded] = useState(false);

    const handleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='kebab'>
            <div className='kebabToggle' onClick={handleExpanded}>
                <GoKebabVertical color='#4e73df' />
            </div>
            {expanded && <CollapseLinks setClose={setExpanded} items={items}></CollapseLinks>}
        </div>
    );
};

export default KebabMenu;
