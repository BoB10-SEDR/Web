import '@Styles/ui.css';
import { GoKebabVertical } from 'react-icons/go';
import { useState } from 'react';
import CollapseLinks from '@Components/CollapseLinks';

const KebabMenu = props => {
    const items = props.items;
    const [expanded, setExpanded] = useState(false);

    const handleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='kebabMenu' onClick={handleExpanded}>
            <GoKebabVertical color='white' />
            <CollapseLinks id='kebab' isOpened={expanded} closeTask={setExpanded} items={items} />
        </div>
    );
};

export default KebabMenu;
