import { useState, useRef } from 'react';

const ToggleSwitch = props => {
    const { id = 'switch', onActivate = () => {}, onInactivate = () => {}, isToggled } = props;
    const [toggle, setToggle] = useState(isToggled);
    const ref = useRef(null);

    const handleChange = () => {
        setToggle(!toggle);
        if (ref.current.checked) {
            onActivate();
        } else {
            onInactivate();
        }
    };

    return (
        <div className='toggleSwitch'>
            <input ref={ref} type='checkbox' id={id} onChange={handleChange} checked={toggle} />
            <label for={id}></label>
        </div>
    );
};

export default ToggleSwitch;
