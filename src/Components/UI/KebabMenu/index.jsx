import '@Styles/ui.css';
import { GoKebabVertical } from 'react-icons/go';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const KebabMenu = props => {
    const [expanded, setExpanded] = useState(false);
    let result;

    const handleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='kebab'>
            <div className='kebabToggle' onClick={handleExpanded}>
                <GoKebabVertical color='#4e73df' />
            </div>
        </div>
    );
};

export default KebabMenu;
