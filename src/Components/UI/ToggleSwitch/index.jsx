const ToggleSwitch = props => {
    return (
        <div className='toggleSwitch'>
            <input type='checkbox' id='switch' onChange={props.onToggle} />
            <label for='switch'></label>
        </div>
    );
};

export default ToggleSwitch;
