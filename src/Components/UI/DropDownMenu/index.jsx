import '@Styles/ui.css';
import { GoKebabVertical } from 'react-icons/go';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const DropDownMenu = props => {
    const [dropped, setDropped] = useState(false);
    let result;

    const handleDropped = () => {
        setDropped(!dropped);
    };

    return (
        <div className='dropDownMenu' onClick={handleDropped}>
            <GoKebabVertical />
        </div>
    );
};

export default DropDownMenu;
