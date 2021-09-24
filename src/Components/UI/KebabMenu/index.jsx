import '@Styles/ui.css';
import { GoKebabVertical } from 'react-icons/go';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const KebabMenu = props => {
    const [dropped, setDropped] = useState(false);
    let result;

    const handleDropped = () => {
        setDropped(!dropped);
    };

    return (
        <div className='kebab'>
            <div className='kebabToggle' onClick={handleDropped}>
                <GoKebabVertical color='#4e73df' />
            </div>
        </div>
    );
};

export default KebabMenu;
