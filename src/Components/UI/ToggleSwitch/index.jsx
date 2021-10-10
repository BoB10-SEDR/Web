import { useState } from 'react';

const ToggleSwitch = props => {
    const { id, onToggle = () => {}, isToggled } = props;
    const [toggle, setToggle] = useState(isToggled);

    const handleChange = () => {
        setToggle(!toggle);
        onToggle();
    };

    return (
        <div className='toggleSwitch'>
            <input type='checkbox' id={id} onChange={handleChange} checked={toggle} />
            <label for={id}></label>
        </div>
    );
};

export default ToggleSwitch;
