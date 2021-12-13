import { useState, forwardRef } from 'react';

const ToggleSwitch = forwardRef((props, ref) => {
    const { id = 'switch', onActivate = () => {}, onInactivate = () => {}, isToggled } = props;
    const [toggle, setToggle] = useState(isToggled);

    const handleChange = event => {
        const checked = event.target.checked;
        setToggle(checked);
        if (checked) {
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
});

export default ToggleSwitch;
